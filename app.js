import express from 'express';
import { connectToDatabase } from './src/config/db.js';
import { router, taskRouter } from './src/routes/TaskRoute.js';

const app = express();
const PORT = 3000;

app.use(express.json());
// Routes pour les tâches
app.use(router);

connectToDatabase();

app.listen(PORT, () => {
    console.log(`Serveur démarré sur ${PORT}`);
});
