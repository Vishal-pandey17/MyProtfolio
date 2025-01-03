/*var nav = document.querySelector('.nav-menu a');

for(var i=0;i<nav.length;i++){

	nav[i].addEventListener('click', function(event){
          event.preventDefault();

         var targetSectionID  = this.textContent.trim().toLowerCase();
         var targetSection = document.getElementById(targetSectionID);
        

         var interval = setInterval(function(){
         	 var targetSectionCoordinate = targetSection.getBoundingClientRect();
             if(targetSectionCoordinate.top <= top){
             	clearInterval(interval);
             	return;
             }
             window.scrollBy(0, 50);
         }, 20);
	});
}*/

// Another Method

// Scroll bar
var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;
for (var i = 0; i < navMenuAnchorTags.length; i++) {

    navMenuAnchorTags[i].addEventListener('click', function (event) {

        event.preventDefault();

        var targetSectionID = this.textContent.trim().toLowerCase();
        console.log(this.textContent);
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection);
        //    interval = setInterval(scrollVertically, 20, targetSection);

        interval = setInterval(function () {
            scrollVertically(targetSection);
        }, 20);
    });

}


function scrollVertically(targetSection) {
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if (targetSectionCoordinates.top <= 0) {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}































//  var edu = document.querySelector("#education");

//  edu.addEventListener("click", function(event){

//  	event.preventDefault();

//     var target = 1933;
//     var curr = 0;

//     var scrollInterval = setInterval(function(){
//          if(curr >= target){
//          	clearInterval(scrollInterval);
//          	return;
//          }
//          curr += 50;
//          window.scrollBy(0, 20);
//     }, 50);
// });




/*var tarInterval = 1000;
var currentPos = 0;

var scrollInterval = setInterval(function(){
       
     if(currentPos>=tarInterval){
     	clearInterval(scrollInterval);
     	return;
     }
     currentPos += 50;
    // window.scrollTo(0, 1000);
    window.scrollBy(0,50);
}, 50);*/