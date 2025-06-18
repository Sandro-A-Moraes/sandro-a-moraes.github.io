let nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carrossel = document.querySelector('.carrossel'),
    list = document.querySelector('.list'),
    item = document.querySelector('.item'),
    runningTime = document.querySelector('.timeRunning');

let timeRunning = 6000
let timeAutoNext = 10000

nextBtn.onclick = function(){
    showSlider('next')
}

prevBtn.onclick = function(){
    showSlider('prev')
}

let runTimeOut
let runNextAuto = setTimeout(() =>{
    nextBtn.click()
}, timeAutoNext)

function resetTimeAnimation(){
    runningTime.style.animation = 'none'
    runningTime.offsetHeight
    runningTime.style.animation = null
    runningTime.style.animation = 'runningTime 10s linear 1 forwards'
}

function showSlider(type){
    let sliderItemsDom = list.querySelectorAll('.item')
    if(type === "next"){
        list.appendChild(sliderItemsDom[0])
            carrossel.classList.add('next')
    } else{
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
        carrossel.classList.add('prev')
    }
    clearTimeout(runTimeOut)

    runTimeOut = setTimeout(() => {
        carrossel.classList.remove('next')
        carrossel.classList.remove('prev')
    }, timeRunning)

    clearTimeout(runNextAuto)

    runNextAuto = setTimeout(() => {
        nextBtn.click()
    }, timeAutoNext)

    resetTimeAnimation()

}

resetTimeAnimation()