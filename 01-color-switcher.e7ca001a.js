const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),d=document.querySelector("body");let o=null;t.addEventListener("click",(()=>{o=setInterval((()=>{!function(){const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;d.style.backgroundColor=t}()}),1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(()=>{clearInterval(o),t.disabled=!1,e.disabled=!0}));
//# sourceMappingURL=01-color-switcher.e7ca001a.js.map