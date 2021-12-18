///Btn search var
let searchBar = document.getElementById("searchBar");
let triggerSearch = document.getElementById("searchPath")

const track = document.querySelector(".carousel_track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel_button--right"); 
const prevButton = document.querySelector(".carousel_button--left"); 
const nav = document.querySelector(".carousel_nav");
const dot = Array.from(nav.children);
const slideWidth = slides[1].getBoundingClientRect().width; 

//arrange slides next to eachother 

const setSlidePosition = (slide, index) => { 
    slide.style.left = slideWidth * index + "px"; 

}
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => { 
    track.style.transform = 'translateX(-' + targetSlide.style.left + ' )';
    
    currentSlide.classList.remove('current_slide')
    targetSlide.classList.add("current_slide");


    //New slide that moves in will gain the current slide class : Tracks how much we are going and need to move by.
    // currentSlide.style.transform = "translateY(-20px)";

}

//On click Left move slides to left
prevButton.addEventListener("click", e => { 
    const currentSlide = track.querySelector(".current_slide"); 
    const prevSlide = currentSlide.previousElementSibling ;

    moveToSlide(track, currentSlide, prevSlide)

});


//On click right move slides to right
nextButton.addEventListener("click", e => { 
    //move the slide 

    const currentSlide = track.querySelector(".current_slide");
    const nextSlide = currentSlide.nextElementSibling ;

    //move to the next slide 
   moveToSlide(track, currentSlide, nextSlide); 


});






//Function Triggers Search Event when Enter Is clicked In Search Bar 

searchBar.addEventListener("keyup", (e) => { 
    if(e.keyCode === 13) { 
      triggerSearch.click()
    }

})





//When I click nav indicators move to that slide 