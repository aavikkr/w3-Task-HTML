
let moviePoster = document.querySelector(".movie-poster");

//select modal window layer
let modal = document.querySelector("#myModal");

//select close button
let closeBtn = document.querySelector(".closeBtn");

//select modal window image
let modalImage = document.querySelector(".movie-poster-modal"); // ala, kuhu lisada pildi aadress

//et nupp reageeriks vajutusele
moviePoster.addEventListener("click", () => { 
    modal.style.display = "block"; // avab uue akna
    modalImage.src = moviePoster.src;//vaja saada aknasse pilt
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => { // kui klikk toimus, kontrolli
    if(event.target === modal) {//kas klikk toimus modal alal, siis võib kinni panna akna.
        modal.style.display = "none";
    }

});