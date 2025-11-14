### Frontend - DevChallenge3

Este frontend está construido con React + Vite y se conecta al backend
mediante Socket.IO.

------------------------------------------------------------------------

### 🚀 Scripts disponibles

Dentro del directorio frontend/ puedes ejecutar:

npm install

Instala todas las dependencias necesarias.

npm run dev

Inicia el servidor de desarrollo en:

    http://localhost:5173

npm run build

Construye la versión de producción.

npm run preview

Previsualiza el build de producción.

------------------------------------------------------------------------

### 📂 Estructura del proyecto

    frontend/
     ├── src/
     │   ├── api/
     │   │   └── socket.ts
     │   ├── components/
     │   │   ├── Lobby.tsx
     │   │   ├── Match.tsx
     │   │   └── Scoreboard.tsx
     │   ├── App.tsx
     │   ├── main.tsx
     │   └── index.css
     ├── package.json
     ├── vite.config.ts
     └── README.txt

------------------------------------------------------------------------

### 🔌 Conexión con el backend

El frontend se conecta automáticamente al backend configurado en:

    http://localhost:4000

A través de Socket.IO (socket.ts).

------------------------------------------------------------------------

### 🏆 Scoreboard

El componente Scoreboard.tsx obtiene datos desde:

    GET http://localhost:4000/api/leaderboard

Si aparece un error de CORS, verifica que el backend tenga activado:

    app.use(cors({
        origin: 'http://localhost:5173'
    }));

------------------------------------------------------------------------

### 💡 Requisitos

-   Node.js v16+
-   NPM o PNPM
-   Backend activo en puerto 4000

------------------------------------------------------------------------

### ✨ Notas

Este frontend está diseñado para trabajar con el backend del mismo
proyecto, incluyendo: - matchmaking - rondas - scoreboard - comunicación
en tiempo real.
