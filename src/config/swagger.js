/**
 * Archivo Documentación Swagger
 */

import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "API de autenticación",
    description: "API para autenticación de usuarios con Node.js, Express",
  },
  host: "localhost:3000",
  schemes: ["http"],
};

const outputFile = "../swagger-output.json"; // Va a la carpeta src/
const endpointsFiles = ["../index.js"]; // Archivo index.js en src/

swaggerAutogen()(outputFile, endpointsFiles, doc).then(() => {
  console.log(
    "✅ Documentación Swagger generada exitosamente en src/swagger-output.json"
  );
  console.log("🚀 Ahora puedes ejecutar: pnpm run dev");
});
