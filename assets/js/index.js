const form = document.getElementById("contact-section");

/*
window.addEventListener("load", ()=>{
    setTimeout(function() {
        form.style.left = "0";
    }, 15000);
})
*/


function openForm(){
    form.style.left = "0";
}
function closeForm(){
    form.style.left = "100%";
}

function showAlert(){
    window.alert("We've received your details and we'll contact you soon.");
    setTimeout(closeForm, 2000);
}
