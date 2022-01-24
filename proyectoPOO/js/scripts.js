let menu = document.querySelector('#menu');
let menu_bar= document.querySelector('#menu-bar');
menu_bar.addEventListener('click', function() {
    menu.classList.toggle('menu-toggle');
})
var inputs = document.getElementsByClassName('formulario__input');
for(var i=0; i< inputs.length; i++){
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1){
            this.nextElementSibling.classList.add('fijar');
        } else{
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}
let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".formulario__submit")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];
abrir.addEventListener("click", function(e){
    e.preventDefault();
    modalC.style.opacity ="1";
    modalC.style.visibility ="visible";
    modal.classList.toggle("modal-close");

})
cerrar.addEventListener("click", function(){
    modal.classList.toggle("modal-close");

    setTimeout(function(){
        modalC.style.opacity ="0";
        modalC.style.visibility ="hidden";
    },800)
})
window.addEventListener("click", function(e){
    console.log(e.target)
    if(e.target == modalC){
        modal.classList.toggle("model-close");
        setTimeout(function(){
            modalC.style.opacity ="0";
            modalC.style.visibility ="hidden";
        },900)
    

    }
})