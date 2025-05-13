document.addEventListener("DOMContentLoaded", function() {
    let img1 = document.querySelector("#portfolio-pic-1");
    let img2 = document.querySelector("#portfolio-pic-2");
    let img3 = document.querySelector("#portfolio-pic-3");
    let img4 = document.querySelector("#portfolio-pic-4");
    let img5 = document.querySelector("#portfolio-pic-5");
    let img6 = document.querySelector("#portfolio-pic-6");
    let img7 = document.querySelector("#portfolio-pic-7");
    let img8 = document.querySelector("#portfolio-pic-8");
    let img9 = document.querySelector("#portfolio-pic-9");
    let img10 = document.querySelector("#portfolio-pic-10");
    let img11 = document.querySelector("#portfolio-pic-11");

    let imgs = document.querySelectorAll ("[id^=portfolio-pic-]")

    imgs.forEach(img => {
        img.onclick = function() {
            let original = img.getAttribute("src");
            window.open (original, "_blank");
        };
    });

});