# 📈 Proyecto Express.js con MongoDB
Universidad Galileo
Tecnico en Desarrollo de Software
Programacion Avanzada

Este es un proyecto de API REST con Node.js, Express y MongoDB. 
Aquí encontrarás las instrucciones para instalar y ejecutar la aplicación en tu entorno local.

---

## 🚀 1. Requisitos previos

Antes de iniciar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (v18 o superior)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) o una instancia local de MongoDB
- [Git](https://git-scm.com/)
- [Postman](https://www.postman.com/) o cualquier herramienta para probar APIs

---

## 🛠 2. Instalación

Clona este repositorio en tu máquina local:

```sh
git clone https://github.com/jonalex2020/ejemplo-proyecto.git
cd ejemplo-proyecto
```

Instala las dependencias del proyecto:

```sh
npm install
```

---

## ⚙ 3. Configuración de la Base de Datos (MongoDB)

### 📌 Conexión a MongoDB Atlas

1. **Crea una cuenta en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)**
2. **Configura un clúster gratuito**
3. **Obtén la cadena de conexión (URI)**  
   - Ve a **Database > Connect > Connect your application** y copia el **MongoDB URI**.

### 📌 Configurar variables de entorno

1. Crea un archivo `.env` en la raíz del proyecto:
2. Agrega la siguiente configuración:

```sh
MONGO_URI=mongodb+srv://jonalexmerida:%40L3x%40nd3rm3r1d408101986%C3%B1@cluster0.qgzox.mongodb.net/habitosApp?retryWrites=true&w=majority&appName=Cluster0

PORT=3000
```

💡 **Importante**:  
Si tu contraseña tiene caracteres especiales (`@`, `ñ`, `%`), usa un [encoder de URL](https://www.urlencoder.org/) antes de agregarla.

---

## ▶ 4. Ejecutar el Proyecto

Para iniciar el servidor en modo desarrollo:

```sh
npm start
```

Si usas **nodemon**, ejecuta:

```sh
npm run dev
```

El servidor correrá en:

```
http://localhost:3000
```

---

## 🛠 5. Endpoints de la API

### 📍 📌 Crear un nuevo hábito (POST)
```http
POST /habits
```
#### **📌 Body en JSON**
```json
{
    "name": "Hacer ejercicio",
    "description": "Correr 30 minutos",
    "frequency": 7,
    "duration": 30,
    "priority": 1,
    "completed": false
}
```

---

### 📍 📌 Obtener todos los hábitos (GET)
```http
GET /habits
```

---

## 🛡 6. Autenticación (Opcional)
Si la API requiere autenticación, usa **JWT** o tokens de sesión.

---

## 📝 7. Contribuir al Proyecto

1. **Haz un fork** del repositorio.
2. Crea una nueva rama (`git checkout -b feature-nueva-funcionalidad`).
3. Realiza tus cambios y **haz commit** (`git commit -m "Añadiendo nueva funcionalidad"`).
4. **Sube tu rama** (`git push origin feature-nueva-funcionalidad`).
5. Abre un **Pull Request** en GitHub.

---

## 📚 8. Licencia

Este proyecto está bajo la licencia **MIT**. Puedes modificarlo y usarlo libremente. 😊

