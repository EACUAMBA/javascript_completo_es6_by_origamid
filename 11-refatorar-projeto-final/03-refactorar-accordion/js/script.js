import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';

import initTab from './modules/tabnav.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
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

initTab();
accordion();
initModal()
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initScrollAnimado();
