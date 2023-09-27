 // Clase constructora para Productos
 class Producto {
  constructor(nombre, precio, imagen) {
      this.nombre = nombre;
      this.precio = precio;
      this.imagen = imagen;
  }
}

// Clase constructora para el Carrito de Compras
class Carrito {
  constructor() {
      this.productos = [];
      this.total = 0;
  }

  agregarProducto(producto, imagen) {
      producto.imagen = imagen; 
      this.productos.push(producto);
      this.total += producto.precio;
  }

  eliminarProducto(index) {
      const productoEliminado = this.productos.splice(index, 1)[0];
      this.total -= productoEliminado.precio;
  }
}

const carrito = new Carrito(); // Instancia del carrito

// Crear productos y agregarlos al carrito
const productos = [
  new Producto('Ferrari', 200, './imagenes/ferrari.jpg'), 
  new Producto('Lambo', 100, './imagenes/lambo.jpg'), 
  new Producto('Macho Car', 999, './imagenes/macho-car.jpg'),
  new Producto('Porsche', 250, './imagenes/porsche.jpg')  
];

// Función para crear los contenedores de productos y agregarlos al DOM
function crearContenedoresProductos(productos) {
  const productosContainer = document.getElementById('productos-container');
  productos.forEach((producto, index) => {
      const productoContainer = document.createElement('div');
      productoContainer.className = 'producto';

      const img = document.createElement('img');
      img.src = producto.imagen; 
      img.alt = producto.nombre;
      productoContainer.appendChild(img);

      const h2 = document.createElement('h2');
      h2.textContent = producto.nombre;
      productoContainer.appendChild(h2);

      const p = document.createElement('p');
      p.textContent = `Precio: $${producto.precio}`;
      productoContainer.appendChild(p);

      const button = document.createElement('button');
      button.textContent = 'Agregar al carrito';
      button.addEventListener('click', () => {
          carrito.agregarProducto(producto, img.src);
          actualizarCarrito();
      });
      productoContainer.appendChild(button);

      productosContainer.appendChild(productoContainer);
  });
}

// Función para actualizar el carrito
function actualizarCarrito() {
  const carritoLista = document.getElementById('carrito');
  const totalElemento = document.getElementById('total');

  // Limpiar el carrito actual
  carritoLista.innerHTML = '';

  // Recorrer los productos en el carrito
  carrito.productos.forEach((producto, index) => {
      const listItem = document.createElement('li');

      const img = document.createElement('img');
      img.src = producto.imagen; 
      img.alt = producto.nombre;
      listItem.appendChild(img);

      const textoProducto = document.createElement('div');
      textoProducto.textContent = `${producto.nombre} - $${producto.precio}`;
      listItem.appendChild(textoProducto);

      const eliminarButton = document.createElement('button');
      eliminarButton.className = 'eliminar-button';
      eliminarButton.textContent = 'Eliminar';
      eliminarButton.addEventListener('click', () => {
          carrito.eliminarProducto(index);
          actualizarCarrito();
      });
      listItem.appendChild(eliminarButton);

      carritoLista.appendChild(listItem);
  });

  // Actualizar el total
  totalElemento.textContent = `Total: $${carrito.total}`;
}

// Inicializar la página
crearContenedoresProductos(productos);
actualizarCarrito();