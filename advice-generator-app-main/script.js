const btn = document.querySelector('.advice');
let number = document.querySelector('.number');
let adv = document.querySelector('.advice__text');

const get_advice = async() =>{
    const advice_url = `https://api.adviceslip.com/advice`;
    let advice = await fetch(advice_url);
    let result = await advice.json()
    number.textContent = JSON.parse(result.slip.id);
    adv.textContent = result.slip.advice;
    console.log(result.slip);
}


btn.addEventListener('click', get_advice)