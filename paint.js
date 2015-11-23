window.addEventListener("load", inici, true);

function obtenirCoordenades(canvas, evt, ctx) {
    var rect = canvas.getBoundingClientRect();
    var x = evt.clientX - rect.left;
    var y = evt.clientY - rect.top;
    console.log("x: " + x + " y: " + y);
    ctx.lineTo(x + 1, y + 1);
    ctx.stroke();
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



function gruix(x) {
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        canvas.addEventListener('click', function (evt) {
            obtenirCoordenades(document.getElementById('canvas'), evt, ctx);
        }, false);
        ctx.lineWidth = x.value;
    }
}

function color(x) {
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        canvas.addEventListener('click', function (evt) {
            obtenirCoordenades(document.getElementById('canvas'), evt, ctx);
        }, false);
        ctx.strokeStyle = x.value;
    }
}

function tipus(x) {
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        canvas.addEventListener('click', function (evt) {
            obtenirCoordenades(document.getElementById('canvas'), evt, ctx);
        }, false);
        if(x.value == 1){
            ctx.setLineDash([7]);
        }
        else if(x.value == 2){
            ctx.setLineDash([3]);
        }
    }
}

function obtenirCoordenadesR(canvas, evt, ctx) {
            var rect = canvas.getBoundingClientRect();
            var x = evt.clientX - rect.left;
            var y = evt.clientY - rect.top;
            console.log("Rekt");
            ctx.strokeRect(x, y, x + 20, y + 20);
        }

function bw() {
    var canvas = document.getElementById('canvas');
    var width = canvas.width;
    var height = canvas.height;

    var imgd = canvas.getImageData(0, 0, width, height);
    var pix = imgd.data;
    for (var i = 0, n = pix.length; i < n; i += 4) {
    var grayscale = pix[i  ] * .3 + pix[i+1] * .59 + pix[i+2] * .11;
    pix[i  ] = grayscale;   // red
    pix[i+1] = grayscale;   // green
    pix[i+2] = grayscale;   // blue
    // alpha
    }
    canvas.putImageData(imgd, 0, 0);

}



function exportar() {
    // save canvas image as data url (png format by default)
    var dataURL = canvas.toDataURL();

    // set canvasImg image src to dataURL
    // so it can be saved as an image
    document.getElementById('canvasImg').src = dataURL;


window.location.href=dataURL; // it will save locally
}

function inici(x) {

    if(x.value == 2){
            console.log("Rekt");
            if (canvas.getContext) {
                var ctx = canvas.getContext('2d');
                ctx.beginPath();
                canvas.addEventListener('click', function (evt) {
                    obtenirCoordenadesR(document.getElementById('canvas'), evt, ctx);
                }, false);
                //        ctx.rect(20,20,150,100);
            }

    }
    else{
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        canvas.addEventListener('click', function (evt) {
            obtenirCoordenades(document.getElementById('canvas'), evt, ctx);
        }, false);
    }
    }
}
