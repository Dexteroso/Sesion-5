function Evaluar() {
    nombre = document.getElementById("caja_nombre").value;
    genero = document.getElementById("caja_género").value;
    edad = document.getElementById("caja_edad").value;

    // if (genero == "Masculino") {
    //     alert("El formulario de la persona " + nombre + " es de género masculino");
    // } else {
    //     alert("La edad de la persona con género femenino es " + edad);
    // }
    // document.getElementById("area").value = "Persona: " + nombre + " Género: " + genero + " Edad: " + edad;

    if (edad <= 69) {
        alert("Failed");
        document.getElementById("area").value = "Failed";
    } else {
        alert("Passed");
        document.getElementById("area").value = "Passed";
    }
}

btnEvaluar = document.getElementById("btnEvaluar");
btnEvaluar.addEventListener("click", Evaluar);