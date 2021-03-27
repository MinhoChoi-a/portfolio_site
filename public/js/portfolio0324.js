const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNavs = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNavs.children);

const worksButton = document.querySelector('.work-list');
const buttons = document.querySelectorAll('.work__button');
var buttonsArray = Array.from(buttons);

const heads = document.querySelector('.head');
const head = document.querySelectorAll('.head');
var headButtonArray = Array.from(head);

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

// window.onload = movingImage;

// function movingImage() {
//     const image = document.querySelector('.intro img');
//     image.style.transform = 'translateX(-1000px)';
    
// }


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

    const currentHead = worksButton.querySelector('.current');
    currentHead.classList.remove('current');
    headButtonArray[prevIndex].classList.add('current');        

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

    const currentHead = worksButton.querySelector('.current');
    currentHead.classList.remove('current');
    headButtonArray[nextIndex].classList.add('current');        

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

    const currentHead = worksButton.querySelector('.current');
    currentHead.classList.remove('current');
    headButtonArray[targetIndex].classList.add('current');        


    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrow(slides, prevButton, nextButton, targetIndex); 
    
});


worksButton.addEventListener('click', e=> {
    const targetWork = e.target.closest('button');
    
    if(!targetWork) return;

    const currentSlide = track.querySelector('.current');
    const currentDot = dotsNavs.querySelector('.current');
    const currentHead = worksButton.querySelector('.current');
    const targetIndex = buttonsArray.findIndex(button => button === targetWork);
    const targetSlide = slides[targetIndex];

    const targetDot = dots[targetIndex];

    currentHead.classList.remove('current');
    headButtonArray[targetIndex].classList.add('current');        

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrow(slides, prevButton, nextButton, targetIndex);    


    window.scrollTo({
        top: height,
        left:0,
        behavior: 'smooth',
    });
});



const moveButton = document.querySelector('.intro button');

const profileSection = document.querySelector('.body2');
const moveHeight = profileSection.offsetHeight + height;

const contactSection = document.querySelector('.body3');
const moveHieghtContact = contactSection.offsetHeight + moveHeight;

const finalSection = document.querySelector('.body4');

const basic__port = document.querySelector('.basic_port');
const port__below = document.querySelector('.below');


function myFunction() {
  
  if (window.pageYOffset >= height-50) {
    document.querySelector('.mainNav').style.display='block';
    document.querySelector('.works').style.padding='50px 0px 0px 0px';
    navbar.classList.add("sticky");
  } 
  
  else {
    document.querySelector('.mainNav').style.display='none';
    document.querySelector('.works').style.padding='0px 0px 0px 0px';
    navbar.classList.remove("sticky");
  }
  
  if (window.pageYOffset > profileSection.offsetHeight+500) {
    contactSection.style.paddingTop='100px';
    basic__port.style.opacity='100%';
    basic__port.style.zIndex=99;
    setTimeout((()=> port__below.style.opacity='0.7'), 500);
  }

  else {
    contactSection.style.paddingTop='0px';
    basic__port.style.opacity='0%';
    basic__port.style.zIndex=1;
    port__below.style.opacity='0';
  }

  if(window.pageYOffset > profileSection.offsetHeight+1000){
     document.querySelector('.learning').style.opacity='100%';
     document.querySelector('.learning').style.marginTop='30px';
     document.querySelector('.skill_sait').firstChild.style.width='95%';
    document.querySelector('.skill_algo').firstChild.style.width='50%';
    document.querySelector('.skill_aws').firstChild.style.width='30%';
    document.querySelector('.skill_code').firstChild.style.width='10%';
  }

  else {
    document.querySelector('.learning').style.opacity='0%';
    document.querySelector('.learning').style.marginTop='0px';
    document.querySelector('.skill_sait').firstChild.style.width='0%';
    document.querySelector('.skill_algo').firstChild.style.width='0%';
    document.querySelector('.skill_aws').firstChild.style.width='0%';
    document.querySelector('.skill_code').firstChild.style.width='0%';
  }

  if(window.pageYOffset > moveHieghtContact-100) {

    document.querySelector('.body4').style.paddingTop='100px';
    document.querySelector('.body4').style.opacity='100%';
  }

  else {
    document.querySelector('.body4').style.paddingTop='0px';
    document.querySelector('.body4').style.opacity='0%';
  }

}


moveButton.addEventListener('click', e => {
    window.scrollTo({top:height,left:0, behavior:'smooth'});
})

const navWorkBut = document.querySelector('.nav-link_work');

navWorkBut.addEventListener('click', e => {
    window.scrollTo({top:height,left:0, behavior:'smooth'});
});

const navProfileBut = document.querySelector('.nav-link_profile');

navProfileBut.addEventListener('click', e => {
    contactSection.scrollIntoView({behavior:'smooth'});
});

const navContactBut = document.querySelector('.nav-link_contact');

navContactBut.addEventListener('click', e => {
    finalSection.scrollIntoView({behavior:'smooth'});
});
