const nextSliderBtn = document.querySelector('.slider-btn-next')
const prevSliderBtn = document.querySelector('.slider-btn-prev')
const sliderBar = document.querySelector(".slider-bar")


let imgCounter;
imgCounter = parseFloat(window.getComputedStyle(sliderBar).marginLeft);


nextSliderBtn.addEventListener('click', ()=>{
    console.log("До  функції " + imgCounter) 
    if(imgCounter >= 2478){
        imgCounter = 0;
    }
    else {
        imgCounter +=826
    }
    sliderBar.style.marginLeft = -imgCounter + 'px';
    console.log("Після функції " + imgCounter)
})


prevSliderBtn.addEventListener('click', ()=>{
    console.log("До  функції " + imgCounter) 
    if(imgCounter <= 0){
        imgCounter = 2478;
    }
    else {
        imgCounter -=826
    }
    sliderBar.style.marginLeft = -imgCounter + 'px';
    console.log("Після функції " + imgCounter)
    let a1 = parseFloat(window.getComputedStyle(sliderBar).marginLeft);
    console.log(a1)
})



