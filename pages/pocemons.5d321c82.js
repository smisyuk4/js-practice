!function(){const n={pocemon:document.querySelector(".pocemon"),buttonNewPoce:document.querySelector(".make-btn")};n.buttonNewPoce.addEventListener("click",(function(){n.pocemon.innerHTML="";(function(n){return fetch(`https://pokeapi.co/api/v2/pokemon/${n}/`)})(function(n=0,e=500){return Math.floor(Math.random()*(e-n)+n)}()).then((n=>{if(!n.ok)throw new Error(n.status);return n.json()})).then((e=>{console.log(e);const o=function(n){const{img:e,id:o,name:i,abilities:s,species:c,weight:t}=n,a=s.map((n=>`<li class="ability-item">               \n                    ${n.ability.name}\n                </li>`)).join("");return`<div class="pocemon-card">\n                <div class="pocemon-avatar">                \n                    <img class="pocemon-pic"\n                        src="${e}" alt="">\n                </div>\n                <div class="pocemon-desc">\n                    <p class="pocemon-id"><span>id:</span> ${o}</p>\n                    <p class="pocemon-name"><span>name:</span> ${i}</p>\n                    <ul class="pocemon-abilitys"><span>abilities:</span>\n                        ${a}\n                    </ul>\n                    <p class="pocemon-species"><span>species:</span> ${c}</p>\n                    <p class="pocemon-weight"><span>weight:</span> ${t}</p>\n                </div>           \n            </div>`}({img:e.sprites.front_default,id:e.id,name:e.name,abilities:e.abilities,species:e.species.name,weight:e.weight});n.pocemon.insertAdjacentHTML("beforeend",o)})).catch((n=>{console.log(n)}))}))}();
//# sourceMappingURL=pocemons.5d321c82.js.map