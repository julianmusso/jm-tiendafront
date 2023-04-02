# TiendaFront: eCommerce con API de WordPress 🛍️

¡Tienda Online construida con ServerSide Rendering con obtención de productos desde WooCommerce! 🏠🛋️🚪

## Descripción del proyecto

Este proyecto utiliza la API REST de WordPress para obtener información sobre productos y mostrarlos en una página web. La tienda online está construida utilizando React y NextJS en el frontend, y WordPress como CMS en el backend.

## Cómo usar este proyecto

1. Clona el repositorio en tu máquina local utilizando `git clone https://github.com/julianmusso/jm-tiendafront.git` 📥
2. Instala las dependencias utilizando `npm install` 📦
3. Crea un archivo `.env.local` en la raíz del proyecto y agrega la siguiente variable de entorno: `NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_KEY`, `NEXT_PUBLIC_WOOCOMMERCE_CONSUMER_SECRET` y la `URL de tu tienda de WordPress` 🔑
4. Ejecuta el servidor de desarrollo utilizando `npm run dev` 🏃
5. Visita `http://localhost:3000` en tu navegador para ver la tienda online 🌐

## Características del proyecto

- Muestra una lista de productos obtenidos de la API REST de WordPress 📦
- Permite filtrar productos por categoría 🗂️
- Permite buscar productos por nombre 🔍
- Permite ver detalles de un producto específico 🎫
- Permite añadir al carrito y hacer compras 🛒

## Tecnologías utilizadas

- React ⚛️
- NextJS
- Chakra UI
- WordPress

## Contribuyendo al proyecto

Si te gustaría contribuir al proyecto, ¡nos encantaría recibir tu ayuda! Simplemente realiza un fork del proyecto, haz tus cambios y envía una solicitud de pull. 
