const resultado=document.getElementById("txtresultado");
function mensaje(texto){console.log(texto);alert(texto);const resultado=document.getElementById("txtresultado");
    resultado.textContent=texto;}

function agregar(palabra){
resultado.textContent=palabra;}

function modificar(palabra){

}
 function eliminar(palabra){


 }
 function mostrar(palabra){


 }

 const btnagregar=document.getElementById("btnagregar");

 const btnmostrar=document.getElementById("btnmostrar");

 const btnmodificar=document.getElementById("btnmodificar");

const btneliminar=document.getElementById("btneliminar");


btnagregar.addeventlistener("click",agregar("klk"));
btnmostrar.addeventlistener("click", mostrar("klk"));
btnmodificar.addeventlistener("click",modificar("klk"));
btneliminar.addeventlistener("click",eliminar("klk"));