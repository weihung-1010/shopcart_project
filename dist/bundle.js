/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n//step 宣告\nconst formParts = form.querySelectorAll('.part')\nconst stepControl = document.getElementById('step-control')\nconst steps = stepControl.querySelectorAll('.step')\n// btn 宣告\nconst btnControl = document.getElementById('btn-control')\nconst backBtn = btnControl.querySelector('.control__panel--back')\nconst nextBtn = btnControl.querySelector('.control__panel--next')\nlet step = 0\n\n// 購物籃按鈕宣告\nconst dataPanel = document.querySelector('.shopping-cart__panel--item')\n\n// 購買商品數量增減\ndataPanel.addEventListener('click', (e)=>{\n  const plusB = e.target.matches('.cart-item-button2')\n  const minusB = e.target.matches('.cart-item-button1')\n  if ( plusB || minusB){\n    const quantity = e.target.parentElement.children[1]\n    let quantityText = Number(quantity.innerText)\n    if ( plusB ){\n      quantityText += 1\n    } else{\n      quantityText -= 1\n      if (quantityText < 0) quantityText = 0\n    }\n    quantity.innerHTML = quantityText\n  }\n  // 發現點擊icon無效 所以新增icon點擊效果\n  const plusIcon = e.target.matches('.fa-plus')\n  const minusIcon = e.target.matches('.fa-minus')\n  if (plusIcon || minusIcon ){\n    const amountBox = e.target.parentElement.parentElement.children[1]\n    let amount = Number(amountBox.innerText)\n    if (plusIcon) {\n    amount += 1\n  }\n    else {\n    amount -= 1\n      if (amount < 0) amount = 0\n   }\n    amountBox.innerHTML = amount\n}\n// 商品金額\n  const priceBox1 = document.querySelector('.price1')\n  const priceBox2 = document.querySelector('.price2')\n  const totalPriceBox = document.querySelector('.total-fee-amount')\n  const btn1 = e.target.matches('.btn1')\n  const btn2 = e.target.matches('.btn2')\n  const btn3 = e.target.matches('.btn3')\n  const btn4 = e.target.matches('.btn4')\n\n  const icon1 = e.target.matches('.icon1')\n  const icon2 = e.target.matches('.icon2')\n  const icon3 = e.target.matches('.icon3')\n  const icon4 = e.target.matches('.icon4')\n  let price1 = Number(priceBox1.innerText)\n  let price2 = Number(priceBox2.innerText)\n  let totalPrice = Number(totalPriceBox.innerText)\n  if( btn1 || btn2 || icon1 || icon2){\n    if(btn1 || icon1){\n      price1 -= 3999\n    }else if( btn2 || icon2){\n      price1 += 3999\n    }\n    if(price1 < 0 ) price1 = 0\n    priceBox1.innerHTML = price1\n    totalPriceBox.innerHTML = price1 + price2\n  }\n\n  if (btn3 || icon3 || btn4 || icon4) {\n    if (btn3 || icon3) {\n      price2 -= 1299\n      totalPrice -= 1299\n    } else if( btn4 || icon4){\n      price2 += 1299\n      totalPrice += 1299\n    }\n    if (price2 < 0) price2 = 0\n    if (totalPrice < 0) totalPrice = 0\n    priceBox2.innerHTML = price2\n    totalPriceBox.innerHTML = price1 + price2\n  }\n  \n})\n\n//切換步驟頁面\nfunction handleBtnControlClicked(e) {\n  e.preventDefault()\n  const nowStep = steps[step]\n  if (e.target.matches('.control__panel--next') && e.target.innerHTML === '下一步' ) {\n    const nextStep = steps[step + 1]\n    nowStep.classList.remove('active')\n    nowStep.classList.add('checked')\n    nextStep.classList.add('active')\n    formParts[step].classList.toggle('d-none')\n    formParts[step + 1].classList.toggle('d-none')\n    step += 1\n  } else if (e.target.matches('.control__panel--back')) {\n    const prevStep = steps[step - 1]\n    nowStep.classList.remove('active')\n    prevStep.classList.remove('checked')\n    prevStep.classList.add('active')\n    formParts[step].classList.toggle('d-none')\n    formParts[step - 1].classList.toggle('d-none')\n    step -= 1\n  }\n  setBtnDisabled()\n}\n\nfunction setBtnDisabled() {\n  if (step === 0) {\n    backBtn.classList.add('v-hidden')\n    nextBtn.classList.add('button-style2')\n  } else {\n    backBtn.classList.remove('v-hidden')\n  }\n  if(step >= 1){\n    nextBtn.classList.remove('button-style2')\n    nextBtn.classList.add('button-style1')\n  }\n  if (step === 2) {\n    nextBtn.innerHTML = '確認下單'\n  } else {\n    nextBtn.innerHTML = '下一步'\n  }\n}\n\n// radio style\nconst freightBox = document.querySelector('.freight')\nconst step2 = document.getElementById('step2')\nconst shipway1 = document.querySelector('.shipway1') \nconst shipway2 = document.querySelector('.shipway2')\nstep2.addEventListener('click',(e) => {\n  let freight = freightBox.innerText\n  if(e.target.matches('.radio1')){\n    shipway1.classList.remove('ship-active2')\n    shipway1.classList.add('ship-active')\n    shipway2.classList.remove('ship-active')\n    shipway2.classList.add('ship-active2')\n    freightBox.innerHTML = '免費'\n  } else if (e.target.matches('.radio2')){\n    shipway2.classList.remove('ship-active2')\n    shipway2.classList.add('ship-active')\n    shipway1.classList.remove('ship-active')\n    shipway1.classList.add('ship-active2')\n    freightBox.innerHTML = '$500'\n  }\n})\n\nbtnControl.addEventListener('click', handleBtnControlClicked)\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ })

/******/ });