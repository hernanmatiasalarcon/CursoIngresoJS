/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
      var sueldo;
      var resultado;
      var aumento;
      var sueldoFinal;

      sueldo=document.getElementById("sueldo").value;
      
      aumento= sueldo*1.10;
      sueldoFinal= parseInt(aumento);
      document.getElementById("resultado").value = sueldoFinal;
	
}
