const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNavs = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNavs.children);

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;

// arrange the slides next to one another
// slides[0].style.left = slideWidth*0 + 'px';
// slides[1].style.left = slideWidth*1 + 'px';
// slides[2].style.left = slideWidth*2 + 'px';

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);


const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current');
    targetSlide.classList.add('current');


}

const updateDots= (currentDot, targetDot) => {
    currentDot.classList.remove('current');
    targetDot.classList.add('current');
}

const hideShowArrow = (slides, prevButton, nextButton, targetIndex) => {
    if(targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    }

    else if(targetIndex === slides.length -1) {
        nextButton.classList.add('is-hidden');
        prevButton.classList.remove('is-hidden');
    }

    else {
        nextButton.classList.remove('is-hidden');
        prevButton.classList.remove('is-hidden');
    }
}



prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current');
    const prevSlide = currentSlide.previousElementSibling;
    
    const currentDot = dotsNavs.querySelector('.current');
    const targetDot = currentDot.previousElementSibling;

    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide)
    updateDots(currentDot, targetDot);
    hideShowArrow(slides, prevButton, nextButton, prevIndex); 
});

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current');
    const nextSlide = currentSlide.nextElementSibling;
    
    const currentDot = dotsNavs.querySelector('.current');
    const targetDot = currentDot.nextElementSibling;

    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, targetDot);
    hideShowArrow(slides, prevButton, nextButton, nextIndex); 
});

dotsNavs.addEventListener('click', e => {
    const targetDot = e.target.closest('button');

    if(!targetDot) return;

    const currentSlide = track.querySelector('.current');
    const currentDot = dotsNavs.querySelector('.current');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrow(slides, prevButton, nextButton, targetIndex); 
    
})
