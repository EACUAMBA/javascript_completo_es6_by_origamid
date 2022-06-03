import ScrollSuave from './modules/scroll-suave.js';
import initScrollAnimado from './modules/scroll-animado.js';
import initTab from './modules/tabnav.js';
import accordion from './modules/accordion.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown_menu.js';
import initMenuMobile from './modules/menu_mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch_bitcoin.js'

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

initScrollAnimado();
initTab();
accordion();
initModal()
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
