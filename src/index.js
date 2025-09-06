import express from "express";
import { config } from "dotenv";
import router from "./router/index.js";

config("path", "../.env");

const PORT = process.env.PORT || 1000;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bienvenido a mi API autenticación con Node.js y Express");
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
