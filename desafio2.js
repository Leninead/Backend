// const fs = require("fs");

// class ProductManager {
//   constructor(path) {
//     this.path = path; // Ruta del archivo de productos
//     this.products = []; // Arreglo para almacenar los productos
//     this.nextId = 1; // ID siguiente disponible
//     this.loadProducts(); // Cargar productos desde el archivo
//   }

//   loadProducts() {
//     try {
//       const data = fs.readFileSync(this.path, "utf-8"); // Leer el archivo de productos
//       this.products = JSON.parse(data); // Parsear los datos JSON y asignarlos a this.products

//       if (Array.isArray(this.products)) {
//         const lastProduct = this.products[this.products.length - 1];
//         if (lastProduct) {
//           this.nextId = lastProduct.id + 1; // Actualizar el ID siguiente disponible
//         }
//       } else {
//         this.products = []; // Si el archivo no contiene un arreglo válido, se establece this.products como un arreglo vacío
//       }
//     } catch (error) {
//       console.log("Error al cargar los productos:", error);
//       this.products = []; // En caso de error, se establece this.products como un arreglo vacío
//     }
//   }

//   saveProducts() {
//     try {
//       const data = JSON.stringify(this.products, null, 2); // Convertir this.products a JSON con espacios en blanco adicionales
//       fs.writeFileSync(this.path, data); // Escribir los datos en el archivo
//       console.log("Productos guardados exitosamente.");
//     } catch (error) {
//       console.log("Error al guardar los productos:", error);
//     }
//   }

//   addProduct(product) {
//     if (!this.isProductValid(product)) {
//       console.log("Error: Datos del producto inválidos.");
//       return;
//     }

//     if (this.isCodeDuplicate(product.code)) {
//       console.log("Error: Ya existe un producto con el mismo código.");
//       return;
//     }

//     const newProduct = {
//       id: this.nextId++, // Asignar un ID autoincrementable
//       title: product.title,
//       description: product.description,
//       price: product.price,
//       thumbnail: product.thumbnail,
//       code: product.code,
//       stock: product.stock,
//     };

//     this.products.push(newProduct); // Agregar el nuevo producto al arreglo
//     console.log("Producto añadido exitosamente:", newProduct);
//     this.saveProducts(); // Guardar los cambios en el archivo
//   }

//   getProducts() {
//     return this.products; // Devolver todos los productos
//   }

//   getProductById(id) {
//     const product = this.products.find((p) => p.id === id); // Buscar el producto por ID
//     if (product) {
//       return product; // Devolver el producto encontrado
//     } else {
//       console.log("Error: Producto no encontrado.");
//     }
//   }

//   updateProduct(id, updatedFields) {
//     const productIndex = this.products.findIndex((p) => p.id === id); // Buscar el índice del producto por ID
//     if (productIndex !== -1) {
//       const updatedProduct = {
//         ...this.products[productIndex],
//         ...updatedFields,
//       }; // Actualizar el producto con los nuevos campos
//       this.products[productIndex] = updatedProduct; // Reemplazar el producto en el arreglo
//       console.log("Producto actualizado:", updatedProduct);
//       this.saveProducts(); // Guardar los cambios en el archivo
//     } else {
//       console.log("Error: Producto no encontrado.");
//     }
//   }

//   deleteProduct(id) {
//     const productIndex = this.products.findIndex((p) => p.id === id); // Buscar el índice del producto por ID
//     if (productIndex !== -1) {
//       const deletedProduct = this.products.splice(productIndex, 1)[0]; // Eliminar el producto del arreglo y obtenerlo
//       console.log("Producto eliminado:", deletedProduct);
//       this.saveProducts(); // Guardar los cambios en el archivo
//     } else {
//       console.log("Error: Producto no encontrado.");
//     }
//   }

//   isProductValid(product) {
//     return (
//       product.title &&
//       product.description &&
//       product.price &&
//       product.thumbnail &&
//       product.code &&
//       product.stock !== undefined
//     );
//   }

//   isCodeDuplicate(code) {
//     return this.products.some((product) => product.code === code); // Verificar si existe un producto con el mismo código
//   }
//  }
//  const productManager = new ProductManager("./products.json"); // Crear una instancia de ProductManager y especificar el archivo de productos
//  productManager.addProduct({
//   title: "Producto 1",
//   description: "Guitarra Squier By Fender Stratocaster Bullet Frd",
//   price: 194.999,
//   thumbnail: "/path/to/image1.jpg",
//   code: "ABC123",
//   stock: 3,
//  });

//  productManager.addProduct({
//   title: "Producto 2",
//   description:
//     "Guitarra eléctrica Fender Player Stratocaster de aliso 3-color sunburst brillante con diapasón de granadillo brasileño",
//   price: 688.999,
//   thumbnail: "/path/to/image2.jpg",
//   code: "DEF456",
//   stock: 4,
//  });

// productManager.addProduct({
//   title: "Producto 3",
//   description: "Bajo Eléctrico Fender Squier Classic Vibe 70 Precision Bass",
//   price: 415.999,
//   thumbnail: "/path/to/image3.jpg",
//   code: "TED741",
//   stock: 6,
// });

// productManager.addProduct({
//   title: "Producto 4",
//   description: "Bajo Eléctrico Fender Squier Affinity Bronco Bass Maple Bck",
//   price: 202.799,
//   thumbnail: "/path/to/image4.jpg",
//   code: "ERD784",
//   stock: 5,
// });

// productManager.addProduct({
//   title: "Producto 5",
//   description: "Taurus Mfp410 Bateria Jazz Maple 4 Cuerpos 18 12 14 Redo 14",
//   price: 270.836,
//   thumbnail: "/path/to/image5.jpg",
//   code: "SD258S",
//   stock: 4,
// });

// productManager.addProduct({
//   title: "Producto 6",
//   description: "Batería Pearl 5 Cpos Export Laquer",
//   price: 390.972,
//   thumbnail: "/path/to/image6.jpg",
//   code: "TSF345",
//   stock: 2,
// });


// Necesito cumplas con esta consigna totalmente.                                                                                         Servidor con express   Consigna
// Consigna
// Desarrollar un servidor basado en express donde podamos hacer consultas a nuestro archivo de productos.
// Aspectos a incluir

// Se deberá utilizar la clase ProductManager que actualmente utilizamos con persistencia de archivos. 
// Desarrollar un servidor express que, en su archivo app.js importe al archivo de ProductManager que actualmente tenemos.
// El servidor debe contar con los siguientes endpoints:
// ruta ‘/products’, la cual debe leer el archivo de productos y devolverlos dentro de un objeto agregar el soporte para recibir por query param el valor ?limit= el cual recibirá un límite de resultados.
// Si no se recibe query de límite, se devolverán todos los productos
// Si se recibe un límite, sólo devolver el número de productos solicitados ruta ‘/products/:pid’, la cual debe recibir por req.params el pid (product Id), y devolver sólo el producto solicitado, en lugar de todos los productos.   Formato del entregable
// Link al repositorio de Github con el proyecto completo, el cual debe incluir:
// carpeta src con app.js dentro y tu ProductManager dentro.
// package.json con la info del proyecto.
// NO INCLUIR LOS node_modules generados.
// La consgina debe incorporarse en este codigo que te voy a pasar const fs = require('fs');
