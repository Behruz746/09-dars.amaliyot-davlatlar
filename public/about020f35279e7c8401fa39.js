(()=>{var n={896:()=>{const n=document.querySelector(".header__dark-mode"),e=document.body,a=localStorage.getItem("mode")?localStorage.getItem("mode"):null;a&&e.classList.add("dark-mode"),n.addEventListener("click",(()=>{e.classList.toggle("dark-mode"),a?localStorage.setItem("mode",""):localStorage.setItem("mode","dark")}))}},e={};function a(s){var o=e[s];if(void 0!==o)return o.exports;var t=e[s]={exports:{}};return n[s](t,t.exports,a),t.exports}(()=>{"use strict";a(896),document.querySelector(".cards");const n=document.querySelector(".country-info"),e=document.querySelector(".loader"),s=n=>{n?e.classList.remove("hidden"):e.classList.add("hidden")},o=window.location.search;(async n=>{s(!0);const e=await fetch(n);if(!e.ok)throw s(!1),new Error("Something went wrong :( FUCK YOU BITCH");const a=await e.json();return s(!1),a})(`https://restcountries.com/v3.1/${new URLSearchParams(o).get("country")}`).then((e=>{(e=>{const{population:a,borders:s,capital:o,flags:t,name:r,region:c,tld:l,currencies:i,languages:p,subregion:u}=e,d=Object.values(r.nativeName)[0].official,m=Object.values(i)[0].name,g=Object.values(p);console.log(s),n.innerHTML=`\n        <img\n            class="country-info__img"\n            src=${t.svg}\n            alt="germany-flag"\n            width="560"\n            height="400"\n        />\n        <div class="country-info__content">\n            <h2>${r.common}</h2>\n            <ul class="country-info__list">\n                <li class="country-info__item">\n                        <p class="name">\n                            Native Name:\n                            <span>${d}</span>\n                        </p>\n                        <p class="population">\n                            Population:\n                            <span>${a}</span>\n                        </p>\n                        <p class="region">\n                            Region:\n                            <span>${c}</span>\n                        </p>\n                        <p class="sub-region">\n                            Sub Region:\n                            <span>${u}</span>\n                        </p>\n                        <p class="capital">\n                            Capital:\n                            <span>${o}</span>\n                        </p>\n                </li>\n                <li class="country-info__item">\n                    <p class="name">\n                        Top Level Domain:\n                        <span>${l}</span>\n                    </p>\n                    <p class="population">\n                        Currencies:\n                        <span>${m}</span>\n                    </p>\n                    <p class="region">\n                        Languages:\n                        <span>${g}</span>\n                    </p>\n                </li>\n            </ul>\n\n            <div class="country-info__borders">\n                <h3>Border Countries:</h3>\n                ${s?s.map((n=>`<a href="./about.html?country=alpha/${n}">${n}</a>`)):"No borders"}\n            </div>\n        </div>\n    `})(e[0])})).catch((n=>{alert(n.message)}))})()})();