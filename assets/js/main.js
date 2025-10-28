
// main.js — masks + interações (dropdown, hamburger, modal, toast)
function maskCPF(value){return value.replace(/\D/g,'').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d{1,2})$/,'$1-$2').slice(0,14);}
function maskPhone(value){const d=value.replace(/\D/g,'');if(d.length<=10){return d.replace(/(\d{0,2})(\d{0,4})(\d{0,4}).*/,(_,a,b,c)=>(a?`(${a}`:'')+(a?') ':'')+b+(c?`-${c}`:'' )).slice(0,14);}return d.replace(/(\d{0,2})(\d{0,5})(\d{0,4}).*/,(_,a,b,c)=>(a?`(${a}`:'')+(a?') ':'')+b+(c?`-${c}`:'' )).slice(0,15);}
function maskCEP(value){return value.replace(/\D/g,'').replace(/(\d{5})(\d{1,3}).*/, '$1-$2').slice(0,9);}
function qs(s,el=document){return el.querySelector(s);} function qsa(s,el=document){return [...el.querySelectorAll(s)];}
document.addEventListener('DOMContentLoaded', ()=>{
  const cpf=qs('#cpf'); if(cpf){cpf.addEventListener('input', e=> e.target.value=maskCPF(e.target.value));}
  const phone=qs('#telefone'); if(phone){phone.addEventListener('input', e=> e.target.value=maskPhone(e.target.value));}
  const cep=qs('#cep'); if(cep){cep.addEventListener('input', e=> e.target.value=maskCEP(e.target.value));}

  const toggle=qs('.nav-toggle'); const mobile=qs('.mobile-nav');
  if(toggle && mobile){ toggle.addEventListener('click', ()=>{ const open=mobile.classList.toggle('open'); toggle.setAttribute('aria-expanded', open?'true':'false'); }); }

  qsa('.has-dropdown > a').forEach(a=>{
    a.addEventListener('keydown', (e)=>{ if(e.key==='ArrowDown'){ e.preventDefault(); const first=a.parentElement.querySelector('.dropdown a'); first?.focus(); } });
  });

  const modalBackdrop=qs('.modal-backdrop');
  qsa('[data-open-modal]').forEach(btn=> btn.addEventListener('click', ()=> modalBackdrop?.classList.add('open')));
  qsa('[data-close-modal]').forEach(btn=> btn.addEventListener('click', ()=> modalBackdrop?.classList.remove('open')));
  modalBackdrop?.addEventListener('click', (e)=>{ if(e.target===modalBackdrop) modalBackdrop.classList.remove('open'); });

  const toast=qs('.toast');
  qsa('[data-show-toast]').forEach(btn=> btn.addEventListener('click', ()=>{ if(!toast) return; toast.classList.add('show'); setTimeout(()=> toast.classList.remove('show'), 3000); }));

  const progress=qs('.progresso > div'); if(progress){ let v=40; setInterval(()=>{ v=(v>=95)?40:(v+1); progress.style.width=v+'%'; }, 120); }
});
