
const slides = document.getElementsByClassName("carousel__item"); //konstant - nende väärtusi ei saa muuta, dokument on käesolev dokument
// salvestasime konteinerisse slides andmed piltide div'ide kohta

const slidesTotal = slides.length; //mitu slaidi on
//console.log(slidesTotal);


//et nooled reageeriks klikkidele
const nextButton = document.querySelector("#carousel__button--next");
const prevButton = document.querySelector("#carousel__button--prev");

let slidePosition = 0; //vaikimisi asukoht on 0.

nextButton.addEventListener("click", () => {  //parempoolne nupp
    //console.log("click from next"); //brauseris on näha seda teksti

    for(let slide of slides){
        slide.classList.remove("carousel__item--visible"); //peame esialgse pildi eemaldama
    }

    if(slidePosition === slidesTotal - 1) { //kui slaid on viimane, siis järgmisena kuvatakse esimest
        slidePosition = 0;
    } else {
        slidePosition++; //kui ei ole viimane slaid, siis +1 ehk kuvatakse järgmine element
    }

    slides[slidePosition].classList.add("carousel__item--visible");
});

prevButton.addEventListener("click", () => { // vasakpoolne nool
    //console.log("click from prev");
    for(let slide of slides){ //kustutame kõik pildid maha
        slide.classList.remove("carousel__item--visible");
    }

    if(slidePosition === 0) { //millist elementi kuvatakse
        slidePosition = slidesTotal - 1; //kui kuvatakse esimest elementi, siis vasaku noolega peab olema massiivi viimane element
    } else { 
        slidePosition --; //kui teist elementi, siis tuleks eelmine pilt,  -- ehk -1
    }
    slides[slidePosition].classList.add("carousel__item--visible"); //määrame slaidile klassi

});