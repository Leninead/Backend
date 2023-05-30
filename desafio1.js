// class ProductManager {
//     constructor() {
//       this.products = []; // Arreglo para almacenar los productos
//       this.nextId = 1; // Variable para generar IDs autoincrementales
//     }
  
//     // Método para agregar un producto al arreglo de productos
//     addProduct(product) {
//       if (!this.isProductValid(product)) {
//         console.log("Error: Data del producto invalido."); // Verificar si los datos del producto son válidos
//         return;
//       }
  
//       if (this.isCodeDuplicate(product.code)) {
//         console.log("Error: Producto con el mismo Code ya existe."); // Verificar si ya existe un producto con el mismo código
//         return;
//       }
  
//       const newProduct = {
//         id: this.nextId++, // Generar un nuevo ID autoincremental
//         title: product.title,
//         description: product.description,
//         price: product.price,
//         thumbnail: product.thumbnail,
//         code: product.code,
//         stock: product.stock,
//       };
  
//       this.products.push(newProduct); // Agregar el nuevo producto al arreglo de productos
//       console.log("Producto añadido exitosamente:", newProduct);
//     }
  
//     // Método para obtener todos los productos
//     getProducts() {
//       return this.products;
//     }
  
//     // Método para obtener un producto por su ID
//     getProductById(id) {
//       const product = this.products.find((p) => p.id === id); // Buscar el producto por su ID
//       if (product) {
//         return product;
//       } else {
//         console.log("Error: Producto no encontrado."); // Mostrar error si no se encuentra el producto
//       }
//     }
  
//     // Método para validar si los datos del producto son válidos
//     isProductValid(product) {
//       return (
//         product.title && // Verificar que el título esté presente
//         product.description && // Verificar que la descripción esté presente
//         product.price && // Verificar que el precio esté presente
//         product.thumbnail && // Verificar que la ruta de imagen esté presente
//         product.code && // Verificar que el código esté presente
//         product.stock !== undefined // Verificar que el stock esté definido
//       );
//     }
  
//     // Método para verificar si existe un producto con el mismo código
//     isCodeDuplicate(code) {
//       return this.products.some((product) => product.code === code);
//     }
//   }
  
//   // Ejemplo de uso:
//   const productManager = new ProductManager();
  
//   // Agregar productos al ProductManager
//   productManager.addProduct({
//     title: "Producto 1",
//     description: "Guitarra Squier By Fender Stratocaster Bullet Frd",
//     price: 194.999,
//     thumbnail: "/path/to/image1.jpg",
//     code: "ABC123",
//     stock: 3,
//   });
  
//   productManager.addProduct({
//     title: "Producto 2",
//     description:
//       "Guitarra eléctrica Fender Player Stratocaster de aliso 3-color sunburst brillante con diapasón de granadillo brasileño",
//     price: 688.999,
//     thumbnail: "/path/to/image2.jpg",
//     code: "DEF456",
//     stock: 4,
//   });
  
//   productManager.addProduct({
//     title: 'Producto 3',
//     description: 'Bajo Eléctrico Fender Squier Classic Vibe 70 Precision Bass',
//     price: 415.999,
//     thumbnail: '/path/to/image3.jpg',
//     code: 'TED741',
//     stock: 6
//   });
  
//   productManager.addProduct({
//     title: 'Producto 4',
//     description: 'Bajo Eléctrico Fender Squier Affinity Bronco Bass Maple Bck',
//     price: 202.799,
//     thumbnail: '/path/to/image4.jpg',
//     code: 'ERD784',
//     stock: 5
//   });
  
//   productManager.addProduct({
//     title: 'Producto 5',
//     description: 'Taurus Mfp410 Bateria Jazz Maple 4 Cuerpos 18 12 14 Redo 14',
//     price: 270.836,
//     thumbnail: '/path/to/image5.jpg',
//     code: 'SD258S',
//     stock: 4
//   });
  
//   productManager.addProduct({
//     title: 'Producto 6',
//     description: 'Batería Pearl 5 Cpos Export Laquer',
//     price: 390.972,
//     thumbnail: '/path/to/image6.jpg',
//     code: 'TSF345',
//     stock: 2
//   });
  
  
  
  
//   // Obtener todos los productos
//   console.log("Todos los Productos:", productManager.getProducts());
  
//   // Intentar obtener un producto con un ID no existente
//   const productId = 10;
//   const product = productManager.getProductById(productId);
  
//   if (!product) {
//     console.log(`Error: Producto con ID ${productId} no se encontró.`);
//   }