# Tienda Online – React + TypeScript

Aplicación web de **e-commerce** desarrollada con **React + TypeScript** que permite visualizar productos, filtrarlos por categoría y marca, agregarlos al carrito y realizar una compra simulada.

El proyecto incluye además un **panel de administración** para gestionar productos, marcas y categorías conectado a **Supabase**.

## Demo

https://tienda-react-typescript-dev.vercel.app/

---

# Tecnologías utilizadas

## Frontend
- React
- TypeScript
- CSS
- React Router
- Context API

## Backend / Servicios
- Supabase
- Supabase Auth
- Supabase Storage (para imágenes)

## Librerías
- React Bootstrap
- MathJS

---

# Funcionalidades

## Usuario

- Visualización de productos
- Filtro por:
  - categoría
  - marca
  - rango de precio
- Vista de detalle del producto
- Carrito de compras
- Agregar productos con cantidad
- Eliminación de productos del carrito
- Cálculo automático de totales
- Checkout simulado

---

## Panel de Administración

El panel permite administrar el contenido de la tienda.

### Gestión de Productos
- Crear productos
- Editar productos
- Eliminar productos
- Subir imágenes

### Gestión de Marcas
- Crear marcas
- Editar marcas
- Eliminar marcas

### Gestión de Categorías
- Crear categorías
- Editar categorías
- Eliminar categorías

 El acceso al panel está protegido mediante **autenticación con Supabase**.

---

# Responsive Design

La tienda está diseñada para funcionar correctamente en:

- Mobile
- Tablet
- Desktop

**El panel de administración está optimizado solo para PC** y no fue diseñado para dispositivos móviles.

---

# Arquitectura del Proyecto

El proyecto utiliza una arquitectura basada en **Context API** para manejar los estados globales.

## Contextos principales

### AuthContext
Gestiona:
- autenticación
- login
- logout
- usuario actual

### ProductsContext
Encargado de:
- obtener productos desde Supabase
- almacenar los productos globalmente

### CartContext
Gestiona:
- productos en el carrito
- cantidades
- totales
- checkout

### FilterContext
Maneja:
- filtros de marcas
- filtro de precio
- productos visibles

---

# Estructura del Proyecto
```
src
│
├── components
│ ├── AdminComponents
│ ├── Cart
│ ├── Detail
│ ├── FilterSidebar
│ ├── Header
│ ├── Footer
│ ├── Item
│ ├── ItemDetail
│ ├── ItemList
│ └── Login
│
├── context
│ ├── AuthContext
│ ├── CartContext
│ ├── FilterContext
│ └── ProductsContext
│
├── layouts
│ ├── AdminLayout
│ └── MainLayout
│
├── services
│ ├── brands
│ ├── categories
│ ├── products
│ └── uploadImage
│
├── types
│
├── utils
│ └── validations
│
└── App.tsx
```

---

# Rutas principales

## Tienda

/ -> lista de productos
/category/:category -> productos por categoría
/detail/:id -> detalle del producto
/carrito -> carrito de compras


## Panel de Administración

/admin -> login
/admin/panel/products -> gestionar productos
/admin/panel/brands -> gestionar marcas
/admin/panel/categories -> gestionar categorías

---

# Base de Datos (Supabase)

El proyecto utiliza las siguientes tablas:

### products

id
name
brand_id
category_id
price
description
image_url
stock
created_at


### brands

id
name
created_at


### categories

id
name
created_at


---

# Instalación

## Clonar el repositorio

git clone https://github.com/Gustavo-Caravajal/tienda-react-typescript.git