/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dev/modules/accordion.js":
/*!**********************************!*\
  !*** ./dev/modules/accordion.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordion)\n/* harmony export */ });\n\r\nfunction initAccordion() {\r\n  const accordionList = document.querySelectorAll('[data-anime=\"accordion\"] dt');\r\n  if (!accordionList.length) {\r\n    return;\r\n  }\r\n\r\n  const activoClass = \"activo\";\r\n\r\n  accordionList[0].classList.add(activoClass);\r\n  accordionList[0].nextElementSibling.classList.add(activoClass);\r\n  function activeAccordion() {\r\n    this.classList.toggle(activoClass);\r\n    this.nextElementSibling.classList.toggle(activoClass);\r\n  }\r\n\r\n  accordionList.forEach((item) => {\r\n    item.addEventListener(\"click\", activeAccordion)\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./dev/modules/accordion.js?");

/***/ }),

/***/ "./dev/modules/anima_numeros.js":
/*!**************************************!*\
  !*** ./dev/modules/anima_numeros.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction  initAnimaNumeros(){\r\n    const observer = new MutationObserver(handleMutation);\r\n    const observerTarget = document.querySelector('.numeros');\r\n    const numeros = document.querySelectorAll('[data-numero]');\r\n\r\n    function anima() {\r\n        numeros.forEach((numero)=>{\r\n            const total = +numero.innerHTML;\r\n            let passo = Math.floor(total / 50);\r\n            let novoTotal = 0;\r\n            const timer = setInterval(() => {\r\n                novoTotal += passo;\r\n                numero.innerHTML = novoTotal;\r\n                if(novoTotal > total){\r\n                    numero.innerHTML = total;\r\n                    clearInterval(timer)\r\n                }\r\n            }, Math.random()*25)\r\n        })\r\n    }\r\n\r\n    function handleMutation(mutation) {\r\n        if(mutation[0].target.classList.contains(\"activo\")){\r\n            observer.disconnect()\r\n            anima()\r\n        }\r\n\r\n    }\r\n    observer.observe(observerTarget, {attributes: true});\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./dev/modules/anima_numeros.js?");

/***/ }),

/***/ "./dev/modules/dropdown_menu.js":
/*!**************************************!*\
  !*** ./dev/modules/dropdown_menu.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./dev/modules/outsideClick.js\");\n\r\n\r\nfunction initDropdownMenu() {\r\n    const clickEvents = ['click', 'touchstart'];\r\n    const dropdown_menus = document.querySelectorAll(\"[data-dropdown]\");\r\n\r\n    dropdown_menus.forEach((item) => {\r\n        clickEvents.forEach((userEvent) => {\r\n            item.addEventListener(userEvent, handleClick)\r\n        })\r\n    });\r\n\r\n\r\n    function handleClick(event) {\r\n        event.preventDefault();\r\n        this.classList.toggle('active');\r\n        (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, clickEvents,() => {\r\n            this.classList.remove('active');\r\n        });\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./dev/modules/dropdown_menu.js?");

/***/ }),

/***/ "./dev/modules/fetch-animais.js":
/*!**************************************!*\
  !*** ./dev/modules/fetch-animais.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima_numeros.js */ \"./dev/modules/anima_numeros.js\");\n\r\n\r\nfunction initFetchAnimais() {\r\n    async function fetchAnimais(URL) {\r\n        try {\r\n            const animaisResponse = await fetch(URL);\r\n            const animaisJson = await animaisResponse.json();\r\n            const numerosGrid = document.querySelector(\".numeros-grid\")\r\n\r\n            animaisJson.forEach((a) => {\r\n                const divAnimal = createAnimal(a)\r\n                numerosGrid.appendChild(divAnimal);\r\n            })\r\n            ;(0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n        } catch (erro) {\r\n            console.log(Error(erro).message)\r\n        }\r\n    }\r\n\r\n    function createAnimal(animal) {\r\n        const div = document.createElement(\"div\");\r\n        div.classList.add(\"numero-animal\")\r\n        div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.totais}</span>`;\r\n        return div;\r\n    }\r\n\r\n    fetchAnimais(\"./animaisapi.json\");\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./dev/modules/fetch-animais.js?");

