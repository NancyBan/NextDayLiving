// Obtener referencias a los elementos
const area1 = document.getElementById('area1');
const area2 = document.getElementById('area2');
const gif1 = document.getElementById('gif1');
const gif2 = document.getElementById('gif2');

// Verificar que los elementos existan
if (!area1 || !area2 || !gif1 || !gif2) {
    console.error('No se encontraron todos los elementos necesarios');
    return;
}

area1.addEventListener('click', () => {
    if (gif1.style.display === 'block') {
        gif1.style.display = 'none';
    } else {
        gif1.style.display = 'block';
        gif1.style.left = '50px';
        gif1.style.top = '150px';
        gif2.style.display = 'none';
    }
});

area2.addEventListener('click', () => {
    if (gif2.style.display === 'block') {
        gif2.style.display = 'none';
    } else {
        gif2.style.display = 'block';
        gif2.style.left = '200px';
        gif2.style.top = '150px';
        gif1.style.display = 'none';
    }
});