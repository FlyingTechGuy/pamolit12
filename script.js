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
let imgCount;
			
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
  imgCount = 1;
  imgCounter.innerHTML = imgCount + " / " + document.querySelectorAll(".myImg").length;
}
img2.onclick = function(){
  modal.style.display = "flex";
  setTimeout(function() {
    modal.classList.add('show');
  }, 1);
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  imgCount = 2;
  imgCounter.innerHTML = imgCount + " / " + document.querySelectorAll(".myImg").length;
}
img3.onclick = function(){
  modal.style.display = "flex";
  setTimeout(function() {
    modal.classList.add('show');
  }, 1);
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  imgCount = 3;
  imgCounter.innerHTML = imgCount + " / " + document.querySelectorAll(".myImg").length;
}
img4.onclick = function(){
  modal.style.display = "flex";
  setTimeout(function() {
    modal.classList.add('show');
  }, 1);
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  imgCount = 4;
  imgCounter.innerHTML = imgCount + " / " + document.querySelectorAll(".myImg").length;
}
img5.onclick = function(){
  modal.style.display = "flex";
  setTimeout(function() {
    modal.classList.add('show');
  }, 1);
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  imgCount = 5;
  imgCounter.innerHTML = imgCount + " / " + document.querySelectorAll(".myImg").length;
}
img6.onclick = function(){
  modal.style.display = "flex";
  setTimeout(function() {
    modal.classList.add('show');
  }, 1);
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  imgCount = 6;
  imgCounter.innerHTML = imgCount + " / " + document.querySelectorAll(".myImg").length;
}
img7.onclick = function(){
  modal.style.display = "flex";
  setTimeout(function() {
    modal.classList.add('show');
  }, 1);
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  imgCount = 7;
  imgCounter.innerHTML = imgCount + " / " + document.querySelectorAll(".myImg").length;
}
img8.onclick = function(){
  modal.style.display = "flex";
  setTimeout(function() {
    modal.classList.add('show');
  }, 1);
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  imgCount = 8;
  imgCounter.innerHTML = imgCount + " / " + document.querySelectorAll(".myImg").length;
}
img9.onclick = function(){
  modal.style.display = "flex";
  setTimeout(function() {
    modal.classList.add('show');
  }, 1);
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  imgCount = 9;
  imgCounter.innerHTML = imgCount + " / " + document.querySelectorAll(".myImg").length;
}
img10.onclick = function(){
  modal.style.display = "flex";
  setTimeout(function() {
    modal.classList.add('show');
  }, 1);
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  imgCount = 10;
  imgCounter.innerHTML = imgCount + " / " + document.querySelectorAll(".myImg").length;
}
img11.onclick = function(){
  modal.style.display = "flex";
  setTimeout(function() {
    modal.classList.add('show');
  }, 1);
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  imgCount = 11;
  imgCounter.innerHTML = imgCount + " / " + document.querySelectorAll(".myImg").length;
}
img12.onclick = function(){
  modal.style.display = "flex";
  setTimeout(function() {
    modal.classList.add('show');
  }, 1);
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
  imgCount = 12;
  imgCounter.innerHTML = imgCount + " / " + document.querySelectorAll(".myImg").length;
}

// Get the <span> element that closes the modal
const spanX = document.getElementById("close");
const imgCounter = document.getElementById("imgCounter");

// When the user clicks on <span> (x), close the modal
spanX.onclick = function() {
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


function nextImg() {
  switch (imgCount) {
    case 12:
      modalImg.src = img1.src;
      captionText.innerHTML = img1.alt;
      break;
    case 11:
      modalImg.src = img12.src;
      captionText.innerHTML = img12.alt;
      break;
    case 10:
      modalImg.src = img11.src;
      captionText.innerHTML = img11.alt;
      break;
    case 9:
      modalImg.src = img10.src;
      captionText.innerHTML = img10.alt;
      break;
    case 8:
      modalImg.src = img9.src;
      captionText.innerHTML = img9.alt;
      break;
    case 7:
      modalImg.src = img8.src;
      captionText.innerHTML = img8.alt;
      break;
    case 6:
      modalImg.src = img7.src;
      captionText.innerHTML = img7.alt;
      break;
    case 5:
      modalImg.src = img6.src;
      captionText.innerHTML = img6.alt;
      break;
    case 4:
      modalImg.src = img5.src;
      captionText.innerHTML = img5.alt;
      break;
    case 3:
      modalImg.src = img4.src;
      captionText.innerHTML = img4.alt;
      break;
    case 2:
      modalImg.src = img3.src;
      captionText.innerHTML = img3.alt;
      break;
    default:
      modalImg.src = img2.src;
      captionText.innerHTML = img2.alt;
      break;
  }
  if (imgCount == document.querySelectorAll(".myImg").length) {
    imgCount = 1;
  } else {
    imgCount++;
  }
  imgCounter.innerHTML = imgCount + " / " + document.querySelectorAll(".myImg").length;
}

function prevImg() {
  switch (imgCount) {
    case 12:
      modalImg.src = img11.src;
      captionText.innerHTML = img11.alt;
      break;
    case 11:
      modalImg.src = img10.src;
      captionText.innerHTML = img10.alt;
      break;
    case 10:
      modalImg.src = img9.src;
      captionText.innerHTML = img9.alt;
      break;
    case 9:
      modalImg.src = img8.src;
      captionText.innerHTML = img8.alt;
      break;
    case 8:
      modalImg.src = img7.src;
      captionText.innerHTML = img7.alt;
      break;
    case 7:
      modalImg.src = img6.src;
      captionText.innerHTML = img6.alt;
      break;
    case 6:
      modalImg.src = img5.src;
      captionText.innerHTML = img5.alt;
      break;
    case 5:
      modalImg.src = img4.src;
      captionText.innerHTML = img4.alt;
      break;
    case 4:
      modalImg.src = img3.src;
      captionText.innerHTML = img3.alt;
      break;
    case 3:
      modalImg.src = img2.src;
      captionText.innerHTML = img2.alt;
      break;
    case 2:
      modalImg.src = img1.src;
      captionText.innerHTML = img1.alt;
      break;
    default:
      modalImg.src = img12.src;
      captionText.innerHTML = img12.alt;
  }
  if (imgCount == 1) {
    imgCount = document.querySelectorAll(".myImg").length;
  } else {
    imgCount--;
  }
  imgCounter.innerHTML = imgCount + " / " + document.querySelectorAll(".myImg").length;
}

// ------------------------------------

const panoImg = document.querySelector(".panoImg");
const panoSrc = 'src/pano360.JPG';

const panorama = new PANOLENS.ImagePanorama(panoSrc);
const viewer = new PANOLENS.Viewer({
  container: panoImg,
  autoRotate: true,
  autoRotateSpeed: 0.1
});

viewer.add(panorama);