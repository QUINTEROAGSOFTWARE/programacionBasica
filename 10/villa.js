var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var teclas = {
    UP: 38,
    DOWN: 40,
    LETF: 37,
    RIGTH: 39
};

var fondo = {
    url: "fondo.png",
    cargaOk: false
};
var vaca = {
    url: "vaca.png",
    cargaOk: false
    x: [],
    y: []
};

var fondo.imagen = new Image();
fondo.imagen.src = mapa;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = "vaca.png";
vaca.imagen.addEventListener("load", cargarVacas);

function cargarFondo() {
    fondo.cargarOk = true;
}



function dibujar() {
    papel.drawImage(fondo, 0, 0);
}


function aleatorio(min, maxi) {
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}