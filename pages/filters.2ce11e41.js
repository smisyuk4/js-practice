const e={form:document.querySelector("form")};(()=>{let t=localStorage.getItem("form-values");t&&(t=JSON.parse(t),Object.entries(t).forEach((([t,r])=>{e.form.elements[t].value=r})))})();e.form.addEventListener("submit",(t=>{t.preventDefault();new FormData(e.form).forEach(((e,t)=>{console.log(e,t)}))})),e.form.addEventListener("reset",(()=>{localStorage.removeItem("form-values")})),e.form.addEventListener("change",(e=>{let t=localStorage.getItem("form-values");t=t?JSON.parse(t):{},t[e.target.name]=e.target.value,localStorage.setItem("form-values",JSON.stringify(t))}));
//# sourceMappingURL=filters.2ce11e41.js.map