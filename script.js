function opcion(num1) {

	if(num1 == 1){document.getElementById('cuerpo').style.backgroundColor = "#F5A9E1";}

	if(num1 == 2){document.getElementById('cuerpo').style.backgroundColor = "#FA8258";}

	if(num1 == 3){document.getElementById('cuerpo').style.backgroundColor = "#E6E6E6";}
}

function mostrarlista() {
	var ol = "<ol>";

	for (var i = 0; i < 10; i++) {
			document.getElementById('lista').innerHTML = ol+="<li>"+"Elementos de la lista"+"</li>";
		}
	ol+="</ol>";
}	

function compras() {
	var producto = document.getElementById('producto').value;
	var precio = document.getElementById('precio').value;
	var cantidad = document.getElementById('cantidad').value;
	var importe = precio*cantidad;

	document.getElementById('salida').innerHTML="<tr><td>"+"Producto"+"</td><td>"+"Precio"+"</td><td>"+"Cantidad"+"</td><td>"+"Importe"+"</td></tr>";
    document.getElementById('salida').insertRow(-1).innerHTML+="<tr><td>"+producto+"</td><td>"+precio+"</td><td>"+cantidad+"</td><td>"+importe+"</td></tr>";
}

var cont=1;
function likes() {
	document.getElementById('info').innerText = cont+" Me gusta";
	cont++;
}