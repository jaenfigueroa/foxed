// ESTE ES EL FORMATO-el id none se deb poner a la imagen

document.querySelector('.articulo').addEventListener('mouseover', darle);
document.querySelector('.articulo').addEventListener('mouseout',quitarle);

function darle() {
    document.getElementById('none').id = 'id-original';
    // window.setTimeout(document.querySelector('idoriginal').classList.add('animated'),1000);
}
function quitarle() {
    document.getElementById('id-original').id = 'none';
}


