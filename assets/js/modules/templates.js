
import home from './pages/home.js';
import projetos from './pages/projetos.js';
import cadastro from './pages/cadastro.js';
export const routes = {'#/home': home, '#/projetos': projetos, '#/cadastro': cadastro, '#/404': () => `<div class="card"><h2>Página não encontrada</h2></div>`};
