const form = document.querySelector("form");
const firstDelay = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
      if (shouldResolve) {
        setTimeout(() => resolve(`✅ Fulfilled promise ${position} in ${delay}ms`), delay);
      } else {
        setTimeout(() => reject(`❌ Rejected promise ${position} in ${delay}ms`), delay);
      }
  });
  return promise;
  };


form.addEventListener("submit", promises)

function promises(evt) {
  evt.preventDefault();
  const promiseLength = amount.value; 
  const delay1 = Number(firstDelay.value);
  const step1 = Number(step.value);
  for (let i = 0; i < promiseLength; i += 1) {
   createPromise(i+1, delay1, step1)
.then(() => {
  setTimeout(() => console.log(`✅ Fulfilled promise ${i+1} in ${delay1+step1*i}ms`), (delay1+step1*i));
  })  
  .catch(() => {
    setTimeout(() => console.log(`❌ Rejected promise ${i+1} in ${delay1+step1*i}ms`), (delay1+step1*i));
  }); 
  }

}