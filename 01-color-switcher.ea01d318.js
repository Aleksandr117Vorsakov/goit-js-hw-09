!function(){var t={body:document.body,btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]")},n=null;function o(){var t=Math.round(255*Math.random(0,1)),n=Math.round(255*Math.random(0,1)),o=Math.round(255*Math.random(0,1));return"rgb(".concat(t,",").concat(n,",").concat(o,")")}t.btnStart.addEventListener("click",(function(){t.btnStart.disabled=!0,t.btnStop.disabled=!1,t.body.style.backgroundColor="".concat(o()),n=setInterval((function(){t.body.style.backgroundColor="".concat(o())}),1e3)})),t.btnStop.addEventListener("click",(function(){t.btnStart.disabled=!1,t.btnStop.disabled=!0,clearInterval(n)})),t.btnStop.disabled=!0}();
//# sourceMappingURL=01-color-switcher.ea01d318.js.map
