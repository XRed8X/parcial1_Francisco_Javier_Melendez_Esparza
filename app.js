import mongoose from "mongoose";
import cors from "cors"
import express from "express"
import dotenv from "dotenv"
import { test } from "./controllers/alumno.controller.js";

dotenv.config() // Carga las variables de entorno

mongoose.connect(process.env.urlbase)
.then(() => console.log('Conectado a la base de datos')) // Si conecta nos muestra este mensaje

.catch(error => console.error('No fue posible conectarse a la DB', error)) // Si no conecta nos muestra el error

const app = express(); // Este es crea la app que se ejecuta
app.use(cors()); // Esto es para la seguridad del servidor

app.listen(4000), () => {
    console.log('Servidor ejecutandose en el puerto 4000')
}

test()