/***/ }),

/***/ "./dev/modules/fetch_bitcoin.js":
/*!**************************************!*\
  !*** ./dev/modules/fetch_bitcoin.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\nfunction initFetchBitcoin(){\r\n\r\n}\r\nconst URL = 'https://blockchain.info/ticker';\r\nfetch(URL)\r\n.then(response=>{return response.json();})\r\n.then(json=>{\r\n    const btcPreco = document.querySelector('.btc-preco')\r\n    btcPreco.innerHTML = Number(1000 / json.BRL.sell).toFixed(4)\r\n    console.log(json.BRL.sell)})\r\n    .catch(erro=>{\r\n        console.log(Error(erro).message)\r\n    })\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./dev/modules/fetch_bitcoin.js?");

/***/ }),

/***/ "./dev/modules/funcionamento.js":
/*!**************************************!*\
  !*** ./dev/modules/funcionamento.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento(){\r\n\r\n\r\n  }\r\nconst funcionamento= document.querySelector(\"[data-semana]\");\r\nconst diasSemana = funcionamento.dataset['semana'].split(', ').map(Number);\r\nconst horarioSemana = funcionamento.dataset['horario'].split(', ').map(Number);\r\n\r\n\r\n\r\nconst hoje = new Date();\r\nconst diaAgora = hoje.getDay();\r\nconst horarioAgora = hoje.getHours() - 1;\r\n\r\nlet horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];\r\nlet diaAberto = diasSemana.includes(diaAgora)\r\n\r\nif(horarioAberto && diaAberto)\r\n  funcionamento.classList.add(\"aberto\");\r\nelse\r\n  funcionamento.classList.add(\"fechado\");\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./dev/modules/funcionamento.js?");

/***/ }),

/***/ "./dev/modules/menu_mobile.js":
/*!************************************!*\
  !*** ./dev/modules/menu_mobile.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./dev/modules/outsideClick.js\");\n\r\n\r\nfunction initMenuMobile(){\r\n    const menu_button = document.querySelector('[data-menu=\"button\"]');\r\n    const menu_lista = document.querySelector('[data-menu=\"lista\"]');\r\n    const eventos = ['click', 'touchstart'];\r\n\r\n   if(menu_button  && menu_lista){\r\n       eventos.forEach((evt)=>{\r\n           menu_button.addEventListener(evt, openMenu);\r\n       })\r\n\r\n       function openMenu(event) {\r\n           menu_button.classList.add(\"active\");\r\n           menu_lista.classList.add(\"active\");\r\n           (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menu_lista, eventos, ()=>{\r\n               menu_button.classList.remove(\"active\");\r\n               menu_lista.classList.remove(\"active\");\r\n           })\r\n       }\r\n   }\r\n\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./dev/modules/menu_mobile.js?");

/***/ }),

/***/ "./dev/modules/modal.js":
/*!******************************!*\
  !*** ./dev/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal(){\r\n  const botaoAbrir = document.querySelector('[data-modal=\"abrir\"]');\r\n  const botaoFechar = document.querySelector('[data-modal=\"fechar\"]');\r\n  const botaoLogin = document.querySelector('[data-modal=\"login\"]');\r\n  const containerModal = document.querySelector('[data-modal=\"container\"]');\r\n  const activo = 'activo';\r\n  \r\n  // console.log(botaoAbrir, botaoFechar, botaoLogin, containerModal)\r\n  \r\n  function toggleModal(event){\r\n   event.preventDefault();\r\n   containerModal.classList.toggle(activo)\r\n  }\r\n  \r\n  function clickForaDoModal(event) {\r\n    console.log(event)\r\n    if(event.target === this)\r\n    toggleModal(event);\r\n  }\r\n  \r\n  botaoAbrir.addEventListener('click', toggleModal)\r\n  botaoFechar.addEventListener('click', toggleModal)\r\n  containerModal.addEventListener('click', clickForaDoModal)\r\n}\r\n\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./dev/modules/modal.js?");

/***/ }),

