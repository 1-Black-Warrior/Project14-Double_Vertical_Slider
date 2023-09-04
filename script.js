const  sliderContainer = document.querySelector('.slider-container')
const  sliderRight = document.querySelector('.right-slide')
const  sliderLeft= document.querySelector('.left-slide')
const  upbutton = document.querySelector('.up-button')
const  downbutton = document.querySelector('.down-button')
const  slidesLength = sliderRight.querySelectorAll('div').length


let activeSlideIndex = 0

sliderLeft.style.top = `-${(slidesLength -1) *100}vh`

upbutton.addEventListener('click' , () => ChangeSlide('up'))
downbutton.addEventListener('click' , () => ChangeSlide('down'))



const ChangeSlide = (direction) =>{
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up'){
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1){
            activeSlideIndex = 0
        }
    }  

    else if (direction === 'down'){
        activeSlideIndex--
        if(activeSlideIndex < 0){
            activeSlideIndex = slidesLength - 1
        }
    }

    sliderRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    sliderLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`

}