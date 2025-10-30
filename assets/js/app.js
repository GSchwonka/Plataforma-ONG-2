
import { initRouter } from './modules/core/router.js';
import { attachFormValidation } from './modules/validation/formValidator.js';
document.addEventListener('DOMContentLoaded', ()=>{
  const staticForm=document.querySelector('form');
  if(staticForm) attachFormValidation(staticForm);
  initRouter();
});
