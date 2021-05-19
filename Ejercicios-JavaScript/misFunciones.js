/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */


/**
 * Convierte un valor ingresa por el usuario en diferentes unidades, metros, pies,
 * pulgadas y yardas
 * @method conversor
 * @param {String} id_input
 * @param {Number} valor_input
 */
function conversor(id_input, valor_input) {
    var val_metros, val_pulgadas, val_yardas, val_pies;

    if(isNaN(valor_input)){
        val_metros = "";
        val_pies = "";
        val_pulgadas = "";
        val_yardas = "";
    }else if(id_input=="metro"){
        val_metros = valor_input;
        val_pies= 3.28084*valor_input;
        val_pulgadas=39.3701*valor_input;
        val_yardas=1.09361*valor_input;
    }
    document.getElementById("metro").value= val_metros;
    document.getElementById("pie").value= val_pies;
    document.getElementById("pulgada").value=val_pulgadas;
    document.getElementById("yarda").value=val_yardas;
}


/**
 * Convierte Grados a Radianes
 * @method convertirGR
 */
function convertirGR() {
    var grados, radianes;
    grados = document.getElementById("grados").value;
    radianes = (grados*Math.PI)/180;
    document.getElementById("radianes").value = radianes;
}

/**
 * Convierte Radianes a Grados
 * @method convertirRG
 */
function convertirRG() {
    var grados, radianes;
    radianes = document.getElementById("radianes").value;
    grados = (radianes*180)/Math.PI;
    document.getElementById("grados").value = grados;
}