(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const l of e.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function u(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=u(t);fetch(t.href,e)}})();const custom="",buttons=document.querySelectorAll(".custom-btn"),output=document.getElementById("output2"),clicSound=document.getElementById("clicSound");let currentInput="",lastButton=null;buttons.forEach(button=>{button.addEventListener("click",function(){const buttonText=this.textContent;clicSound.currentTime=0,clicSound.play(),buttonText==="="?(output.value=eval(currentInput),currentInput=""):buttonText==="C"?(currentInput="",output.value=""):(currentInput+=buttonText,output.value=currentInput),button.style.transform=`translateX(${Math.random()*220-100}px)`,lastButton&&lastButton!==button&&(lastButton.style.transform="translateX(0)"),lastButton=button})});const elementsToShake=document.querySelectorAll(".custom-btn");function shakeElement(n){let o=0,u=0,r=0;const t=setInterval(()=>{n.style.transform=`translate(${o}px, ${u}px) rotate(${r}deg)`,o=Math.floor(Math.random()*61)-30,u=Math.floor(Math.random()*61)-30,r=Math.floor(Math.random()*61)-30,setTimeout(()=>{clearInterval(t),n.style.transform="translate(0, 0) rotate(0deg)"},500)},100)}const divToClick=document.getElementById("calculator-container");divToClick.addEventListener("click",function(){elementsToShake.forEach(n=>{shakeElement(n)})});
