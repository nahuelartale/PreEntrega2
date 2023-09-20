const carritoContenido = document.getElementById('carrito-contenido');

function agregarProducto() {

    const productoAgregado = document.createElement('div');
    productoAgregado.className = 'producto';


    const imgProducto = document.createElement('img');
    imgProducto.src = document.querySelector('.producto img').src;
    imgProducto.alt = 'Producto';


    productoAgregado.appendChild(imgProducto);

    const trollBtn = document.createElement('button');
    trollBtn.className = 'troll-btn';
    trollBtn.innerText = 'Eliminar';
    trollBtn.addEventListener('click', moverTrollBtn);

    productoAgregado.appendChild(trollBtn);
    carritoContenido.appendChild(productoAgregado);
}

function moverTrollBtn(event) {
    const trollBtn = event.target;
    const randomX = Math.random() * 200; 
    const randomY = Math.random() * 200; 
    trollBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}