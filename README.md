# Backend e-commerce "Limonero - Decoración para niños"
Desarrolo de un E-commerce funcional, realizado con Node.js, Express y MongoDB, con un servicio de autenticación y conectado con una pasarela de pago. Testeado con Mocha, Chai y Supertest. Documentado con Swagger.

## Características:
- Servicio de autenticación y autorización que incluye registro de usuarios, inicio y cierre de sesión, cambio de contraseña y cambio de rol entre usuario normal y premium.
- Utilización de Passport y JWT para el servicio de autenticación.
- Aplicación de arquitectura por capas, DAO, DTO y Repository.
- Rol de administrador con permisos elevados.
- Acceso a los productos a través de base de datos de MongoDB.
- Paginación de productos.
- Almacenamiento en base de datos de usuarios, productos, carritos y tickets de compra.
- Servicio de mailing. Se recibe un email al registrar un usuario, al solicitar un cambio de contraseña y al eliminarse un producto de un usuario premium. 
- Tests unitarios y de integración con Mocha, Chai y Supertest.
- Documentación de la API realizada con Swagger.


## Created with:
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)  
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![Mocha](https://img.shields.io/badge/-mocha-%238D6748?style=for-the-badge&logo=mocha&logoColor=white) ![Chai](https://img.shields.io/badge/chai.js-323330?style=for-the-badge&logo=chai&logoColor=red) ![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white) 


## Created with:
-npm start  --> inicio comun con node
-npm dev --> inicio desarrollador con nodemon



## Endpoints:
"/api/products",
"/api/cart",
"/api/session",
"/api/users"

Endpoint de las vistas:
"/messages",
"/products",
"/cart",
"/session",
"/loggerTest",
"/users"
