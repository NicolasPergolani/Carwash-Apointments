# appointments-api

Una API REST para gestión de citas de lavado de autos construida con Node.js, Express y MongoDB.

## Características

- Autenticación y autorización con JWT
- CRUD completo de citas
- Middleware de seguridad
- Validación de datos
- Manejo de errores

## Tecnologías

- **Backend**: Node.js, Express.js
- **Base de datos**: MongoDB con Mongoose
- **Autenticación**: JWT (JSON Web Tokens)

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/NicolasPergolani/Carwash-Apointments.git
cd appointments-api
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
```bash
cp .env.example .env
# Edita el archivo .env con tus configuraciones
```

4. Inicia el servidor:
```bash
npm start
```

## Scripts disponibles

- `npm start` - Inicia el servidor en producción
- `npm run dev` - Inicia el servidor en modo desarrollo

## API Endpoints

### Citas
- `GET /api/appointments` - Obtener mis citas (requiere autenticación)
- `POST /api/appointments` - Crear cita (requiere autenticación)
- `GET /api/appointments/all` - Obtener todas las citas (requiere admin)
- `GET /api/appointments/user/:userId` - Obtener citas de un usuario (requiere admin)
- `DELETE /api/appointments/cancel/:id` - Cancelar cita (requiere autenticación)
- `DELETE /api/appointments/:id` - Eliminar cita (requiere admin)
- `PUT /api/appointments/:id` - Actualizar cita (requiere admin)

## Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia ISC
