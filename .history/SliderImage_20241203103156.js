let Slider_image = document.querySelector(".slider-image");
let images = ["tsc1.png", "tsc2.png", "tsc3.png", "tsc4.png", "tsc5.png"];
let i = 0; // Giá Trị bắt đầu index

function prev() {
  if (i <= 0) i = images.length;
  i--;
  return setImg();
}

function next() {
  if (i >= images.length - 1) i = -1;
  i++;
  return setImg();
}

function setImg() {
  return Slider_image.setAttribute("src", "./img/" + images[i]);
}
