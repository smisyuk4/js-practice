const t={autorForm:document.querySelector(".autor-form"),sendBtn:document.querySelector(".autor-form button"),autorBase:document.querySelector(".autor-base"),getAutor:document.querySelector(".get-autor"),inputAutor:document.querySelectorAll(".get-autor input"),resultGetAutor:document.querySelector(".result"),patchForm:document.querySelector(".patch-autor"),patchBtn:document.querySelector(".patch-autor button"),getBtn:document.querySelector("#get-btn"),delBtn:document.querySelector("#del-btn"),sortBtns:document.querySelector(".sort-buttons")};function e(t,e){const n="http://localhost:1986/autor/";let r;return t&&(r=n+t),t||(r=n),fetch(r,e).then((t=>{if(!t.ok)throw new Error(t.status);return t.json()}))}function n(){e().then((t=>t)).then((e=>{console.log(e);const n=e.map((t=>r(t))).join("");t.autorBase.insertAdjacentHTML("beforeend",n)})).catch((e=>{console.log(e);t.autorBase.insertAdjacentHTML("beforeend","<p class='error'>Sorry! Connection with database is failed 👀</p>")}))}function r(t){const{id:e,name:n,surname:r,email:o,number:a,skills:u}=t;return u?u?`<ul class="autor">\n                <li><span>Id:</span>${e}</li>\n                <li><span>Name:</span>${n}</li>\n                <li><span>Surname:</span>${r}</li>\n                <li><span>Email:</span>${o}</li>\n                <li><span>Number:</span>${a}</li>\n                <li><span>Skills:</span>${u.join(", ")}</li>\n            </ul>`:void 0:`<ul class="autor">\n                <li><span>Id:</span>${e}</li>\n                <li><span>Name:</span>${n}</li>\n                <li><span>Surname:</span>${r}</li>\n                <li><span>Email:</span>${o}</li>\n                <li><span>Number:</span>${a}</li>\n            </ul>`}t.autorForm.addEventListener("input",(function(e){let n=null;new FormData(e.currentTarget).forEach(((t,e)=>{""!==t&&(n+=1)})),4===n&&t.sendBtn.removeAttribute("disabled")})),t.autorForm.addEventListener("submit",(function(r){r.preventDefault();const o={};let a=[];new FormData(r.currentTarget).forEach(((t,e)=>{"skills"!==e?o[e]=t.trim():(a=[...a,t],o[e]=a)})),console.log(o),function(t){return e("",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=UTF-8"}})}(o).then((e=>{t.autorBase.innerHTML="",n()})),r.target.reset(),t.sendBtn.setAttribute("disabled",!0)})),t.getAutor.addEventListener("input",(function(e){let n=null;new FormData(e.currentTarget).forEach(((t,e)=>{""!==t&&(n+=1,console.log(e))})),1===n&&(t.getBtn.removeAttribute("disabled"),t.delBtn.removeAttribute("disabled"))})),t.getAutor.addEventListener("submit",(function(n){let o;n.preventDefault();new FormData(n.currentTarget).forEach((t=>{t&&(o=t)})),console.log(o),function(n){console.log(n),e(n,{}).then((e=>{t.resultGetAutor.innerHTML="<p>result</p>";const n=r(e);t.resultGetAutor.insertAdjacentHTML("beforeend",n)}))}(o),n.target.reset(),t.getBtn.setAttribute("disabled",!0),t.delBtn.setAttribute("disabled",!0)})),t.patchForm.addEventListener("input",(function(e){let n=null;new FormData(e.currentTarget).forEach(((t,e)=>{""!==t&&(n+=1)})),2===n&&t.patchBtn.removeAttribute("disabled")})),t.patchForm.addEventListener("submit",(function(r){r.preventDefault();let o={},a=[];new FormData(r.currentTarget).forEach(((t,e)=>{t&&(o[e]=t.trim()),"skills"===e&&(a=[...a,t],o[e]=a)})),console.log(o),function(r){const o={method:"PATCH",body:JSON.stringify(r),headers:{"Content-Type":"application/json; charset=UTF-8"}};e(r.id,o).then((e=>{t.autorBase.innerHTML="",n()}))}(o),r.target.reset(),t.patchBtn.setAttribute("disabled",!0)})),n();
//# sourceMappingURL=crud-operations.6272c37d.js.map
