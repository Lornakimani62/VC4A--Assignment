
function closeNav() {
    var el = document.getElementById("navigation")
    document.getElementById("inputNavToggle").checked = false;
    var el1 = document.getElementById("nav__link--explore")
    var el2 = document.getElementById("nav__link--learn")
    el2.style.display = "none"
    el.style.display = "none"
    el1.style.display = "none" 
}

function openNav() {
    var el = document.getElementById("navigation")
    var el1 = document.getElementById("nav__link--explore")
    var el2 = document.getElementById("nav__link--learn")
    el2.style.display = "none"
    el1.style.display = "none"
    el.style.display = "flex"

}

function ToggleExplore() {
    var screenWidth = window.innerWidth;
    console.log(screenWidth)
    if(screenWidth < 767){
        var el = document.getElementById("nav__link--explore")
        var el2 = document.getElementById("nav__link--learn")
        if (el.style.display === "none") {
            el2.style.display = "none"
            el.style.display = "block"
        }else {
            el.style.display = "none"
        }
    }else {
        var el = document.getElementById("nav__link--explore--desktop")
        var el2 = document.getElementById("nav__link--learn--desktop")
        if (el.style.display === "none") {
            el2.style.display = "none"
            el.style.display = "block"
        }else {
            el.style.display = "none"
        }
    }

    
}

function ToggleLearn() {
    var screenWidth = window.innerWidth;
    console.log(screenWidth)
    if(screenWidth < 767){
        var el = document.getElementById("nav__link--learn")
        var el2 = document.getElementById("nav__link--explore")
        if (el.style.display === "none") {
            el2.style.display = "none"
            el.style.display = "block"
        }else {
            el.style.display = "none"
        }
    }else {
        var el = document.getElementById("nav__link--learn--desktop")
        var el2 = document.getElementById("nav__link--explore--desktop")
        if (el.style.display === "none") {
            el2.style.display = "none"
            el.style.display = "block"
        }else {
            el.style.display = "none"
        }
    }
    
}