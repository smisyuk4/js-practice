"use strict";const refs={field:document.querySelector("#field"),ball:document.querySelector("#ball")},onTargetMoveBall=e=>{const l=refs.field.getBoundingClientRect(),t={top:e.clientY-l.top-field.clientTop-ball.clientHeight/2,left:e.clientX-l.left-field.clientLeft-ball.clientWidth/2};t.top<0&&(t.top=0),t.left+ball.clientWidth>field.clientWidth&&(t.left=field.clientWidth-ball.clientWidth),t.top+ball.clientHeight>field.clientHeight&&(t.top=field.clientHeight-ball.clientHeight),t.left<0&&(t.left=0),refs.ball.style.top=t.top+"px",refs.ball.style.left=t.left+"px"};refs.field.addEventListener("click",onTargetMoveBall);
//# sourceMappingURL=task-2.b7f45785.js.map
