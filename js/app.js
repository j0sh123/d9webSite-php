var titleName = document.title.toLowerCase();

/* NAVBAR SCROLL */
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
