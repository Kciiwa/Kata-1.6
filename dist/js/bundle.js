!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(3)},function(e,t,n){},function(e,t){let n=document.querySelector(".menu-burger"),r=document.querySelector(".btn-burger"),o=document.querySelector(".btn-close"),i=document.querySelector(".main-content");document.querySelector(".page-body");r.addEventListener("click",(function(){n.classList.toggle("menu-burger--show"),i.classList.add("main-content--blur")})),o.addEventListener("click",(function(){n.classList.toggle("menu-burger--show"),i.classList.remove("main-content--blur")})),document.addEventListener("click",e=>{n.contains(e.target)||e.target===r||(n.classList.add("menu-burger--show"),i.classList.remove("main-content--blur"),e.stopPropagation)})},function(e,t,n){"use strict";n.r(t);n(1),n(2);function r(e,t,n,r,o,i){e.textContent===o?(e.textContent=i,n.style.rotate="180deg",t.classList.remove(r)):(e.textContent=o,n.style.rotate="",t.classList.add(r))}const o=(e,t,n)=>{let r;e=window.matchMedia(e);const o=function(){return e.matches?void(r=new Swiper(t,n)):void(void 0!==r&&r.destroy(!0,!0))};e.addEventListener("change",o),o()};window.addEventListener("DOMContentLoaded",()=>{o("(max-width: 768px)",".slider-1",{loop:!0,spaceBetween:15,slidesPerView:1.1,breakpoints:{320:{slidesPerView:1.2},480:{slidesPerView:1.8},640:{slidesPerView:2.5}},pagination:{el:".swiper-pagination",clickable:!0}})});let i=document.querySelector(".read-more__btn--brands");i.addEventListener("click",(function(){r(i,document.querySelector(".brand-list"),document.querySelector(".read-more__icon--brands"),"brand-list--hidden","Показать все","Скрыть")})),window.addEventListener("DOMContentLoaded",()=>{o("(max-width: 768px)",".slider-2",{loop:!0,spaceBetween:15,slidesPerView:1.2,breakpoints:{320:{slidesPerView:1.5},480:{slidesPerView:1.8},640:{slidesPerView:2.5}},pagination:{el:".swiper-pagination",clickable:!0}})}),document.querySelector(".read-more__btn--repair").addEventListener("click",(function(){r(document.querySelector(".read-more__btn--repair"),document.querySelector(".repair-list"),document.querySelector(".read-more__icon--repair"),"repair-list--hidden","Показать все","Скрыть")})),console.log("Works!")}]);
//# sourceMappingURL=bundle.js.map