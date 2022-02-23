
/** PART-1 **/
const slides = document.querySelector(".slide-item").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slideTitle = document.querySelector(".slide-title");

const totalSlides = slides.length;


let index = 0;
const duration = 5000; /* 5 */

prev.onclick = function(){
    mainSlide("prev");
}
next.onclick = function(){
    mainSlide("next");
}

function slide(direction, num, slides){
    var cont = (num)? index: index2;
    var totalS = (num)? totalSlides: totalSlides2;

    if(direction =="next"){
        if(cont == totalS-1)  cont = 0;
        else cont++;
    }
    else{
        if(cont == 0) cont = totalS-1;
        else cont--;
    }
    // si son mas de 1 sliders
    if (num) index = cont;
     else index2 = cont;
        ////

    for(let i =0; i< slides.length; i++) {
        slides[i].classList.remove("active");
    }

	// slideTitle.setAttribute('data-aos',"fade-right");

    slides[cont].classList.add("active");
}

function mainSlide(direction){
   /* progressBar();*/
    slide(direction, true, slides);
    clearInterval(timer);   //stop when user click
    timer = setInterval(autioSLide,duration); //start again
}
function autioSLide(){
    mainSlide("next");
}

let timer = setInterval(autioSLide,duration);

autioSLide();

/** END PART-1 **/

/* PART-3 Glider*/
window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel-block-items'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel-btn-before',
			next: '.carousel-btn-after'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 990,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 4
			  }
			}
		]
	});
});
/* END PART-3 */

/* ANIMATIONS  */
    // AOS

/* END ANIMATIONS */