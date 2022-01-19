const form = document.getElementById("contact-section");

window.addEventListener("load", ()=>{
    setTimeout(function() {
        form.style.left = "0";
    }, 15000);
})


function openForm(){
    form.style.left = "0";
}
function closeForm(){
    form.style.left = "100%";
}
