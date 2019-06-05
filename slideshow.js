var imagesAmount = 0;
createSlideshow();

function createSlideshow() {
  var x;
  var images = document.getElementsByClassName("slideshow-image");
  for (x = 0; x < images.length; x++) {
    images[x].style.display = "none"; 
  }
  imagesAmount++;
  if (imagesAmount > images.length) {imagesAmount = 1} 
  images[imagesAmount-1].style.display = "block"; 
  setTimeout(createSlideshow, 3000);
}