
# Plataforma para ONGs — Entrega 2 (CSS3 + Design System)

Esta entrega aplica **CSS3** para transformar a estrutura HTML em uma interface **profissional, responsiva e acessível**.

## O que foi adicionado
- **Design System** com variáveis CSS (8+ cores, tipografia 5+, espaçamento 8px).
- **Grid de 12 colunas** + 5 *breakpoints* (360, 480, 768, 1024, 1280).
- **Navegação responsiva**: menu principal com **submenu (dropdown)** e **menu hambúrguer** no mobile.
- **Componentes**: cards, **botões** com estados (hover/focus/active/disabled), **alerts**, **toast**, **modal**.
- **Formulários** estilizados com **validação visual** nativa.
- **Badges/Tags** para categorização.

## Estrutura de CSS (modular)
- `assets/css/base.css` — paleta, tipografia, espaçamentos, variáveis, reset.
- `assets/css/layout.css` — grid 12, container, header/nav, breakpoints.
- `assets/css/components.css` — botões, cards, alerts, toast, modal, formulários.
- `assets/css/utilities.css` — utilitários.

## Como rodar localmente
Abra os `.html` no navegador ou sirva com:
```bash
python -m http.server 5500
# acesse http://localhost:5500
```
