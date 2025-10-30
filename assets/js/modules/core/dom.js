
export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
export function createEl(tag, attrs = {}, children = []){
  const el = document.createElement(tag);
  Object.entries(attrs).forEach(([k,v]) => { if(k==='class') el.className=v; else if(k.startsWith('on')&&typeof v==='function') el.addEventListener(k.slice(2), v); else el.setAttribute(k, v); });
  children.forEach(c => { if(typeof c==='string') el.appendChild(document.createTextNode(c)); else if(c instanceof Node) el.appendChild(c); });
  return el;
}
export function mount(root, html){ root.innerHTML = html; }
export function ensureContainer(){
  let root = $('#spa-root');
  if(!root){
    const main = $('main') || document.body;
    root = createEl('section', { id:'spa-root', class:'container mt-3', role:'region', 'aria-label':'Conteúdo dinâmico'});
    main.appendChild(root);
  }
  return root;
}
