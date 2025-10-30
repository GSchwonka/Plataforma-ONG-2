
import { ensureContainer, mount } from './dom.js';
import { routes } from '../templates.js';
function parseHash(){ const h = location.hash || '#/home'; const [path, query] = h.split('?'); const params = new URLSearchParams(query||''); return { path, params }; }
export function initRouter(){
  const render = ()=>{ const { path, params } = parseHash(); const view = routes[path] || routes['#/404']; const html = (typeof view==='function') ? view(params) : view; const root = ensureContainer(); mount(root, html); root.scrollIntoView({behavior:'smooth', block:'start'}); };
  window.addEventListener('hashchange', render); render();
}
