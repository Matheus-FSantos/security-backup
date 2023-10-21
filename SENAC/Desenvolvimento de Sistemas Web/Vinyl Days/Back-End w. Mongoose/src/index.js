import "dotenv/config";
import cors from "cors";
import express from "express";

/* Routes */
import { routes } from "./routes/routes.js";

/* Database Configuration */
import * as DatabaseConnection from "./database/conection.database.js";

const app = express();
const PORT = process.env.SERVER_PORT;

DatabaseConnection.main();

app.use(cors()); 
app.use("/api", routes); //recebe todas as rotas.

app.listen(PORT, () => console.log(`Server UP on port ${PORT} 🚀🚀🚀`));