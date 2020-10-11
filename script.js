const slides = document.querySelectorAll('[data-js = "carousel__item"]')
const nextButton = document.querySelector('[data-js="carousel__button--next"]')
const prevButton = document.querySelector('[data-js="carousel__button--prev"]')

let currentSlideIndex = 0

nextButton.addEventListener('click', () => {
  if (currentSlideIndex === slides.length -1) {
    //
    currentSlideIndex = 0
  } else {
    currentSlideIndex++
  }
  
  //for removing the next slide when the Next button was pressed
  slides.forEach(slide => {
    slide.classList.remove('carousel__item--visible')
  })

  slides[currentSlideIndex].classList.add('carousel__item--visible')
})


prevButton.addEventListener('click',()=> {
  // if (currentSlideIndex === 0) {
  //   currentSlideIndex = slides.length -1
  // } else {
  //   currentSlideIndex--
  // }

  
  const correctSlideIndex =  currentSlideIndex === 0 
  ? currentSlideIndex = slides.length -1 
  : --currentSlideIndex

  slides.forEach(slide => {
    slide.classList.remove('carousel__item--visible')
  })

  slides[correctSlideIndex].classList.add('carousel__item--visible')
})