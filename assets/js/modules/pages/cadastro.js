
import { attachFormValidation } from '../validation/formValidator.js';
export default function cadastro(){
  const html = `<section aria-labelledby='spa-cadastro'><h1 id='spa-cadastro'>Cadastro (SPA)</h1>
  <form id='spa-form' action='#' method='post' novalidate>
    <fieldset><legend>Dados pessoais</legend>
      <div class='row'>
        <div class='span-4'><label for='nome'>Nome *</label><input id='nome' name='nome' required></div>
        <div class='span-4'><label for='email'>E-mail *</label><input id='email' name='email' type='email' required></div>
        <div class='span-4'><label for='nascimento'>Nascimento *</label><input id='nascimento' name='nascimento' type='date' required></div>
        <div class='span-4'><label for='cpf'>CPF *</label><input id='cpf' name='cpf' required pattern='\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}' placeholder='000.000.000-00'></div>
        <div class='span-4'><label for='telefone'>Telefone *</label><input id='telefone' name='telefone' required placeholder='(00) 00000-0000'></div>
        <div class='span-4'><label for='cep'>CEP *</label><input id='cep' name='cep' required pattern='\\d{5}-\\d{3}' placeholder='00000-000'></div>
        <div class='span-4'><label for='cidade'>Cidade *</label><input id='cidade' name='cidade' required></div>
        <div class='span-4'><label for='estado'>Estado *</label><select id='estado' name='estado' required><option value='' selected disabled>Selecione</option><option>SP</option><option>RJ</option></select></div>
      </div>
    </fieldset>
    <button class='btn' type='submit'>Enviar cadastro</button>
  </form></section>`;
  queueMicrotask(()=>{ const f=document.querySelector('#spa-form'); attachFormValidation(f); });
  return html;
}
