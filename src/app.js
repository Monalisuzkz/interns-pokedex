// src/app.js
import express from 'express';
import pokemonRoutes from './routes/pokemonRoutes.js';

const app = express();
app.use(express.json());
app.use('/api', pokemonRoutes);

export default app;