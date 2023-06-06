const fs = require('fs');
const express = require('express');

const app = express();

class ProductManager {
  constructor(path) {
    this.path = path; // Ruta del archivo de productos
    this.products = [];
    this.nextId = 1;
    this.loadProducts();
  }

  // Cargar productos desde el archivo al crear una instancia de ProductManager
  loadProducts() {
    try {
      const data = fs.readFileSync(this.path, 'utf-8'); // Leer el archivo de productos de manera síncrona
      this.products = JSON.parse(data); // Parsear los datos JSON y asignarlos a this.products

      if (Array.isArray(this.products)) {
        const lastProduct = this.products[this.products.length - 1];
        if (lastProduct) {
          this.nextId = lastProduct.id + 1; // Actualizar el ID siguiente disponible
        }
      } else {
        this.products = []; // Si el archivo no contiene un arreglo válido, se establece this.products como un arreglo vacío
      }
    } catch (error) {
      console.log('Error al cargar los productos:', error);
      this.products = []; // En caso de error, se establece this.products como un arreglo vacío
    }
  }

  // Guardar los productos en el archivo
  saveProducts() {
    try {
      const data = JSON.stringify(this.products, null, 2); // Convertir this.products a JSON con espacios en blanco adicionales
      fs.writeFileSync(this.path, data); // Escribir los datos en el archivo de manera síncrona
      console.log('Productos guardados exitosamente.');
    } catch (error) {
      console.log('Error al guardar los productos:', error);
    }
  }

  // Agregar un nuevo producto
  addProduct(product) {
    if (!this.isProductValid(product)) {
      console.log('Error: Datos del producto inválidos.');
      return;
    }

    if (this.isCodeDuplicate(product.code)) {
      console.log('Error: Ya existe un producto con el mismo código.');
      return;
    }

    const newProduct = {
      id: this.nextId++,
      title: product.title,
      description: product.description,
      price: product.price,
      thumbnail: product.thumbnail,
      code: product.code,
      stock: product.stock,
    };

    this.products.push(newProduct);
    console.log('Producto añadido exitosamente:', newProduct);
    this.saveProducts();
  }

  // Obtener todos los productos
  getProducts() {
    return this.products;
  }

  // Obtener un producto por su ID
  getProductById(id) {
    const product = this.products.find((p) => p.id === id);
    if (product) {
      return product;
    } else {
      console.log('Error: Producto no encontrado.');
    }
  }

  // Verificar si los datos del producto son válidos
  isProductValid(product) {
    return (
      product.title &&
      product.description &&
      product.price &&
      product.thumbnail &&
      product.code &&
      product.stock !== undefined
    );
  }

  // Verificar si hay un código de producto duplicado
  isCodeDuplicate(code) {
    return this.products.some((product) => product.code === code);
  }
}

const productManager = new ProductManager('./products.json');

// Endpoint para obtener todos los productos
app.get('/products', (req, res) => {
    const limit = req.query.limit;
    const products = productManager.getProducts();
  
    if (limit) {
      const limitedProducts = products.slice(0, limit);
      res.json(limitedProducts);
    } else {
      res.json(products);
    }
  });
  
  // Endpoint para obtener un producto por su ID
  app.get('/products/:pid', (req, res) => {
    const productId = parseInt(req.params.pid);
    const product = productManager.getProductById(productId);
  
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  });
  
  // Iniciar el servidor en el puerto 3000
  app.listen(3001, () => {
    console.log('Servidor express iniciado en el puerto 3001');
  });
  
  /*
     --> Para ver todos los productos: http://localhost:3001/products
     --> Para ver un producto específico (por ejemplo, ID 1): http://localhost:3001/products/1
  */