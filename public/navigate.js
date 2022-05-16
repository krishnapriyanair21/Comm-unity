'use strict';

// all nav bar clicks

let aboutButton = document.getElementById("about_button")
let gamesButton = document.getElementById("games_button")
let resourceButton = document.getElementById("resource_button")
let homeButton = document.getElementById("logo")
let loginIcon = document.getElementById("login")


let navigate_to_about = function(){
    window.location = "/about.html"
}

let navigate_to_games = function(){
    window.location = "/games.html"
}

let navigate_to_resource = function(){
    window.location = "/resources.html"
}

let navigate_to_home = function(){
    window.location = "/homepage.html"
}

let navigate_to_login = function(){
    window.location = "/login.html"
}


aboutButton.addEventListener("click", navigate_to_about)
gamesButton.addEventListener("click", navigate_to_games)
resourceButton.addEventListener("click", navigate_to_resource)
homeButton.addEventListener("click",navigate_to_home )
loginIcon.addEventListener("click", navigate_to_login)
