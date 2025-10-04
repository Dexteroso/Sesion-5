function mostrarPresupuesto() {
    ppto = parseInt(document.getElementById("caja_presupuesto").value, 10);
    noMeses = parseInt(document.getElementById("caja_meses").value, 10);
    text = "Periodo\t\tPresupuesto\tAcumulado\n";
    for (i = 1; i <= noMeses; i++) {
        text += i + "\t\t" + (ppto / noMeses).toFixed(2) +  "\t\t" + ((ppto / noMeses) * i).toFixed(2) + "\n";
    }
    document.getElementById("area").value = text;
}

btnDistribuirPpto = document.getElementById("Distribuir");
btnDistribuirPpto.addEventListener("click", mostrarPresupuesto);

function multiplicar() {
    factor1 = parseInt(document.getElementById("Factor1").value,10);
    text = "Tabla del " + factor1 + "\n\n";
    for (i = 1; i <= 10; i++) {
        text += factor1 + " x " + i + " = " + (factor1 * i) + "\n";
}
    document.getElementById("area2").value = text;
}

btnMultiplicar = document.getElementById("Multiplicar");
btnMultiplicar.addEventListener("click", multiplicar);

function BorrarCampos() {
    document.getElementById("caja_presupuesto").value = "";
    document.getElementById("caja_meses").value = "";
    document.getElementById("area").value = "";
    document.getElementById("Factor1").value = "";
    document.getElementById("area2").value = "";

}