setTimeout(function() {
    document.querySelector("body").classList.add("show");
}, 500);

window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector(".topTitle").classList.add("show");
        document.querySelector(".topSubTitle").classList.add("show");
        document.querySelector(".blackopacity").classList.add("show");
        document.querySelector(".titleBox").classList.add("show");
    }, 2000);
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

// Get the modal
const modal = document.getElementById("myModal");
			
// Get the image and insert it inside the modal - use its "alt" text as a caption
const img1 = document.getElementById("myImg1");
const img2 = document.getElementById("myImg2");
const img3 = document.getElementById("myImg3");
const img4 = document.getElementById("myImg4");
const img5 = document.getElementById("myImg5");
const img6 = document.getElementById("myImg6");
const img7 = document.getElementById("myImg7");
const img8 = document.getElementById("myImg8");
const img9 = document.getElementById("myImg9");
const img10 = document.getElementById("myImg10");
const img11 = document.getElementById("myImg11");
const img12 = document.getElementById("myImg12");
const img13 = document.getElementById("myImg13");
const img14 = document.getElementById("myImg14");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
img1.onclick = function(){
  modal.style.display = "flex";
  setTimeout(function() {
    modal.classList.add('show');
  }, 1);
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img2.onclick = function(){
  modal.style.display = "flex";
  setTimeout(function() {
    modal.classList.add('show');
  }, 1);
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img3.onclick = function(){
  modal.style.display = "flex";
  setTimeout(function() {
    modal.classList.add('show');
  }, 1);
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img4.onclick = function(){
  modal.style.display = "flex";
  setTimeout(function() {
    modal.classList.add('show');
  }, 1);
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img5.onclick = function(){
  modal.style.display = "flex";
  setTimeout(function() {
    modal.classList.add('show');
  }, 1);
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img6.onclick = function(){
  modal.style.display = "flex";
  setTimeout(function() {
    modal.classList.add('show');
  }, 1);
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img7.onclick = function(){
  modal.style.display = "flex";
  setTimeout(function() {
    modal.classList.add('show');
  }, 1);
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img8.onclick = function(){
  modal.style.display = "flex";
  setTimeout(function() {
    modal.classList.add('show');
  }, 1);
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img9.onclick = function(){
  modal.style.display = "flex";
  setTimeout(function() {
    modal.classList.add('show');
  }, 1);
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img10.onclick = function(){
  modal.style.display = "flex";
  setTimeout(function() {
    modal.classList.add('show');
  }, 1);
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img11.onclick = function(){
  modal.style.display = "flex";
  setTimeout(function() {
    modal.classList.add('show');
  }, 1);
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img12.onclick = function(){
  modal.style.display = "flex";
  setTimeout(function() {
    modal.classList.add('show');
  }, 1);
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img13.onclick = function(){
  modal.style.display = "flex";
  setTimeout(function() {
    modal.classList.add('show');
  }, 1);
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img14.onclick = function(){
  modal.style.display = "flex";
  setTimeout(function() {
    modal.classList.add('show');
  }, 1);
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
const span = document.getElementById("close");

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.classList.remove('show');
  setTimeout(function() {
    modal.style.display = "none";
  }, 200);
}

// When the user clicks on the bacground, close the modal
function closeModal() {
  modal.classList.remove('show');
  setTimeout(function() {
    modal.style.display = "none";
  }, 200);
}