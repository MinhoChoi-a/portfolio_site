const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNavs = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNavs.children);

const worksButton = document.querySelector('.work-list');
const buttons = document.querySelectorAll('.work__button');
var buttonsArray = Array.from(buttons);

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;

window.onscroll = function() {myFunction()};

var navbar = document.querySelector('.mainNav');

var intro = document.querySelector('.intro');

const height = intro.offsetHeight;

// arrange the slides next to one another
// slides[0].style.left = slideWidth*0 + 'px';
// slides[1].style.left = slideWidth*1 + 'px';
// slides[2].style.left = slideWidth*2 + 'px';

window.onload = movingImage;

function movingImage() {
    const image = document.querySelector('.intro img');
    image.style.transform = 'translateX(-1000px)';
}


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
    
});

worksButton.addEventListener('click', e=> {
    const targetWork = e.target.closest('button');
    
    if(!targetWork) return;

    const currentSlide = track.querySelector('.current');
    const currentDot = dotsNavs.querySelector('.current');
    const targetIndex = buttonsArray.findIndex(button => button === targetWork);
    const targetSlide = slides[targetIndex];

    const targetDot = dots[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrow(slides, prevButton, nextButton, targetIndex); 

    window.scrollTo({
        top: height,
        left:0,
        behavior: 'smooth',
    });
});


function myFunction() {
  
    var work = document.querySelector('.work__button');

    const workHeight = work.offsetHeight;

  
    if (window.pageYOffset >= height-50) {
    document.querySelector('.mainNav').style.display='block';
    document.querySelector('.works').style.padding='50px 0px 0px 0px';
    navbar.classList.add("sticky");
    document.querySelector('.navigate').style.display='flex';
  } 
  
  else {
    document.querySelector('.mainNav').style.display='none';
    document.querySelector('.works').style.padding='0px 0px 0px 0px';
    navbar.classList.remove("sticky");
    document.querySelector('.navigate').style.display='none';
    
  }

}


const moveButton = document.querySelector('.intro button');
const moveTarget = document.querySelector('.intro').offsetHeight;

moveButton.addEventListener('click', e => {
    window.scrollTo({top:moveTarget,left:0, behavior:'smooth'});
})


const profileButton = document.querySelector('.navigate');
const profileTarget = document.querySelector('.body2').offsetHeight*2.3;

profileButton.addEventListener('click', e => {
    window.scrollTo({top:profileTarget,left:0, behavior:'smooth'});
})

