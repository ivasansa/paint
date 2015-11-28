window.addEventListener("load", inici, true);




function inici(){

	var canvas = document.querySelector('#paint');
	var ctx = canvas.getContext('2d');

	var sketch = document.querySelector('#sketch');
	var sketch_style = getComputedStyle(sketch);
	canvas.width = parseInt(sketch_style.getPropertyValue('width'));
	canvas.height = parseInt(sketch_style.getPropertyValue('height'));


	// Creating a tmp canvas
	var tmp_canvas = document.createElement('canvas');
	var tmp_ctx = tmp_canvas.getContext('2d');
	tmp_canvas.id = 'tmp_canvas';
	tmp_canvas.width = canvas.width;
	tmp_canvas.height = canvas.height;

	sketch.appendChild(tmp_canvas);

	var mouse = {x: 0, y: 0};
	var start_mouse = {x: 0, y: 0};


	/* Mouse Capturing Work */
	tmp_canvas.addEventListener('mousemove', function(e) {
		mouse.x = typeof e.offsetX !== 'undefined' ? e.offsetX : e.layerX;
		mouse.y = typeof e.offsetY !== 'undefined' ? e.offsetY : e.layerY;
	}, false);


	/* Drawing on Paint App */
	tmp_ctx.lineWidth = 5;
	tmp_ctx.lineJoin = 'round';
	tmp_ctx.lineCap = 'round';
	tmp_ctx.strokeStyle = 'blue';
	tmp_ctx.fillStyle = 'blue';

	tmp_canvas.addEventListener('mousedown', function(e) {
		tmp_canvas.addEventListener('mousemove', onPaint, false);

		mouse.x = typeof e.offsetX !== 'undefined' ? e.offsetX : e.layerX;
		mouse.y = typeof e.offsetY !== 'undefined' ? e.offsetY : e.layerY;

		start_mouse.x = mouse.x;
		start_mouse.y = mouse.y;

		onPaint();
	}, false);

	tmp_canvas.addEventListener('mouseup', function() {
		tmp_canvas.removeEventListener('mousemove', onPaint, false);

		// Writing down to real canvas now
		ctx.drawImage(tmp_canvas, 0, 0);
		// Clearing tmp canvas
		tmp_ctx.clearRect(0, 0, tmp_canvas.width, tmp_canvas.height);

	}, false);

	var onPaint = function() {

		// Tmp canvas is always cleared up before drawing.
		tmp_ctx.clearRect(0, 0, tmp_canvas.width, tmp_canvas.height);

		var x = Math.min(mouse.x, start_mouse.x);
		var y = Math.min(mouse.y, start_mouse.y);
		var width = Math.abs(mouse.x - start_mouse.x);
		var height = Math.abs(mouse.y - start_mouse.y);
		tmp_ctx.strokeRect(x, y, width, height);

	};

}

//
//
//if (typeof gruixut != 'undefined'){
//    var gruixut = 1;
//}
//
//function gruix(x) {
//    gruixut = x.value;
//}
//
//if (typeof colorAPintar != 'undefined'){
//    var colorAPintar = "#000000";
//}
//
//function color(x) {
//    colorAPintar = x.value;
//}
//
//if (typeof potPintura != 'undefined'){
//    var potPintura = "transparent";
//}
//
//function pot(x) {
//    potPintura = x.value;
//}
//
//if (typeof tipusLinia != 'undefined'){
//    var tipusLinia = "transparent";
//}
//
//function tipus(x) {
//    tipusLinia = x.value;
//}
//
//function inici(n){
//    switch(n) {
//        case "P":
//            if (canvas.getContext) {
//                var ctx = canvas.getContext('2d');
//                ctx.beginPath();
//                console.log(gruixut);
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
//        case "R":
//            if (canvas.getContext) {
//                var ctx = canvas.getContext('2d');
//                ctx.beginPath();
//                console.log(n);
//                canvas.addEventListener('click', function (evt) {
//                    obtenirCoordenadesR(document.getElementById('canvas'), evt, ctx);
//                }, false);
//                //        ctx.rect(20,20,150,100);
//            }
//            break;
//        default:
//             if (canvas.getContext) {
//                var ctx = canvas.getContext('2d');
//                ctx.beginPath();
//                console.log(gruixut);
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
//    }
//}
//
//
//function obtenirCoordenades(canvas, evt, ctx) {
//    var rect = canvas.getBoundingClientRect();
//    var x = evt.clientX - rect.left;
//    var y = evt.clientY - rect.top;
//    console.log("x: " + x + " y: " + y);
//    ctx.lineTo(x + 1, y + 1);
////    ctx.fill();
//    ctx.stroke();
//
//}
//
//function obtenirCoordenadesR(canvas, evt, ctx) {
//    var rect = canvas.getBoundingClientRect();
//    var x = evt.clientX - rect.left;
//    var y = evt.clientY - rect.top;
//    ctx.moveTo(x, y);
//    ctx.rect(x, y, x+20, y+10);
//    ctx.stroke();
//}
//
//function obtenirCoordenadesColor(canvas, evt, ctx) {
//    var rect = canvas.getBoundingClientRect();
//    var x = evt.clientX - rect.left;
//    var y = evt.clientY - rect.top;
//    console.log("x: " + x + " y: " + y);
//    ctx.lineTo(x + 1, y + 1);
//    ctx.stroke();
//    ctx.fill();
//}
//
//
//
//
//
//function bw() {
//    if (canvas.getContext) {
//    var ctx = canvas.getContext('2d');
//    ctx.beginPath();
//    grayScale(ctx, canvas);
//
//    }
//}
//
//function grayScale(context, canvas) {
//    var imgData = context.getImageData(0, 0, canvas.width, canvas.height);
//    var pixels  = imgData.data;
//    for (var i = 0, n = pixels.length; i < n; i += 4) {
//    var grayscale = pixels[i] * .3 + pixels[i+1] * .59 + pixels[i+2] * .11;
//    pixels[i  ] = grayscale;        // red
//    pixels[i+1] = grayscale;        // green
//    pixels[i+2] = grayscale;        // blue
//    }
//    context.putImageData(imgData, 0, 0);
//}
//
//
//
//
//function borrar() {
//    var ctx = canvas.getContext('2d');
//    ctx.closePath();
//    ctx.stroke();
//    ctx.beginPath();
//    ctx.clearRect(0, 0, canvas.width, canvas.height);
//}
//
//function exportar() {
//    // save canvas image as data url (png format by default)
//    var dataURL = canvas.toDataURL();
//
//    // set canvasImg image src to dataURL
//    // so it can be saved as an image
//    document.getElementById('canvasImg').src = dataURL;
//
//
////window.location.href=dataURL; // it will save locally
//}
