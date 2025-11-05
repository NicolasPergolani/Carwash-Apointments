# Deployment Guide - Render

## 📋 Configuración para Render

### Variables de Entorno Requeridas

Configura estas variables en el dashboard de Render:

```bash
# Server Configuration
PORT=3001
NODE_ENV=production

# Gateway URL for CORS
GATEWAY_API_URL=https://your-gateway-url.com

# MongoDB Atlas Configuration  
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/

# JWT Secret (if needed)
JWT_SECRET=your_super_secret_jwt_key_here

# Rate Limiting Configuration (opcional)
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### 🚀 Configuración de Render

1. **Tipo de Servicio**: Web Service
2. **Build Command**: `npm install`
3. **Start Command**: `npm start`
4. **Node Version**: 18+ (automático)
5. **Región**: Elige la más cercana a tu audiencia

### 📁 Estructura del Proyecto

```
appointments-api/
├── server.js          # Punto de entrada
├── app.js             # Configuración de Express
├── package.json       # Dependencias y scripts
├── config/
│   └── db.js          # Configuración de MongoDB
├── controllers/       # Lógica de negocio
├── models/           # Modelos de Mongoose
├── routes/           # Rutas de la API
├── services/         # Servicios
└── middlewares/      # Middlewares personalizados
```

### 🔧 Dependencias Optimizadas

**Producción:**
- `express` - Framework web
- `mongoose` - ODM para MongoDB con configuración optimizada
- `helmet` - Seguridad HTTP
- `cors` - Configurado para gateway
- `express-rate-limit` - Rate limiting configurable
- `compression` - Compresión gzip
- `morgan` - Logging (solo desarrollo)
- `joi` - Validación de datos
- `moment` - Manejo de fechas

### 🛡️ Características de Seguridad

- ✅ Helmet para headers de seguridad
- ✅ Rate limiting configurable
- ✅ CORS configurado para gateway
- ✅ Validación de entrada con Joi
- ✅ Error handling centralizado
- ✅ Configuración robusta de MongoDB

### 🔍 Health Check

Endpoint disponible en: `GET /health`

```json
{
  "status": "OK",
  "timestamp": "2025-11-05T10:30:00.000Z",
  "uptime": 3600.25,
  "service": "appointments-api"
}
```

### 📊 Logging y Monitoreo

- Morgan para logs de desarrollo
- Console logs estructurados
- Health check endpoint para monitoreo

### 🌐 Configuración de Gateway

El CORS está configurado para aceptar requests del gateway:
- Variable: `GATEWAY_API_URL`
- Por defecto apunta al gateway configurado
- Credentials habilitado para autenticación

### 🗃️ Base de Datos

MongoDB Atlas con configuración optimizada:
- Connection pooling (max 10 conexiones)
- Timeouts configurados
- Buffer deshabilitado para mejor rendimiento
- Auto-retry en conexiones fallidas

### 🚨 Troubleshooting

**Error de conexión a MongoDB:**
- Verificar `MONGO_URI` en variables de entorno
- Confirmar que IP de Render esté en whitelist de MongoDB Atlas
- Usar 0.0.0.0/0 para permitir todas las IPs en desarrollo

**CORS Issues:**
- Verificar `GATEWAY_API_URL` apunte al gateway correcto
- El gateway debe incluir credentials en requests si es necesario

**Rate Limiting:**
- Ajustar `RATE_LIMIT_MAX_REQUESTS` según necesidades
- Aumentar `RATE_LIMIT_WINDOW_MS` para ventanas más largas