/***/ "./dev/modules/outsideClick.js":
/*!*************************************!*\
  !*** ./dev/modules/outsideClick.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clickOutside)\n/* harmony export */ });\nfunction clickOutside(element, clickEvents,callback) {\r\n    //Retorna o elemento HTML\r\n    const html = document.documentElement;\r\n    const dataOutside = 'data-outside';\r\n\r\n    if (!element.hasAttribute(dataOutside)) {\r\n        clickEvents.forEach(userEvent=>{\r\n            setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));\r\n        })\r\n        element.setAttribute(dataOutside, '');\r\n    }\r\n\r\n    function handleOutsideClick(event) {\r\n        if (!element.contains(event.target)) {\r\n            element.removeAttribute(dataOutside);\r\n            callback();\r\n            clickEvents.forEach((userEvent)=>{\r\n                html.removeEventListener(userEvent, handleOutsideClick)\r\n            })\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://animais-fantasticos/./dev/modules/outsideClick.js?");

/***/ }),

/***/ "./dev/modules/scroll-animado.js":
/*!***************************************!*\
  !*** ./dev/modules/scroll-animado.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ animacaoScroll)\n/* harmony export */ });\n//12 Animação ao Scroll\r\nfunction animacaoScroll(){\r\n  const sections = document.querySelectorAll('[data-anime=\"scroll\"]');\r\n  if(!sections.length){\r\n    return;\r\n  }\r\nconst windowMetade= window.innerHeight * 0.6;\r\nfunction animaScroll(event){\r\n  sections.forEach((section)=>{\r\n    const sectionTop = section.getBoundingClientRect().top;\r\n    let sectionTopMais40Porcento = sectionTop  - windowMetade;\r\n   if(sectionTopMais40Porcento < 0)\r\n         section.classList.add(\"activo\")\r\n   else if(section.classList.contains(\"activo\"))\r\n    section.classList.remove(\"activo\")\r\n   \r\n  })\r\n}\r\nwindow.onscroll = animaScroll;\r\nanimaScroll();\r\n}\n\n//# sourceURL=webpack://animais-fantasticos/./dev/modules/scroll-animado.js?");

/***/ }),

/***/ "./dev/modules/scroll-suave.js":
/*!*************************************!*\
  !*** ./dev/modules/scroll-suave.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollSuave)\n/* harmony export */ });\n//11-Scroll Suave\nfunction initScrollSuave(){\n  const linksInternos = document.querySelectorAll('[data-menu=\"suave\"] a[href^=\"#\"]');\n\nfunction scrollToSection(event){\n  event.preventDefault();\n  const href = event.currentTarget.getAttribute('href');\n  const sectionSelecionada =document.querySelector(href);\n  // const distanciaDoTopo = sectionSelecionada.getBoundingClientRect().top;\n  const distanciaDoTopo = sectionSelecionada.offsetTop;\n\n  // window.scrollTo({\n  //   top: distanciaDoTopo,\n  //   behavior: \"smooth\"\n  // });\n\n  //formaArternativa\n  sectionSelecionada.scrollIntoView({\n    behavior: \"smooth\",\n    block: \"start\"\n  });\n}\n\nlinksInternos.forEach((link)=>{\n  link.addEventListener(\"click\", scrollToSection)\n});\n}\n\n//# sourceURL=webpack://animais-fantasticos/./dev/modules/scroll-suave.js?");

/***/ }),

/***/ "./dev/modules/tabnav.js":
/*!*******************************!*\
  !*** ./dev/modules/tabnav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTab)\n/* harmony export */ });\nfunction initTab(){\r\n  const tabmenu = document.querySelectorAll('[data-tab=\"menu\"] li');\r\nconst tabcontent = document.querySelectorAll('[data-tab=\"content\"] section');\r\n\r\nif(tabmenu.length && tabcontent.length){\r\ntabcontent[0].classList.add(\"activo\");\r\n//Vamos remover dos elemento a class activo depois adicionar classe de acordo com o numero que eu passar, o numero é a posição no array.\r\nfunction activateTab(index){\r\n  tabcontent.forEach(item=>item.classList.remove(\"activo\"));\r\n  const direcao = tabcontent[index].dataset.anime;\r\n  tabcontent[index].classList.add(\"activo\", direcao);\r\n  // console.log(tabcontent[index])\r\n}\r\n\r\ntabmenu.forEach((item, index)=>{\r\n  item.addEventListener(\"click\", (event)=>{\r\n    activateTab(index);\r\n    // console.log(event);\r\n  })\r\n});\r\n}\r\n}\n\n//# sourceURL=webpack://animais-fantasticos/./dev/modules/tabnav.js?");

/***/ }),

