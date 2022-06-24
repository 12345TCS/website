const form = document.getElementById("contact-section");
var formclicks = 0;

/*
window.addEventListener("load", ()=>{
    setTimeout(function() {
        form.style.left = "0";
    }, 15000);
})
*/


function closeForm(){
    form.style.left = "100%";
    formclicks = 0;
}

function openForm(){
    if(formclicks==0){
        form.style.left = "0";
        formclicks = 1;
    }
    else{
        closeForm();
    }
}

function showAlert(){
    window.alert("We've received your details and we'll contact you soon.");
    setTimeout(closeForm, 2000);
}
