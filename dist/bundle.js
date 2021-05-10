(()=>{"use strict";var e={426:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(645),o=t.n(n)()((function(e){return e[1]}));o.push([e.id,"h1,\nh2 {\n  font-family: Lato;\n}\n#textik {\n  white-space: pre-line;\n}\n",""]);const r=o},645:e=>{e.exports=function(e){var a=[];return a.toString=function(){return this.map((function(a){var t=e(a);return a[2]?"@media ".concat(a[2]," {").concat(t,"}"):t})).join("")},a.i=function(e,t,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);n&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),a.push(s))}},a}},379:(e,a,t)=>{var n,o=function(){var e={};return function(a){if(void 0===e[a]){var t=document.querySelector(a);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[a]=t}return e[a]}}(),r=[];function i(e){for(var a=-1,t=0;t<r.length;t++)if(r[t].identifier===e){a=t;break}return a}function l(e,a){for(var t={},n=[],o=0;o<e.length;o++){var l=e[o],s=a.base?l[0]+a.base:l[0],c=t[s]||0,d="".concat(s," ").concat(c);t[s]=c+1;var m=i(d),p={css:l[1],media:l[2],sourceMap:l[3]};-1!==m?(r[m].references++,r[m].updater(p)):r.push({identifier:d,updater:y(p,a),references:1}),n.push(d)}return n}function s(e){var a=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var r=t.nc;r&&(n.nonce=r)}if(Object.keys(n).forEach((function(e){a.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(a);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(a)}return a}var c,d=(c=[],function(e,a){return c[e]=a,c.filter(Boolean).join("\n")});function m(e,a,t,n){var o=t?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=d(a,o);else{var r=document.createTextNode(o),i=e.childNodes;i[a]&&e.removeChild(i[a]),i.length?e.insertBefore(r,i[a]):e.appendChild(r)}}function p(e,a,t){var n=t.css,o=t.media,r=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u=null,h=0;function y(e,a){var t,n,o;if(a.singleton){var r=h++;t=u||(u=s(a)),n=m.bind(null,t,r,!1),o=m.bind(null,t,r,!0)}else t=s(a),n=p.bind(null,t,a),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return n(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap)return;n(e=a)}else o()}}e.exports=function(e,a){(a=a||{}).singleton||"boolean"==typeof a.singleton||(a.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var t=l(e=e||[],a);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<t.length;n++){var o=i(t[n]);r[o].references--}for(var s=l(e,a),c=0;c<t.length;c++){var d=i(t[c]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}t=s}}}}},a={};function t(n){var o=a[n];if(void 0!==o)return o.exports;var r=a[n]={id:n,exports:{}};return e[n](r,r.exports,t),r.exports}t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a}),a},t.d=(e,a)=>{for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})},t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),(()=>{let e=document.querySelector("#input"),a=document.querySelector("#input"),n=document.querySelector("#textik"),o=document.querySelector("#tl1"),r=document.querySelector("#tl2"),i=document.querySelector("#tl3"),l=document.querySelector("#tl4");function s(){return new Promise((function(e,a){function t(){o.removeEventListener("click",n),r.removeEventListener("click",s),i.removeEventListener("click",c),l.removeEventListener("click",d)}function n(){t(),e(1)}function s(){t(),e(2)}function c(){t(),e(3)}function d(){t(),e(4)}o.addEventListener("click",n),r.addEventListener("click",s),i.addEventListener("click",c),l.addEventListener("click",d)}))}async function c(e,a="Oukej"){o.style.display="",r.style.display="none",i.style.display="none",l.style.display="none",o.textContent=a,n.textContent=e,await s()}async function d(e,a="✔️ Ano",t="❌️ Ne"){return o.style.display="",r.style.display="",i.style.display="none",l.style.display="none",o.textContent=a,r.textContent=t,n.textContent=e,1==await s()}async function m(e){o.style.display="",r.style.display="",i.style.display="",l.style.display="",o.textContent="⬆️ Sever",r.textContent="⬇️ Jih",i.textContent="➡️ Východ",l.textContent="⬅️ Západ",n.textContent=e;let a=await s();return 1==a?"s":2==a?"j":3==a?"v":4==a?"z":void 0}async function p(a,t="OK",c=""){return o.style.display="",o.textContent=t,e.value=c,e.style.display="",r.style.display="none",i.style.display="none",l.style.display="none",n.textContent=a,await s(),e.style.display="none",e.value}async function u(e){o.style.display="none",r.style.display="none",i.style.display="none",l.style.display="none",n.textContent=e}var h;o.style.display="none",r.style.display="none",i.style.display="none",l.style.display="none",e.style.display="none",a.style.display="none",function(e){e.mapa=[["Jeskyně","Obchod","Les","Krčma","Les"],["Poušť","Start","Jeskyně","Hrad","Jeskyně"],["Les","Hotel","Poušť","Dům","Les"],["Krčma","Jeskyně","Obchod","Hrad","Poušť"],["Les","Dům","Krčma","Jeskyně","Les"]],e.predmety={Peníze:0,Meč:0,Klíč:0,Brnění:0,"Srandovní fazolky":5,"Léčivý lektvar":0},e.hrac={x:1,y:1,hp:100,difficultyMultiplyer:1}}(h||(h={}));let y=(v=h,JSON.parse(JSON.stringify(v)));var v;function f(e){const a=JSON.parse(localStorage.getItem("savedGames")??"{}");a[e]=y,localStorage.setItem("savedGames",JSON.stringify(a))}function k(e){const a=JSON.parse(localStorage.getItem("savedGames")??"{}");y=a[e]}function j(){const e=JSON.parse(localStorage.getItem("savedGames")??"{}");return Object.keys(e)}async function z(){let e="Přišel jsi k obchodu, máš "+y.predmety["Peníze"]+" zlaťáků. Chceš jít dovnitř?";await d(e)&&(await c("Obchodník: Vítej v našem obchůdku, je tu něco, co se ti líbí (a máš na to prachy 🤣️)?"),e="Máme tady tento krásný meč, ⚔️ stojí 100 zlaťáků 💯️ a přidá ti 20 damage ke každému ÚDERU. 🤜️ Chceš ho koupit?",e+=" (Máš "+y.predmety["Peníze"]+" zlaťáků.)",1==y.predmety["Meč"]&&(e+=" (Už jeden máš.)"),y.predmety["Meč"]>1&&(e+=" (Už jich máš "+y.predmety["Meč"]+".)"),await d(e)&&(y.predmety["Peníze"]>=100?(y.predmety["Peníze"]-=100,y.predmety["Meč"]+=1,await c("Nech sa páči!")):await c("Bez peněz do krámu nelez, kámo.")),e="Léčivý lektvar! 🏺️ Uleví od bolestí, spraví každou zlomeninu, pomůže od zažívacích potízí! 🤢️ Je to zázrak! 🤑️ Pouhých 50 zlaťáků! Máš zájem?",e+=" (Máš "+y.predmety["Peníze"]+" zlaťáků.)",y.predmety["Léčivý lektvar"]>0&&(e+=" (Teď jich máš "+y.predmety["Léčivý lektvar"]+".)"),await d(e)&&(y.predmety["Peníze"]>=50?(y.predmety["Peníze"]-=50,y.predmety["Léčivý lektvar"]+=1,await c("Věřím, že ti jednou zachrání život!")):await c("Nemáš nárok na takovýto luxus, bídáku! Vrať se s penězi!")),e="Narazil jsi na nepřitele a došlo ti, že na něj nemáš? Přál jsi si zmizet? Od toho jsou naše srandovní fazolky! Jenom 30 zlaťáků! Bohužel můžou nastat tyto nežádoucí účinky: Nevolnost, zvracení, motání hlavy, mdloby, zmatení. Pokud jsi epileptik, poraď se před použitím se svým lékařem.",e+=" (Máš "+y.predmety["Peníze"]+" zlaťáků.)",y.predmety["Srandovní fazolky"]>0&&(e+=" (Teď jich máš "+y.predmety["Srandovní fazolky"]+".)"),await d(e)&&(y.predmety["Peníze"]>=30?(y.predmety["Peníze"]-=30,y.predmety["Srandovní fazolky"]+=1,await c("Jednou mi budeš za to poděkuješ, věř mi...")):await c("Tak hele, výroba je drahá, a žádné výjmky neexistují! Vrať se sem až budeš mít něco v peněžence 🤬")),e="Už sis někdy přál být odolnější? Od toho je naše brnění! Čistá ocel! Trochu těžší, ale poslouží :) Pouhopouhých 70 zlaťáků!",e+=" (Máš "+y.predmety["Peníze"]+" zlaťáků.)",1==y.predmety["Brnění"]&&(e+=" (Už jedno máš.)"),y.predmety["Brnění"]>1&&(e+="(Už jich máš "+y.predmety["Brnění"]+".)"),await d(e)&&(y.predmety["Peníze"]>=70?(y.predmety["Peníze"]-=70,y.predmety["Brnění"]+=1,await c("Děkujeme vám za nákup v obchodě Tesco ")):await c("Si tu ocel sežeň sám, nebo si sežeň peníze.")))}function b(e,a){const t=document.querySelector(`#mapa-misto-x${e}y${a}`),n=y.mapa[a][e],o=w[n];t.textContent=o}function P(){for(const e of Array.from(document.querySelectorAll("#mapa .accent")))e.classList.remove("accent")}const w={Hrad:"🏰️",Jeskyně:"🕳️",Obchod:"🛒️",Les:"🌲️",Start:"🚩️",Hotel:"🏨️",Dům:"🏠️",Poušť:"🏜️",Krčma:"🍺"};let x=[{jmeno:"Horský troll",hp:300,dmg:10},{jmeno:"Pavouk",hp:10,dmg:10},{jmeno:"Jedovatý pavouk",hp:10,dmg:50},{jmeno:"Skřet",hp:120,dmg:30},{jmeno:"Nerudný stařík",hp:600,dmg:2}];async function S(){let e=x[Math.floor(Math.random()*x.length)];if(Math.random()<.2||null==e)return await c("Nikdo! Máš štěstí! 🍀️");let a=e.hp*y.hrac.difficultyMultiplyer,t=e.jmeno+" a zaútočil na tebe";switch(e.jmeno){case"Horský troll":t+=" za mocného „Uaaaa!“ 🦍️";break;case"Skřet":t+=" a křičel u toho jako smyslů zbavený. 👺️";break;case"Nerudný stařík":t+=" mávaje při tom svou holí. 👴";break;default:t+=" vydávaje při tom „Kss! Kss! Kss!“ svými kusadly. 🕷️"}if(await c(t),y.predmety["Srandovní fazolky"]>0&&await d("Máš "+y.predmety["Srandovní fazolky"]+" srandovních fazlolek. 💊️ Cheš jednu použít?"))return y.predmety["Srandovní fazolky"]-=1,y.hrac.x=Math.floor(Math.random()*y.mapa[0].length),y.hrac.y=Math.floor(Math.random()*y.mapa.length),await c("Zamotala se ti hlava 🤢️ a s hlasitým puknutím jsi zmizel 💥️."),await c("Když mdloby pominuly 😴️ a otevřely se ti oči, kolem tebe byl "+y.mapa[y.hrac.y][y.hrac.x]),void P();for(;a>0&&y.hrac.hp>0;){y.hrac.hp<=30&&y.predmety["Léčivý lektvar"]>0&&await d("Máš "+y.predmety["Léčivý lektvar"]+" léčivých lektvarů 🏺️, chceš jeden použít?")&&(y.hrac.hp+=100,y.predmety["Léčivý lektvar"]-=1,await c("Bubli bubli! Nyní máš "+y.hrac.hp+" HP!"));let n=await d("Co uděláš?","🦶 Kopnu ho","🤜 Praštím ho");if(t=e.jmeno+" má "+a+" HP.",n?Math.random()<.35?(t+=" "+e.jmeno+" uskočil, ty jsi minul a zranil ses (-10 HP). 😭️",y.hrac.hp-=10):a-=50:y.predmety["Meč"]>0?a-=40:a-=20,a<0&&(a=0),t+=" Po tvém útoku má už jen "+a+" HP.",0==a){let a=Math.round(Math.random()*e.hp);t+=" "+e.jmeno+" zemřel, 😁️ měl u sebe "+a+" zlaťáků.",y.predmety["Peníze"]+=a,t+=" Nyní máš "+y.predmety["Peníze"]+" zlaťáků. 💰️",y.hrac.difficultyMultiplyer*=1.1}a>0&&(t+=" "+e.jmeno+" zaútočil zpátky, vzal ti "+e.dmg+" HP.",y.hrac.hp-=e.dmg,y.hrac.hp<0&&(y.hrac.hp=0),t+=" Už máš jenom "+y.hrac.hp+" HP."),await c(t)}}var g=t(379),M=t.n(g),N=t(426);M()(N.Z,{insert:"head",singleton:!1}),N.Z.locals;let H=document.querySelector("#start"),C=document.querySelector("#restart");async function L(){y.hrac.y<0?(y.hrac.y=0,await c("Narazil jsi na hlubokou propast 🕳️, dál nemůžeš.","Vrátit se zpět")):y.hrac.y>=y.mapa.length?(y.hrac.y=y.mapa.length-1,await c("Narazil jsi na vysoký útes 🏔️, dál nemůžeš.","Vrátit se zpět")):y.hrac.x<0?(y.hrac.x=0,await c("Narazil jsi na neprostupný les 🌲️, dál nemůžeš.","Vrátit se zpět")):y.hrac.x>=y.mapa[y.hrac.y].length&&(y.hrac.x=y.mapa[y.hrac.y].length-1,await d("Narazil jsi na nekonečnou poušť 🏜️, když půjdeš dál, jistě zemřeš žízní a vyčerpáním.","Jít dál","Vrátit se zpět")&&(y.hrac.hp=-100,y.mapa.length=0,y.mapa[0]=["Poušť"],y.hrac.x=y.hrac.y=0))}H.addEventListener("click",(function(){H.style.display="none",async function(){if(await d("Vítej hrdino! Chceš načíst uloženou hru? (napiš její číslo)"))for(;;){const e=j().map(((e,a)=>"Hra č. "+a+": "+e)).join("\n"),a=await p(e),t=j()[+a];if(void 0!==t){k(t);break}await c("Žádná taková hra tam není!")}for(function(){const e=document.querySelector("#mapa");let a=0;for(const t of y.mapa){const n=document.createElement("tr");let o=0;for(const e of t){const e=document.createElement("td");e.id=`mapa-misto-x${o}y${a}`,e.textContent="❓",n.appendChild(e),o+=1}e.appendChild(n),a+=1}}(),await c("Hurá! ⚔️ Jdeme na to!","Pokračovat");;){let t=y.mapa[y.hrac.y][y.hrac.x],n="Máš "+y.hrac.hp+" HP.";switch(P(),b(y.hrac.x,y.hrac.y),e=y.hrac.x,a=y.hrac.y,document.querySelector(`#mapa-misto-x${e}y${a}`).classList.add("accent"),t){case"Dům":y.hrac.hp<100&&0==y.predmety["Brnění"]?(y.hrac.hp=Math.max(y.hrac.hp,100),n+="Narazil jsi na dům a vpadl jsi dovnitř. Byla tam milá stařenka a ta ti dala najíst a dovolila ti tam přespat. Tvoje HP je obnoveno, nyní máš "+y.hrac.hp+" HP."):y.predmety["Brnění"]>0&&y.hrac.hp<150?(y.hrac.hp=150,n+="Narazil jsi na dům a vpadl jsi dovnitř. Byla tam milá stařenka a ta ti dala najíst a dovolila ti tam přespat. Tvoje HP je obnoveno, nyní máš "+y.hrac.hp+" HP."):y.hrac.hp>150&&y.predmety["Peníze"]>19&&0==y.predmety["Brnění"]?(y.hrac.hp-=10,y.predmety["Peníze"]-=20,n+="Narazil jsi na dům a vpadl jsi dovnitř. Byla tam nerudná bába. Zmlátila tě holí a obrala tě o 20 zlaťáků. Nyní máš "+y.hrac.hp+" HP a "+y.predmety["Peníze"]+" zlaťáků."):(y.hrac.hp-=10,n+="Narazil jsi na dům a vpadl jsi dovnitř. Byla tam nerudná bába. Zmlátila tě holí a nyní máš "+y.hrac.hp+" HP.");break;case"Les":y.hrac.hp-=10,n+=" Prodíráš se lesem 🌳️ a zranil ses o ostružiny, nyní máš "+y.hrac.hp+" HP.";break;case"Jeskyně":n+=" Přišel jsi k jesnyni, z ní se vynořil...",await c(n),await S(),n="";break;case"Hotel":y.hrac.hp=200,n+=" Dorazil jsi do hotelu 🏨️ a ubytoval ses tam. Protože ses dobře bavil 🍻️, odpočinul sis a doplnil jsi síly 🤸️, nyní máš "+y.hrac.hp+" HP.",y.predmety["Peníze"]>=10?n+=" Stálo tě to 10 zlaťáků.":n+=" Hostinský tě z lítosti ubytoval zadarmo.";break;case"Hrad":await d("Dorazil jsi na hrad, a tam ti místní nabídli, že si můžeš uložit svou hru, přijmeš tuto laskavou nabídku?")&&f(await p("Jak chceš aby se ulažená hra jmenovala?cPokud chceš přepsat nějakou uloženou hru, napiš její jméno"));break;case"Obchod":await z();break;case"Start":n="Jsi tam, kde to vše začalo... ";break;case"Poušť":y.predmety["Brnění"],y.hrac.hp<200?(y.hrac.hp+=30,n="Narazil jsi na poušť, šel jsi dál a narazil na oázu. Tam ti opravili brnění a vyléčili tě, nyní máš "+y.hrac.hp+" HP."):(y.hrac.hp,0==y.predmety["Brnění"]?(y.hrac.hp+=30,n="Narazil jsi na poušť, šel jsi dál a narazil na oázu. Tam tě vyléčili, nyní máš "+y.hrac.hp+" HP."):y.hrac.hp-=50),n="Narazil jsi na poušť, a v bláznivé naději že najdeš oázu jsi šel dál. Bohužel, žádnou oázu jsi nenašel a přišel jsi o 50 HP, máš už jen "+y.hrac.hp+" HP.";break;default:n+=" Jsi venku, kolem tebe je "+t+"."}switch(y.hrac.hp<=0&&u(" Zemřel jsi 😭️ ☠️"),n+=" Kam jdeš dál?",await m(n)){case"s":y.hrac.y-=1;break;case"j":y.hrac.y+=1;break;case"v":y.hrac.x+=1;break;case"z":y.hrac.x-=1}await L()}var e,a}().then((()=>{}),(({message:e})=>{console.error(e)}))})),C.addEventListener("click",(()=>{document.location=document.location}))})()})();