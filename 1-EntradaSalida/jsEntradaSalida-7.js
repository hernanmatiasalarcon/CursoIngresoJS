/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

function restar()
{
    var primernumero;
    var segundonumero;
    var resta;
    primernumero=document.getElementById("numeroUno").value;
    segundonumero=document.getElementById("numeroDos").value;
    resta=parseInt(primernumero)-parseInt(segundonumero);
    alert(resta)

	
}

function multiplicar()
{ 
    var primernumero;
    var segundonumero;
    var multiplicacion;

    primernumero=document.getElementById("numeroUno").value;
    segundonumero=document.getElementById("numeroDos").value;
    multiplicacion=parseInt(primernumero)*parseInt(segundonumero);
    alert(multiplicacion);

	
}

function dividir()
{     var primernumero;
	  var segundonumero;

	  primernumero=document.getElementById("numeroUno").value;
	  segundonumero=document.getElementById("numeroDos").value;
	  division=parseInt(primernumero)/parseInt(segundonumero);
	  alert(division)
    


	
}

