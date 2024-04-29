var d = document.getElementById("maya");
var lienzo = d.getContext("2d")
var lineas = 50;
var l =0;
var yi, xf;
var colorcito = "blue";
for(l = 0; l < lineas; l++)
{
    yi = 10 * l;
    xf = 10 * (l +1);
    dibujarLinea(colorcito, 0, yi, xf, 500);
    console.log("linea " +l);
    l = l + 1; 
}
  
dibujarLinea(colorcito, 1,1,0,499);
dibujarLinea(colorcito, 1,499,499,500);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{

    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}