const menu = document.getElementById("menu-alt");
const menuStrokes = document.getElementById("primary");
const navbar = document.getElementById("navbar");
const allservices = document.getElementById("all-services");

const dwidth = screen.width;
var clicks = 0;

function showservices(){
    allservices.style.display = "flex";
}

function hideservices(){
    allservices.style.display = "none";
}

document.getElementById("hero").addEventListener("click", () =>{
    allservices.style.display = "none";
})


menu.addEventListener("click", () =>{
    clicks++;
    if(clicks % 2 != 0){
        menu.style.background = "#FFF";
        menuStrokes.style.stroke = "#6464FF"
        navbar.style.height = "30vh";
    }
    else{
        menu.style.background = "#6464FF";
        menuStrokes.style.stroke = "#FFF"
        navbar.style.height = "10vh";
        allservices.style.display = "none";
    }
})