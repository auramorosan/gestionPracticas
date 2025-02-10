const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();
const PORT = 3000;

// Configuración de almacenamiento para los archivos
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let profesores = []; // Simulación de base de datos en memoria

// Ruta para guardar un profesor
app.post("/profesores", upload.single("foto_perfil"), (req, res) => {
    const profesor = {
        nombre_completo: req.body.nombre_completo,
        numero_identificacion: req.body.numero_identificacion,
        correo: req.body.correo,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        fecha_nacimiento: req.body.fecha_nacimiento,
        genero: req.body.genero,
        rol: req.body.rol,
        departamento: req.body.departamento,
        tipo_contrato: req.body.tipo_contrato,
        fecha_ingreso: req.body.fecha_ingreso,
        estado_profesor: req.body.estado_profesor,
        notas: req.body.notas,
        contraseña: req.body.contraseña,
        centro: req.body.centro,
        foto_perfil: req.file ? req.file.buffer.toString("base64") : null
    };

    profesores.push(profesor);
    res.json({ mensaje: "Profesor guardado con éxito", profesor });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
