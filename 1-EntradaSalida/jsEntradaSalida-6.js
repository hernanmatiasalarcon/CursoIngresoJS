/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

    var primernumero;
    var segundonumero;
    var suma;

    primernumero=document.getElementById("numeroUno").value;
    segundonumero=document.getElementById("numeroDos").value;

    suma=parseInt(primernumero)+parseInt(segundonumero);

    alert(suma);



}

