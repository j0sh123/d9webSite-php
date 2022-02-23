var titleName = document.title.toLowerCase();

/* NAVBAR SCROLL */
const burger = document.querySelector('.burger');
var myNav = document.getElementById('myNavTop');
var myNavItems = document.getElementById('nav-linksTop');

if (!titleName.includes('contactanos') == false || !titleName.includes('servicio') == false){
    myNav.classList.remove("nav-top");
    myNavItems.classList.remove("a-top");
    document.getElementById("logo-img").src="./img/Logo-D9-azul-transp.png";
} else{
    window.onscroll = function () { 
        if (document.body.scrollTop >= 150 || document.documentElement.scrollTop >= 150) {
            myNav.classList.remove("nav-top");
            myNavItems.classList.remove("a-top");
            document.getElementById("logo-img").src="./img/Logo-D9-azul-transp.png";
            // myNav.classList.remove("nav-transparent");
        } 
        else {
            myNav.classList.add("nav-top");
            myNavItems.classList.add("a-top");
            document.getElementById("logo-img").src="./img/Logo-D9-blanco.png";
            // myNav.classList.remove("nav-colored");
        }
    };
}

burger.addEventListener('click', () =>{
    
    var nav = document.querySelector('#myNavTop');
    var navLinks = document.querySelectorAll('#nav-linksTop li');

    nav.classList.toggle('nav-active');

    // if there's not that nav-color class already
    /* if(!document.querySelector('.nav.nav-color')){
        navBar.classList.toggle('nav-color');
    } */

    //animate links
    navLinks.forEach((link, index) =>{
        if(link.style.animation){
            link.style.animation='';
        }else{
            link.style.animation = `navLinksFade 0.5s ease forwards ${index/ 7 +0.5}s`;
        }
    }); 
    //burger animation
    burger.classList.toggle('toggle');
});


