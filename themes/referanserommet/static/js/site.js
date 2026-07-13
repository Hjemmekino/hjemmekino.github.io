(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('[data-theme-toggle]');
  themeButton?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    localStorage.setItem('hk-theme', next);
  });

  const menuButton = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('#main-nav');
  menuButton?.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(open));
  });

  const toc = document.querySelector('[data-toc]');
  document.querySelector('[data-toc-toggle]')?.addEventListener('click', () => toc?.classList.toggle('is-open'));

  document.querySelector('[data-newsletter]')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    form.innerHTML = '<p class="meta">Takk! Påmeldingen kobles til nyhetsbrevet før lansering.</p>';
  });

  document.querySelectorAll('[data-filter-group="news"]').forEach((group) => {
    group.addEventListener('click', (event) => {
      const button = event.target.closest('[data-filter]');
      if (!button) return;
      group.querySelectorAll('[data-filter]').forEach((item) => item.classList.toggle('is-active', item === button));
      document.querySelectorAll('[data-filter-item]').forEach((item) => {
        item.hidden = button.dataset.filter !== 'all' && item.dataset.category !== button.dataset.filter;
      });
    });
  });

  const storageKey = 'hk-compare';
  const readCompare = () => {
    try { return JSON.parse(localStorage.getItem(storageKey) || '[]'); }
    catch { return []; }
  };
  const writeCompare = (items) => {
    localStorage.setItem(storageKey, JSON.stringify(items));
    window.dispatchEvent(new CustomEvent('hk:compare', { detail: items }));
  };
  const toggleCompare = (button) => {
    const product = { id: button.dataset.compareAdd, name: button.dataset.productName, category: button.dataset.productCategory };
    let items = readCompare();
    if (items.some((item) => item.id === product.id)) items = items.filter((item) => item.id !== product.id);
    else {
      if (items.length && items[0].category !== product.category) items = [];
      if (items.length < 4) items.push(product);
    }
    writeCompare(items);
  };
  document.addEventListener('click', (event) => {
    const add = event.target.closest('[data-compare-add]');
    if (add) toggleCompare(add);
    const remove = event.target.closest('[data-compare-remove]');
    if (remove) writeCompare(readCompare().filter((item) => item.id !== remove.dataset.compareRemove));
    if (event.target.closest('[data-compare-clear]')) writeCompare([]);
  });

  const renderCompare = (items = readCompare()) => {
    const drawer = document.querySelector('#compare-drawer');
    const itemWrap = document.querySelector('#compare-drawer-items');
    if (!drawer || !itemWrap) return;
    const onComparePage = Boolean(document.querySelector('[data-compare-page]'));
    drawer.hidden = !items.length || onComparePage;
    itemWrap.innerHTML = items.map((item) => `<span class="compare-drawer__chip">${item.name}<button type="button" aria-label="Fjern ${item.name}" data-compare-remove="${item.id}">×</button></span>`).join('');
    const link = document.querySelector('#compare-link');
    if (link) link.textContent = `Sammenlign (${items.length})`;
    document.querySelectorAll('[data-compare-add]').forEach((button) => {
      const selected = items.some((item) => item.id === button.dataset.compareAdd);
      button.classList.toggle('is-selected', selected);
      button.textContent = selected ? '✓ Valgt' : button.closest('.product-hero') ? 'Legg til sammenligning' : '+ Sammenlign';
    });
  };
  window.addEventListener('hk:compare', (event) => renderCompare(event.detail));
  renderCompare();

  const productRoot = document.querySelector('[data-product-results]');
  if (productRoot) {
    const state = { category: 'all', brand: 'all', status: 'all', sort: 'brand' };
    const params = new URLSearchParams(location.search);
    if (params.get('kategori')) state.category = params.get('kategori');
    const updateFilters = () => {
      const items = [...productRoot.querySelectorAll('[data-product-item]')];
      items.sort((a, b) => state.sort === 'newest' ? Number(b.dataset.year) - Number(a.dataset.year) : a.dataset.title.localeCompare(b.dataset.title, 'nb'));
      items.forEach((item) => productRoot.append(item));
      let shown = 0;
      items.forEach((item) => {
        const visible = (state.category === 'all' || item.dataset.category === state.category) && (state.brand === 'all' || item.dataset.brand === state.brand) && (state.status === 'all' || item.dataset.status === state.status);
        item.hidden = !visible;
        if (visible) shown += 1;
      });
      document.querySelector('[data-product-count]').textContent = `${shown} ${shown === 1 ? 'produkt' : 'produkter'}`;
      document.querySelector('[data-product-empty]').hidden = shown > 0;
      document.querySelectorAll('[data-product-category]').forEach((button) => button.classList.toggle('is-active', button.dataset.productCategory === state.category));
      document.querySelectorAll('[data-product-brand]').forEach((button) => button.classList.toggle('is-active', button.dataset.productBrand === state.brand));
      const url = new URL(location.href);
      state.category === 'all' ? url.searchParams.delete('kategori') : url.searchParams.set('kategori', state.category);
      history.replaceState({}, '', url);
    };
    document.querySelector('[data-product-tabs]')?.addEventListener('click', (event) => {
      const button = event.target.closest('[data-product-category]');
      if (button) { state.category = button.dataset.productCategory; updateFilters(); }
    });
    document.querySelector('.filter-chips')?.addEventListener('click', (event) => {
      const button = event.target.closest('[data-product-brand]');
      if (button) { state.brand = button.dataset.productBrand; updateFilters(); }
    });
    document.querySelector('[data-product-status]')?.addEventListener('change', (event) => { state.status = event.target.value; updateFilters(); });
    document.querySelector('[data-product-sort]')?.addEventListener('change', (event) => { state.sort = event.target.value; updateFilters(); });
    document.querySelectorAll('[data-product-reset]').forEach((button) => button.addEventListener('click', () => {
      Object.assign(state, { category: 'all', brand: 'all', status: 'all', sort: 'brand' });
      document.querySelector('[data-product-status]').value = 'all';
      document.querySelector('[data-product-sort]').value = 'brand';
      updateFilters();
    }));
    document.querySelector('[data-mobile-filter]')?.addEventListener('click', (event) => {
      const panel = document.querySelector('#product-filters');
      const open = panel.classList.toggle('is-open');
      event.currentTarget.textContent = open ? 'Skjul filtre' : 'Vis filtre';
    });
    updateFilters();
  }
})();
