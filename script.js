const adviceURi = "https://api.adviceslip.com/advice";
const adviceId = document.getElementById('advice');
const clickEvent = document.getElementById('clickEvent');

window.addEventListener('load',()=>{
    getAdvice();
})

clickEvent.style.cursor = 'pointer'
clickEvent.addEventListener('click',()=>{
    getAdvice();
})

async function getAdvice(){
    try {
        clickEvent.style.cursor = 'not-allowed';
        adviceId.innerHTML = 'loading...'
        const resp = await fetch(adviceURi);
        const data = await resp.json()
        adviceId.innerHTML = data.slip.advice;
        clickEvent.style.cursor = 'pointer';
    } catch (error) {
        console.log(error)
    }
}