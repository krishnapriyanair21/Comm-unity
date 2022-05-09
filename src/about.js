'use strict';

let aboutButton = document.getElementById("about_button")

let navigate_to_about = function(){
    window.location = "/about.html"
}


aboutButton.addEventListener("click", navigate_to_about)