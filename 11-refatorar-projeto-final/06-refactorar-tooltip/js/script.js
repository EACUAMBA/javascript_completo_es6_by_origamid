import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import ToolTip from './modules/tooltip.js';

import initDropdownMenu from './modules/dropdown_menu.js';
import initMenuMobile from './modules/menu_mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch_bitcoin.js'
import initScrollAnimado from './modules/scroll-animado.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();
const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();
const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();
const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="login"]', '[data-modal="container"]')
modal.init();
const toolTip = new ToolTip('[data-tooltip]')
toolTip.init();

initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initScrollAnimado();
