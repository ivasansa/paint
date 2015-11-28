window.addEventListener("load", inici, true);
//document.getElementById("pinzell").addEventListener("click", inici());
//document.getElementById("rectangle").addEventListener("click", iniciR());

if (typeof gruixut != 'undefined'){
    var gruixut = 1;
}

function gruix(x) {
    gruixut = x.value;
}

if (typeof colorAPintar != 'undefined'){
    var colorAPintar = "#000000";
}

function color(x) {
    colorAPintar = x.value;
}

if (typeof potPintura != 'undefined'){
    var potPintura = "transparent";
}

function pot(x) {
    potPintura = x.value;
}

if (typeof tipusLinia != 'undefined'){
    var tipusLinia = "transparent";
}

function tipus(x) {
    tipusLinia = x.value;
}

if (typeof n != 'undefined'){
    var n = "N";
}

function inici(n){
//    console.log(n);
    switch(n) {
        case "P":
            if (canvas.getContext) {
                var ctx = canvas.getContext('2d');
                ctx.beginPath();
                console.log(gruixut);
                console.log(n);
                ctx.lineWidth = gruixut;
                ctx.strokeStyle = colorAPintar;
                ctx.setLineDash([tipusLinia]);
//                ctx.fillStyle= potPintura;
                canvas.addEventListener('click', function (evt) {
                    obtenirCoordenades(document.getElementById('canvas'), evt, ctx);
                }, false);

            }
            break;
        case "R":
            if (canvas.getContext) {
                var ctx = canvas.getContext('2d');
                ctx.beginPath();
//                console.log(n);
                ctx.lineWidth = gruixut;
                ctx.strokeStyle = colorAPintar;
                ctx.setLineDash([tipusLinia]);
                canvas.addEventListener('click', function (evt) {
                    obtenirCoordenadesR(document.getElementById('canvas'), evt, ctx);
                }, false);

                //        ctx.rect(20,20,150,100);
            }
            break;
        case "N":
                console.log("Nuthing");

            break;
//        default:
//             if (canvas.getContext) {
//                var ctx = canvas.getContext('2d');
//                ctx.beginPath();
//                console.log(n);
//                ctx.lineWidth = gruixut;
//                ctx.strokeStyle = colorAPintar;
//                ctx.setLineDash([tipusLinia]);
////                ctx.fillStyle= potPintura;
//                canvas.addEventListener('click', function (evt) {
//                    obtenirCoordenades(document.getElementById('canvas'), evt, ctx);
//                }, false);
//
//            }
//            break;

    }
}


function obtenirCoordenades(canvas, evt, ctx) {
    var rect = canvas.getBoundingClientRect();
    var x = evt.clientX - rect.left;
    var y = evt.clientY - rect.top;
    console.log("x: " + x + " y: " + y);
    ctx.lineTo(x + 1, y + 1);
//    ctx.fill();
    ctx.stroke();

}

function obtenirCoordenadesR(canvas, evt, ctx) {
    var recta = canvas.getBoundingClientRect();
    var x = evt.clientX - recta.left;
    var y = evt.clientY - recta.top;
//    ctx.moveTo(x, y);
//    ctx.rect(x, y, x+20, y+10);
//    ctx.stroke();


    canvas.addEventListener('click', function (evt) {
        var z = evt.clientX - recta.left;
        var z1 = evt.clientY - recta.top;

        ctx.rect(x, y, z, z1);
        ctx.strokeRect(x,y,z-x,z1-y);
    }, false);

    console.log(n);
    n = "N";
    inici();
}

function obtenirCoordenadesColor(canvas, evt, ctx) {
    var rect = canvas.getBoundingClientRect();
    var x = evt.clientX - rect.left;
    var y = evt.clientY - rect.top;
    console.log("x: " + x + " y: " + y);
    ctx.lineTo(x + 1, y + 1);
    ctx.stroke();
    ctx.fill();
}

//function obtenirCoordenadesC(canvas, evt, ctx) {
//    var rect = canvas.getBoundingClientRect();
//    var x = evt.clientX - rect.left;
//    var y = evt.clientY - rect.top;
//    console.log("x: " + x + " y: " + y);
//    ctx.arc(x, y, 5, 0, 2 * Math.PI, false);
//    ctx.stroke();
//}
//
//function cercle(){
//    if (canvas.getContext) {
//        var ctx = canvas.getContext('2d');
//        ctx.beginPath();
//        canvas.addEventListener('click', function (evt) {
//            obtenirCoordenadesC(document.getElementById('canvas'), evt, ctx);
//        }, false);
//
//
//    }
//}



function bw() {
    if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    grayScale(ctx, canvas);

    }
}

function grayScale(context, canvas) {
    var imgData = context.getImageData(0, 0, canvas.width, canvas.height);
    var pixels  = imgData.data;
    for (var i = 0, n = pixels.length; i < n; i += 4) {
    var grayscale = pixels[i] * .3 + pixels[i+1] * .59 + pixels[i+2] * .11;
    pixels[i  ] = grayscale;        // red
    pixels[i+1] = grayscale;        // green
    pixels[i+2] = grayscale;        // blue
    }
    context.putImageData(imgData, 0, 0);
}

//function pot(x) {
//    if (canvas.getContext) {
//        var ctx = canvas.getContext('2d');
//        ctx.beginPath();
//        canvas.addEventListener('click', function (evt) {
//            obtenirCoordenadesColor(document.getElementById('canvas'), evt, ctx);
//        }, false);
//        ctx.fillStyle=x.value;
//    }
//}


function borrar() {
    var ctx = canvas.getContext('2d');
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function exportar() {
    // save canvas image as data url (png format by default)
    var dataURL = canvas.toDataURL();

    // set canvasImg image src to dataURL
    // so it can be saved as an image
    document.getElementById('canvasImg').src = dataURL;


//window.location.href=dataURL; // it will save locally
}

//function inici() {
//    if (canvas.getContext) {
//        var ctx = canvas.getContext('2d');
//        ctx.beginPath();
//        canvas.addEventListener('click', function (evt) {
//            obtenirCoordenades(document.getElementById('canvas'), evt, ctx);
//        }, false);
//    }
//}
//
//function iniciR() {
//    if (canvas.getContext) {
//        var ctx = canvas.getContext('2d');
//        ctx.beginPath();
//        canvas.addEventListener('click', function (evt) {
//            obtenirCoordenadesR(document.getElementById('canvas'), evt, ctx);
//        }, false);
//        //        ctx.rect(20,20,150,100);
//    }
//}
