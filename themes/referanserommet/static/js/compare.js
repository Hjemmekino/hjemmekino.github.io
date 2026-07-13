(() => {
  const root = document.querySelector('[data-compare-page]');
  if (!root) return;
  const key = 'hk-compare';
  const selection = () => { try { return JSON.parse(localStorage.getItem(key) || '[]'); } catch { return []; } };
  const write = (items) => { localStorage.setItem(key, JSON.stringify(items)); render(); };
  const titleCase = (value) => value ? value.charAt(0).toLocaleUpperCase('nb') + value.slice(1) : '';
  let products = [];
  const render = () => {
    const picked = selection().map((chosen) => products.find((product) => product.id === chosen.id)).filter(Boolean);
    const content = document.querySelector('#compare-content');
    const summary = document.querySelector('#compare-summary');
    const onlyDiff = document.querySelector('[data-only-diff]').checked;
    summary.textContent = picked.length ? `${picked.length} produkter valgt` : 'Ingen produkter valgt';
    if (!picked.length) { content.innerHTML = '<div class="card empty-state"><h2>Velg produkter først</h2><p>Gå til produktdatabasen og legg til opptil fire produkter i samme kategori.</p><a class="button button--accent" href="/produkter/">Finn produkter</a></div>'; return; }
    const groups = [...new Set(picked.flatMap((product) => Object.keys(product.specs || {})))];
    let rows = '';
    groups.forEach((group) => {
      const labels = [...new Set(picked.flatMap((product) => Object.keys((product.specs || {})[group] || {})))];
      const groupRows = labels.map((label) => {
        const values = picked.map((product) => ((product.specs || {})[group] || {})[label] || 'Ikke oppgitt');
        const different = new Set(values).size > 1;
        if (onlyDiff && !different) return '';
        return `<div class="compare-grid-row" data-diff="${different}"><div class="compare-label">${titleCase(label)}</div>${values.map((value) => `<div class="compare-value${different ? ' is-different' : ''}">${value}</div>`).join('')}</div>`;
      }).join('');
      if (groupRows) rows += `<div class="compare-group">${titleCase(group)}</div>${groupRows}`;
    });
    content.innerHTML = `<div class="compare-table" style="--compare-count:${picked.length}"><div class="compare-grid-row"><div class="compare-product-head"><span class="eyebrow">Produkter</span></div>${picked.map((product) => `<div class="compare-product-head"><img src="${product.image}" alt=""><strong><a href="${product.url}">${product.name}</a></strong><div class="price">${product.price}</div><div class="meta"><i class="status-dot status-dot--${product.status}"></i>${product.statusLabel}</div><button class="text-button" type="button" data-remove-compare="${product.id}">Fjern ×</button></div>`).join('')}</div>${rows || '<div class="empty-state"><p>Ingen forskjeller i de registrerte feltene. Slå av «Vis bare forskjeller» for å se alt.</p></div>'}</div><p class="meta" style="margin-top:14px">Produktdata kan være mangelfulle. «Ikke oppgitt» betyr at feltet ikke er verifisert – ikke at funksjonen mangler.</p>`;
    content.querySelectorAll('[data-remove-compare]').forEach((button) => button.addEventListener('click', () => write(selection().filter((item) => item.id !== button.dataset.removeCompare))));
  };
  document.querySelector('[data-only-diff]')?.addEventListener('change', render);
  fetch('/produkter/index.json').then((response) => response.json()).then((data) => { products = data; render(); }).catch(() => { document.querySelector('#compare-content').innerHTML = '<div class="card empty-state"><h2>Kunne ikke laste produktdata</h2><p>Prøv igjen senere.</p></div>'; });
})();
