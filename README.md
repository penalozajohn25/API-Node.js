# API Node.js

Aplicación Rest Full creada con Node.js, Express y contenedor Docker con Postgres.js. Permite realizar operaciones CRUD sobre usuarios, productos, clientes y categorias. 

### Requisitos

```
Node.js v18 o superior
Docker
npm
Postman/Insomia
```

### Estructura del Proyecto

```
bookhub-api/
├── src/
│   ├── config/          # Configuraciones (DB, JWT, etc.)
│   ├── controllers/     # Lógica de controladores
│   ├── middleware/      # Middlewares personalizados
│   ├── models/          # Modelos de Mongoose
│   ├── routes/          # Definición de rutas
│   ├── schemas/         # Esquemas de validación Joi
│   ├── services/        # Lógica de negocio
│   ├── utils/           # Utilidades y helpers
│   ├── app.js           # Configuración de Express
│   └── server.js        # Punto de entrada
├── tests/               # Pruebas unitarias e integración
├── docs/                # Documentación adicional
├── .env.example         # Variables de entorno ejemplo
├── .gitignore
├── package.json
└── README.md
```

### Instalación

```
git clone https://github.com/penalozajohn25/API-Node.js.git
cd API-Node.js
npm install
```
Configurar variables de entorno:
```
cp .env
```

Editar el archivo .env con tus configuraciones:
```
PORT=3000
DB_USER='john'
DB_PASSWORD='admin1234'
DB_HOST='localhost'
DB_NAME='my_api'
DB_PORT='5432'

# PORT=3000
# DB_USER='root'
# DB_PASSWORD='admin1234'
# DB_HOST='localhost'
# DB_NAME='my_api'
# DB_PORT='3306'

```

### Inicialización de la Base de Datos

```
docker-compose up -d postgres
```

### Inicialización de PgAdmin

```
docker-compose up -d pgadmin
```

### Ejecutar Migraciones

```
npm run migrations:run
```

### Iniciar el Servidor

```
npm run dev
```

## Enpoints Principales

### Usuarios

| Método                | Enpoint                     | Descripcíon                  |
| --------------------- | --------------------------- | ---------------------------- |
| GET                   | api/v1/users                | Obtener todos los usuarios   |
| --------------------- | --------------------------- | ---------------------------- |
| GET                   | api/v1/users/:id            | Obtener un usuario por id    |
| --------------------- | --------------------------- | ---------------------------- |
| POST                  | api/v1/users                | Crear un nuevo usuario       |
| --------------------- | --------------------------- | ---------------------------- |
| PATCH                 | api/v1/users                | Actualiza un usuario         |
| --------------------- | --------------------------- | ---------------------------- |
| DELETE                | api/v1/users/:id            | ELIMINAR un usuario          |

### Productos

| Método                | Enpoint                     | Descripcíon                  |
| --------------------- | --------------------------- | ---------------------------- |
| GET                   | api/v1/products             | Obtener todos los productos  |
| --------------------- | --------------------------- | ---------------------------- |
| GET                   | api/v1/products/:id         | Obtener un productos por id  |
| --------------------- | --------------------------- | ---------------------------- |
| POST                  | api/v1/products             | Crear un nuevo productos     |
| --------------------- | --------------------------- | ---------------------------- |
| PATCH                 | api/v1/products             | Actualiza un producto        |
| --------------------- | --------------------------- | ---------------------------- |
| DELETE                | api/v1/products             | ELIMINAR un producto         |

### Categorias

| Método                | Enpoint                     | Descripcíon                  |
| --------------------- | --------------------------- | ---------------------------- |
| GET                   | api/v1/products             | Obtener todos los productos  |
| --------------------- | --------------------------- | ---------------------------- |
| GET                   | api/v1/products/:id         | Obtener un productos por id  |
| --------------------- | --------------------------- | ---------------------------- |
| POST                  | api/v1/products             | Crear un nuevo productos     |
| --------------------- | --------------------------- | ---------------------------- |
| PATCH                 | api/v1/products             | Actualiza un producto        |
| --------------------- | --------------------------- | ---------------------------- |
| DELETE                | api/v1/products             | ELIMINAR un producto         |


### Clientes

| Método                | Enpoint                     | Descripcíon                  |
| --------------------- | --------------------------- | ---------------------------- |
| GET                   | api/v1/clients              | Obtener todos los clientes   |
| --------------------- | --------------------------- | ---------------------------- |
| GET                   | api/v1/clients/:id          | Obtener un cliente por id    |
| --------------------- | --------------------------- | ---------------------------- |
| POST                  | api/v1/clients              | Crear un nuevo cliente       |
| --------------------- | --------------------------- | ---------------------------- |
| PATCH                 | api/v1/clients              | Actualiza un cliente         |
| --------------------- | --------------------------- | ---------------------------- |
| DELETE                | api/v1/clients              | ELIMINAR un cliente          |


## Autor

* **John M. Peñaloza Parada** - *GitHub* - https://github.com/penalozajohn25