(() => {
  const input = document.querySelector('[data-site-search]');
  const output = document.querySelector('[data-search-results]');
  const count = document.querySelector('[data-search-count]');
  if (!input || !output) return;
  let index = [];
  fetch('/index.json').then((response) => response.json()).then((data) => { index = data; run(); }).catch(() => { count.textContent = 'Søket kunne ikke lastes akkurat nå.'; });
  const escapeHtml = (value) => value.replace(/[&<>'"]/g, (char) => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
  const run = () => {
    const query = input.value.trim().toLocaleLowerCase('nb');
    const url = new URL(location.href);
    query ? url.searchParams.set('q', input.value.trim()) : url.searchParams.delete('q');
    history.replaceState({}, '', url);
    if (query.length < 2) { output.innerHTML = ''; count.textContent = 'Skriv minst to tegn for å søke.'; return; }
    const results = index.filter((item) => `${item.title} ${item.description} ${item.section}`.toLocaleLowerCase('nb').includes(query)).slice(0, 30);
    count.textContent = `${results.length} ${results.length === 1 ? 'treff' : 'treff'} på «${input.value.trim()}»`;
    output.innerHTML = results.map((item) => `<a class="search-result" href="${item.url}"><span class="badge">${escapeHtml(item.type)}</span><h2>${escapeHtml(item.title)}</h2><p>${escapeHtml(item.description || '')}</p></a>`).join('') || '<div class="card empty-state"><h2>Ingen treff</h2><p>Prøv et kortere eller mer generelt søkeord.</p></div>';
  };
  input.addEventListener('input', run);
  const initial = new URLSearchParams(location.search).get('q');
  if (initial) { input.value = initial; }
})();
