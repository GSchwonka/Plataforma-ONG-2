
// main.js (base) - aqui permanecem as máscaras e interações mínimas + loader SPA
function maskCPF(value){return value.replace(/\D/g,'').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d{1,2})$/,'$1-$2').slice(0,14);}
function maskPhone(value){const d=value.replace(/\D/g,'');if(d.length<=10){return d.replace(/(\d{0,2})(\d{0,4})(\d{0,4}).*/,(_,a,b,c)=>(a?`(${a}`:'')+(a?') ':'')+b+(c?`-${c}`:'' )).slice(0,14);}return d.replace(/(\d{0,2})(\d{0,5})(\d{0,4}).*/,(_,a,b,c)=>(a?`(${a}`:'')+(a?') ':'')+b+(c?`-${c}`:'' )).slice(0,15);}
function maskCEP(value){return value.replace(/\D/g,'').replace(/(\d{5})(\d{1,3}).*/, '$1-$2').slice(0,9);}
document.addEventListener('DOMContentLoaded', ()=>{
  const cpf=document.querySelector('#cpf'); if(cpf){cpf.addEventListener('input', e=> e.target.value=maskCPF(e.target.value));}
  const phone=document.querySelector('#telefone'); if(phone){phone.addEventListener('input', e=> e.target.value=maskPhone(e.target.value));}
  const cep=document.querySelector('#cep'); if(cep){cep.addEventListener('input', e=> e.target.value=maskCEP(e.target.value));}

  // Loader SPA (module) sem alterar as tags dos HTML
  const s=document.createElement('script'); s.type='module'; s.src='assets/js/app.js'; document.head.appendChild(s);
});
