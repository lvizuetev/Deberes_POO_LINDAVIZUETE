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
   /* const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;
    const $informacion = document.getElementById("informacion").value;
    $informacion.textContent = `${nombre}, revise su correo => ${email}
    para confirmar su registro, gracias por su comentario =>${mensaje}`
    modal.classList.add("informacion")*/
    /*modalC.style.opacity ="1";
    modalC.style.visibility ="visible";
    modal.classList.toggle("modal-close");*/

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
function abrirModal(){
    const formulario__submit = document.getElementById('enviar');
    formulario__submit.addEventListener('click', event=> {
        event.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const mensaje = document.getElementById("mensaje").value;
        let camva = true;
        let datva= false;
        if (nombre !==''&& email!==''&& mensaje!=='')(camva=false )
        document.getElementById('Modal').style.display = 'block';
        document.getElementById('saludo').innerHTML=`<p> ${nombre} revise su correo => ${email} para confirmar su registro, gracias por su mensaje => ${mensaje} </p>`
    }
    )
}
abrirModal();