/***/ "./dev/modules/tooltip.js":
/*!********************************!*\
  !*** ./dev/modules/tooltip.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip(){\r\n\r\n//Seleccionar com quem estamos falando\r\n  const tooltips = document.querySelectorAll('[data-tooltip]');\r\n\r\n//Adicionando o evento de mouseover em todos os elementos tooltip\r\n  tooltips.forEach((tooltip) => {\r\n    tooltip.addEventListener('mouseover', onMouseOver);\r\n  })\r\n\r\n  function onMouseOver(event){\r\n    //recebendo o elemento tooltip\r\n    const tooltipBox = criarTooltipBox(this);\r\n\r\n    //colocando a posição na tela no eixo da ordenadas.\r\n    tooltipBox.style.top = event.pageY + 'px';\r\n\r\n    //colocando  a posição do eixo esquerda.\r\n    tooltipBox.style.left = event.pageX  + 'px';\r\n\r\n    //podemos passar um objecto ao addEventListener mas ele deve ter um método handleEvent\r\n    onMouseLeave.tooltipBox = tooltipBox;\r\n    onMouseLeave.element = this;\r\n    this.addEventListener('mouseleave', onMouseLeave)\r\n\r\n    //Adicionando o evento de move do mouse.\r\n    onMouseMove.tooltipBox = tooltipBox;\r\n    onMouseMove.element = this;\r\n    this.addEventListener('mousemove', onMouseMove);\r\n\r\n  }\r\n\r\n//Estamos removendo os elementos tooltips para não apresentarem mais na tela e removendo os eventos.\r\n  const onMouseLeave = {\r\n    tooltipBox : null,\r\n    element : null,\r\n    handleEvent(evt) {\r\n      this.tooltipBox.remove();\r\n      this.element.removeEventListener('mouseleave', onMouseLeave);\r\n      this.element.removeEventListener('mousemove', onMouseMove);\r\n\r\n    }\r\n  }\r\n\r\n//Neste evento estamos actualizando as coordenadas do tooltip na tela.\r\n  const onMouseMove = {\r\n    tooltipBox : null,\r\n    element : null,\r\n    handleEvent(event) {\r\n      this.tooltipBox.style.top = event.pageY + 20 + 'px';\r\n      this.tooltipBox.style.left = event.pageX  + 20 + 'px';\r\n    }\r\n  }\r\n\r\n  function criarTooltipBox(element) {\r\n    //Criando um elemento div\r\n    const tooltipBox = document.createElement('div');\r\n\r\n    //Pegando o dados do atributo aria-label que esta no elemento de tooltip.\r\n    const text = element.getAttribute('aria-label');\r\n\r\n    //Adicionando a classe tooltip no elemento criado que deverá aparecer ao passar o mouse.\r\n    tooltipBox.classList.add('tooltip');\r\n\r\n    //Colocando o texto no elemento tooltip\r\n    tooltipBox.innerText = text;\r\n\r\n    //Adicionando o elemento tooltip no body.\r\n    document.body.appendChild(tooltipBox)\r\n\r\n    //retornando o elemento tooltip\r\n    return tooltipBox;\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./dev/modules/tooltip.js?");

/***/ }),

/***/ "./dev/script.js":
/*!***********************!*\
  !*** ./dev/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_animado_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-animado.js */ \"./dev/modules/scroll-animado.js\");\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./dev/modules/scroll-suave.js\");\n/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabnav.js */ \"./dev/modules/tabnav.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/accordion.js */ \"./dev/modules/accordion.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./dev/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./dev/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown_menu.js */ \"./dev/modules/dropdown_menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu_mobile.js */ \"./dev/modules/menu_mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./dev/modules/funcionamento.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./dev/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch_bitcoin.js */ \"./dev/modules/fetch_bitcoin.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_scroll_animado_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_tabnav_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_accordion_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\r\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./dev/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./dev/script.js");
/******/ 	
/******/ })()
;