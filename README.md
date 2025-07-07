# 📦 Ventas Frontend

Este es el proyecto frontend para el sistema de ventas. Fue desarrollado con **Vue 3**, **TypeScript** y **Axios**. Permite iniciar sesión y gestionar ventas a través de una API backend.

## 🚀 Tecnologías

- [Vue 3](https://vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/)
- [Vite](https://vitejs.dev/)

## Configuración

1. Clona el repositorio:

   ```
   git clone https://github.com/tu-usuario/ventas-frontend.git
   cd ventas-frontend
   ```

2. Instala las dependencias:

   ```
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```
   npm run dev
   ```

4. El frontend se ejecutará en:

   ```
   http://localhost:5173
   ```

## API Backend

1. Este proyecto consume una API disponible en:

   ```
   https://localhost:5001/api
   ```

2. Asegúrate de que el backend esté corriendo antes de probar la app.

## Autenticación

- Se utiliza JWT.
- El token se guarda en localStorage y se envía automáticamente con cada petición autenticada.

## Credenciales de prueba

```
Usuario: admin
Contraseña: 1234
```
