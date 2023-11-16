// Crea una variable lienzo
let canvas = new fabric.Canvas("myCanvas");

block_y = 1;
block_x = 1;

block_image_width = 350;
block_image_height = 480;

var block_object_image = "";

// Completa la función nueva_imagen() para agregar una nueva imagen
function nueva_imagen(get_image) {
	fabric.Image.fromURL(get_image, function (Img) {
		block_object_image = Img;
		block_object_image.scaleToWidth(block_image_width);
		block_object_image.set({ top: block_y, left: block_x });
		canvas.add(block_object_image);
	});
}

window.addEventListener("keydown", my_keyDown);

function my_keyDown(e) {
	keyDown = e.keyCode;
	console.log(keyDown);
	// Usa el código de tecla apropiado para agregar la imagen roja
	if (keyDown == '82') {
		block_x = 10;
		nueva_imagen('rojo.png');
		console.log('R');
	}
	if (keyDown == '71') {
		block_x = 310;
		nueva_imagen('verde.png');
		console.log('G');
	}
	if (keyDown == '89') {
		block_x = 560;
		nueva_imagen('amarillo.png');
		console.log('Y');
	}
	if (keyDown == '80') {
		block_x = 880;
		nueva_imagen('rosa.png');
		console.log('P');
	}
	if (keyDown == '66') {
		block_x = 1040;
		nueva_imagen('azul.png');
		console.log('B');
	}
}
