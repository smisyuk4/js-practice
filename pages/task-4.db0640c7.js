"use strict";
//За допомогою JavaScript для кожного повідомлення
// додайте у верхній правий кут кнопку закриття.
//1. зробити копіювання елементів з шаблона в конкретне місце.
//2. додати до нового елементу класс.
//3. назначити новому елементу слухача та функцію закриття блоку
//4. кнопок багато, контейнерів які закривати також багато.
const refs = {
    btnPattern: document.querySelector(".btn-pattern"),
    panes: document.querySelectorAll(".pane")
};
refs.panes.forEach((pane)=>{
    const btnClone = refs.btnPattern.cloneNode(true);
    btnClone.classList.replace("btn-pattern", "js-btn-close");
    pane.prepend(btnClone);
});
refs.btnPattern.remove();
//========== моё решение
const onClickBtnClose = (event)=>{
    if (event.target.classList.contains("js-btn-close")) event.target.parentNode.remove();
};
window.addEventListener("click", onClickBtnClose) //========== чужое решение
 // refs.panes.forEach(pane => {
 //     pane.firstChild.onclick = () => {
 //         pane.remove()
 //     }
 // });
;

//# sourceMappingURL=task-4.db0640c7.js.map
