var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");


dibujarLinea("yellow", 10, 300, 220, 10)
dibujarLinea("blue", 310, 10,50, 40)


function dibujarLinea(color, xinicial, yinicial, xfinal,yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath()
}


lienzo.beginPath();
lienzo.strokeStyle = "red";
lienzo.moveTo(100, 100);
lienzo.lineTo(200, 200);
lienzo.stroke();
lienzo.closePath();