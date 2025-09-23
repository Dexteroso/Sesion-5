function converirMetrosKilometros() {
    //Una variable es un espacio en memoria que guarda un valor
    metros = parseInt(document.getElementById("cajametros").value)
    //Operación
    Kilometros = metros / 1000;
    //Carga la variable del valor en la caja kilometros de la página.
    document.getElementById("cajakilometros").value = Kilometros;
}