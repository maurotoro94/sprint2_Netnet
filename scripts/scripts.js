const fila= document.querySelector('.contenedor-carousel');
const peliculas=document.querySelectorAll('.pelicula');
const flechaizq=document.getElementById('flecha-izq');
const flechader=document.getElementById('flecha-der');


flechader.addEventListener('click',()=>{

    fila.scrollLeft += fila.offsetWidth;

});

flechaizq.addEventListener('click',()=>{

    fila.scrollLeft -= fila.offsetWidth;

});

function almacenarDatos(){
    var email = document.getElementById('email');
    var name_user = document.getElementById('name');
    var genero = document.getElementById('genero');
    var comentarios = document.getElementById('comentary');

    localStorage.setItem("email", email.value);
    localStorage.setItem("name", name_user.value);
    localStorage.setItem("genero", genero.value);
    localStorage.setItem("comentarios", comentarios.value);

    console.log(localStorage.getItem("email"));
    console.log(localStorage.getItem("name"));
    console.log(localStorage.getItem("genero"));
    console.log(localStorage.getItem("comentarios"));


}
