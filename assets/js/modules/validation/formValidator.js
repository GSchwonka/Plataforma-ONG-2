
export function attachFormValidation(form){
  if(!form) return;
  const email=form.querySelector('#email'), cpf=form.querySelector('#cpf'), cep=form.querySelector('#cep'), telefone=form.querySelector('#telefone'), nascimento=form.querySelector('#nascimento'), estado=form.querySelector('#estado');
  function validateConsistency(){
    const issues=[];
    if(email && !/^\S+@\S+\.\S+$/.test(email.value)) issues.push('E-mail inválido');
    if(cpf && !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf.value)) issues.push('CPF no formato 000.000.000-00');
    if(cep && !/^\d{5}-\d{3}$/.test(cep.value)) issues.push('CEP no formato 00000-000');
    if(telefone){ const d = telefone.value.replace(/\D/g,''); if(d.length<10) issues.push('Telefone com DDD'); }
    if(nascimento && nascimento.value){ const dob = new Date(nascimento.value+'T00:00:00'); const now=new Date(); let age=now.getFullYear()-dob.getFullYear(); const m=now.getMonth()-dob.getMonth(); if(m<0 || (m===0 && now.getDate()<dob.getDate())) age--; if(age<16) issues.push('Mínimo 16 anos'); }
    if(estado && !estado.value) issues.push('Selecione um estado');
    return issues;
  }
  function toast(msg){
    let t=document.querySelector('.toast'); if(!t){ t=document.createElement('div'); t.className='toast'; t.setAttribute('role','status'); t.setAttribute('aria-live','polite'); document.body.appendChild(t); }
    t.textContent=msg; t.classList.add('show'); setTimeout(()=> t.classList.remove('show'), 3000);
  }
  form.addEventListener('submit', (e)=>{
    const issues=validateConsistency();
    if(issues.length){ e.preventDefault(); toast('Corrija: '+issues.join(' | ')); }
    else{
      const data = Object.fromEntries(new FormData(form).entries());
      localStorage.setItem('cadastroDraft', JSON.stringify(data));
      toast('Dados enviados (simulação). Rascunho salvo.');
    }
  });
  const draft = localStorage.getItem('cadastroDraft');
  if(draft){ try{ const data=JSON.parse(draft); Object.keys(data).forEach(k=>{ const el=form.querySelector(`[name="${k}"]`); if(el) el.value=data[k]; }); }catch{} }
}
