let myURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=1300&camera=fhaz&api_key=PGqzITcoj6jvU22VuDAY5eOBC5Gyb9X1DrlaH4tO";

fetch(myURL) 
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    
    for(i = 0; i < data.photos.length; i++) {
        console.log(data.photos[i].id);
        
        var myContainer = document.getElementById("carousel-container");
        
        var mySlide = document.createElement("div");
        mySlide.setAttribute("class", "carousel-slide");
        
        var myImage = document.createElement("img");
        var imageURL = data.photos[i].img_src;
        myImage.setAttribute("src", imageURL);
        
        myContainer.appendChild(mySlide);
        mySlide.appendChild(myImage);
    }
    
        })
.catch(function(error) {
    // If there is any error you will catch them here
  });