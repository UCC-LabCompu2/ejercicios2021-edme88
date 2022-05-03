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

    if(valor_input.includes(",")){
        valor_input = valor_input.replace(",", ".");
    }

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
    document.getElementById("metro").value= Number(val_metros).toFixed(2);
    document.getElementById("pie").value= Number(val_pies).toFixed(2);
    document.getElementById("pulgada").value=Number(val_pulgadas).toFixed(2);
    document.getElementById("yarda").value=Math.round(val_yardas*100)/100;
}


/**
 * Convierte Grados a Radianes
 * @method convertirGR
 */
function convertirGR() {
    var grados, radianes;
    grados = document.getElementById("grados").value;
    radianes = (grados*Math.PI)/180;
    document.getElementById("radianes").value = radianes.toFixed(4);
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

function mostrar_ocultar(nombre) {
    if(nombre=="val_mostrar"){
        document.getElementById("unDiv").style.display = 'block';
    }else if(nombre=="val_ocultar"){
        document.getElementById("unDiv").style.display = 'none';
    }
}

function calcularSuma() {
    var num1, num2;

    num1 = Number(document.getElementById("nums1").value);
    num2 = document.getElementById("nums2").value;

    document.getElementById("totalS").innerHTML = num1+Number(num2);
}

function cargarWeb() {
    var cant, unidad, urlComp;

    cant = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;

    urlComp= "segundaWeb.html#"+cant+"#"+unidad;
    window.open(urlComp);
}

/**
 * Carga los resultados en la segunda Web de valor y unidad
 * @method cargarResultado
 */
function cargarResultado() {
    var urlComp, cant, un;

    urlComp=window.location.href.split("/");
    urlComp=urlComp[urlComp.length-1];

    cant=urlComp.split("#")[1];
    un=urlComp.split("#")[2];

    document.getElementById("dist").value = cant + " " + un;
}

function dibujarCirculoCuadrado() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var xMax, yMax, margen;
    xMax = canvas.width;
    yMax = canvas.height;
    margen=10;

    ctx.fillStyle = "#333899";
    ctx.fillRect(margen,yMax-50-margen,50,50);

    ctx.fillStyle = "#ff8627";
    ctx.arc(xMax/2, yMax/2, 25, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
}

function tomarDatos(){
    var nombre=localStorage.getItem("NombreDelUsuario");
    document.getElementById("NombreUsuarioInput").value=nombre;
    document.getElementById("aCompletar").innerHTML=nombre;
}

function guardarNombre(nombreUsu) {
    localStorage.setItem("NombreDelUsuario", nombreUsu);
}

function dibujar(event) {
    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");

    var posX = event.clientX;
    var posY = event.clientY;

    console.log(posX, posY);

    ctx.fillRect(posX, posY, 5, 5);
    ctx.fill;
}

function dibujarCuadriculado() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var anchoMax = canvas.width;
    var alturaMax = canvas.height;

    //Lineas Horizontales
    ctx.beginPath();
    for(var i=20;i<alturaMax;){
        ctx.moveTo(0, i);
        ctx.lineTo(anchoMax, i);
        ctx.strokeStyle = "#b0d4ff";
        ctx.stroke();
        i=i+20;
    }
    ctx.closePath();

    //Lineas Verticales
    ctx.beginPath();
    for(var i=20;i<anchoMax;){
        ctx.moveTo(i, 0);
        ctx.lineTo(i, alturaMax);
        ctx.strokeStyle = "#b0d4ff";
        ctx.stroke();
        i=i+20;
    }
    ctx.closePath();

    //EjeX
    ctx.beginPath();
    ctx.moveTo(0, alturaMax/2);
    ctx.lineTo(anchoMax, alturaMax/2);
    ctx.strokeStyle = "#ff2b0e";
    ctx.stroke();
    ctx.closePath();

    //EjeY
    ctx.beginPath();
    ctx.moveTo(anchoMax/2, 0);
    ctx.lineTo(anchoMax/2, alturaMax);
    ctx.strokeStyle = "#ff2b0e";
    ctx.stroke();
    ctx.closePath();
}

function dibujarImagen(posX, posY) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    canvas.width=canvas.width;

    var img = new Image();
    img.src = "images/auto.png";

    console.log(posX, posY);
    img.onload =function(){
        ctx.drawImage(img, posX, posY);
    }

}

x=0;
dx=2;
function animarAuto() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    canvas.width=canvas.width;

    var img = new Image();
    img.src = "images/auto.png";

    img.onload =function(){
        ctx.drawImage(img, x, 100);
    }

    if(x>canvas.width){
        x=0;
    }

    x=x+dx;
}
