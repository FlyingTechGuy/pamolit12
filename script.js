setTimeout(function() {
    document.querySelector("body").classList.add("show");
}, 500);

window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector(".topTitle").classList.add("show");
        document.querySelector(".topSubTitle").classList.add("show");
        document.querySelector(".blackopacity").classList.add("show");
        document.querySelector(".titleBox").classList.add("show");
    }, 3000);
})

showSlides(1);

// Function to show slides
function showSlides(n) {
    let slide1 = document.getElementById("mySlide1");
    let slide2 = document.getElementById("mySlide2");
    let dot1 = document.getElementById("dot1");
    let dot2 = document.getElementById("dot2");

    if (n == 1) {
        slide1.classList.add("active");
        slide2.classList.remove("active");
        dot1.classList.add("active");
        dot2.classList.remove("active");
    } else {
        slide1.classList.remove("active");
        slide2.classList.add("active");
        dot1.classList.remove("active");
        dot2.classList.add("active");
    }
}
