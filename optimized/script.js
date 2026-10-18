(() => {

const toggle=document.querySelector(".menu-toggle"),nav=document.querySelector("#primary-nav");
if(!toggle||!nav)return;
const close=(focus=false)=>{
nav.classList.remove("is-open");
toggle.setAttribute("aria-expanded","false");
if(focus)toggle.focus();

}
;
toggle.addEventListener("click",()=>{
const open=toggle.getAttribute("aria-expanded")==="true";
nav.classList.toggle("is-open",!open);
toggle.setAttribute("aria-expanded",String(!open));

}
);
nav.addEventListener("click",e=>{
if(e.target.closest("a"))close();

}
);
document.addEventListener("keydown",e=>{
if(e.key==="Escape"&&nav.classList.contains("is-open"))close(true);

}
);
const year=document.querySelector("#year");
if(year)year.textContent=String(new Date().getFullYear());
window.matchMedia("(min-width: 761px)").addEventListener?.("change",e=>{
if(e.matches)close();

}
);

}
)();
