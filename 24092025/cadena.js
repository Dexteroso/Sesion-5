function concatenarCadenas() {
    nombreCliente = document.getElementById("caja_nombres").value;
    apellidoCliente = document.getElementById("caja_paterno").value;
    apellidoCliente2 = document.getElementById("caja_materno").value;
    nombreCompleto = nombreCliente + " " + apellidoCliente + " " + apellidoCliente2;
    document.getElementById("caja_nombre_completo").value = nombreCompleto;
    document.getElementById("caja_posicion").value = nombreCompleto.charAt(0);
    document.getElementById("caja_longitud").value = nombreCompleto.length;
    document.getElementById("caja_mayúsculas").value = nombreCompleto.toUpperCase();
    document.getElementById("caja_minúsculas").value = nombreCompleto.toLowerCase();

}

function BorrarCampos() {
    document.getElementById("caja_paterno").value = "";
    document.getElementById("caja_materno").value = "";
    document.getElementById("caja_nombres").value = "";
    document.getElementById("caja_nombre_completo").value = "";
    document.getElementById("caja_longitud").value = "";
    document.getElementById("caja_posicion").value = "";
    document.getElementById("caja_día").value = "";
    document.getElementById("caja_mes").value = "";
    document.getElementById("caja_año").value = "";
    document.getElementById("caja_fecha").value = "";
    document.getElementById("caja_rfc").value = "";
}

function concatenarfecha() {
    dia = document.getElementById("caja_día").value;
    mes = document.getElementById("caja_mes").value;
    año = document.getElementById("caja_año").value;
    fecha = año + "-" + mes + "-" + dia;
    document.getElementById("caja_fecha").value = fecha;
}

function concatenarRFC() {
    // Aquí se definen la fuente de los datos
    apellidoCliente = document.getElementById("caja_paterno").value;
    apellidoCliente2 = document.getElementById("caja_materno").value;
    nombreCliente = document.getElementById("caja_nombres").value;
    dia = document.getElementById("caja_día").value;
    mes = document.getElementById("caja_mes").value;
    año = document.getElementById("caja_año").value;


    // Aquí se definen las variables que se van a utilizar
    char1 = apellidoCliente.charAt(0);
    char2 = apellidoCliente.charAt(1);
    char3 = apellidoCliente2.charAt(0);
    char4 = nombreCliente.charAt(0);
    char5 = año.charAt(2);
    char6 = año.charAt(3);
    char7 = mes.charAt(0);
    char8 = mes.charAt(1);
    char9 = dia.charAt(0);
    char10 = dia.charAt(1);
    añorfc = char5 + char6;
    mesrfc = char7 + char8;
    diarfc = char9 + char10;
    char4 = char4.toUpperCase();
    char3 = char3.toUpperCase();
    char2 = char2.toUpperCase();
    char1 = char1.toUpperCase();

    // Aquí se concatenan las variables para formar los datos finales
    rfc = char1 + char2 + char3 + char4 + añorfc + mesrfc + diarfc;
    document.getElementById("caja_rfc").value = rfc;
    fecha = año + "-" + mes + "-" + dia;
    document.getElementById("caja_fecha").value = fecha;
    nombreCompleto = nombreCliente + " " + apellidoCliente + " " + apellidoCliente2;
    document.getElementById("caja_nombre_completo").value = nombreCompleto;
    document.getElementById("caja_longitud").value = nombreCompleto.length;
    document.getElementById("caja_posicion").value = nombreCompleto.charAt(2);
}