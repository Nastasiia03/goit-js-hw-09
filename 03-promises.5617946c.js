const e=document.querySelector("form"),t=document.querySelector('input[name="delay"]'),o=document.querySelector('input[name="step"]'),n=document.querySelector('input[name="amount"]');function u(e,t){const o=Math.random()>.3;return new Promise(((n,u)=>{o?setTimeout((()=>n(`✅ Fulfilled promise ${e} in ${t}ms`)),t):setTimeout((()=>u(`❌ Rejected promise ${e} in ${t}ms`)),t)}))}e.addEventListener("submit",(function(e){e.preventDefault();const m=n.value,i=Number(t.value),r=Number(o.value);for(let e=0;e<m;e+=1)u(e+1,i).then((()=>{setTimeout((()=>console.log(`✅ Fulfilled promise ${e+1} in ${i+r*e}ms`)),i+r*e)})).catch((()=>{setTimeout((()=>console.log(`❌ Rejected promise ${e+1} in ${i+r*e}ms`)),i+r*e)}))}));
//# sourceMappingURL=03-promises.5617946c.js.map