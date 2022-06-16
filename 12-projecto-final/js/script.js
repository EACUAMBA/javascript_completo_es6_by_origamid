import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import ToolTip from './modules/tooltip.js';
import fetchAnimais from './modules/fetch-animais.js';
import fetchBitcoin from './modules/fetch_bitcoin.js'
import ScrollAnima from './modules/scroll-animado.js';
import DropdownMenu from './modules/dropdown_menu.js';
import MenuMobile from './modules/menu_mobile.js';
import Funcionamento from './modules/funcionamento.js';
import SlideNav from './modules/slide.js';

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

fetchAnimais();
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();
// scrollAnima.stop();

const dropdown = new DropdownMenu("[data-dropdown]");
dropdown.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="lista"]',);
menuMobile.init()
const funcionamento = new Funcionamento("[data-semana]");
funcionamento.init();

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
// slide.addArrow('.prev', '.next');
slide.addControl('.custom-controls');
