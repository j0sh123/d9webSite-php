/* SLIDER */
const slider = document.querySelector(".slider").children;
const nextSlider = document.querySelector(".slider-next");
const prevSlider = document.querySelector(".slider-prev");

const totalSlides = slider.length;
let index_ = 0;
 
nextSlider.onclick = function(){
    slide("next");
}
prevSlider.onclick = function(){
    slide("prev");
}

function slide(direction){
    var cont = index_;
    var totalS = totalSlides;

    if(direction =="next"){
        if(cont == totalS-1)  cont = 0;
        else cont++;
    }
    else{
        if(cont == 0) cont = totalS-1;
        else cont--;
    }

    index_ = cont;

    for(let i =0; i< slider.length; i++) {
        slider[i].classList.remove("active");
        // slider[i].removeAttribute('data-aos','fade-left');
    }
    slider[cont].classList.add("active");
    // slider[cont].setAttribute("data-aos","fade-right");
}
/* END SLIDER */

/* PARTICLES */
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
  });