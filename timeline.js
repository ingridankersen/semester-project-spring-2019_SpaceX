let myURL = "https://api.spacexdata.com/v3/history";

fetch(myURL) 
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
    
    for(x = 0; x < data.length; x++) {
            
            var myArticle = document.getElementById("timeline");
            
            var timelineContainerLeft = document.createElement("div");
            timelineContainerLeft.setAttribute("class", "timeline-container");

            var timelineContent = document.createElement("div");
            timelineContent.setAttribute("class", "timeline-content");
            
            var myH3 = document.createElement("h3");
            myH3.setAttribute("class", "timeline-date");
            var myDate = data[x].event_date_utc;
            myH3.textContent = myDate.slice(0,10);
            
            var myParagraph = document.createElement("p");
            myParagraph.textContent = data[x].details;
            
            var myLink = document.createElement("a");
            myLink.setAttribute("class", "timeline-link");
            var myLinkURL = data[x].links.article;
            myLink.setAttribute("href", myLinkURL);
            myLink.textContent = "Read article";
        
        myArticle.appendChild(timelineContainerLeft);
        timelineContainerLeft.appendChild(timelineContent);
        timelineContent.appendChild(myH3);
        timelineContent.appendChild(myParagraph);
            timelineContent.appendChild(myLink);
    }
    
    })
.catch(function(error) {
    // If there is any error you will catch them here
  });