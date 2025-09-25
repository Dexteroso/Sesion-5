function concatenarCadenas() {
nombreCliente=document.getElementById("caja_nombres").value;
apellidoCliente=document.getElementById("caja_paterno").value;
apellidoCliente2=document.getElementById("caja_materno").value;
nombreCompleto=nombreCliente+" "+apellidoCliente+" "+apellidoCliente2;
document.getElementById("caja_nombre_completo").value=nombreCompleto;
}