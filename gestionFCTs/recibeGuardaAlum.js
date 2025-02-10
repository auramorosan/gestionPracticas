const express = require("express");
const cors = require("cors");
//permite subir la foto
const multer = require("multer");

const app = express();
app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage });

let alumnos = [];

app.post("/alumnos", upload.single("foto_perfil"), (req, res) => {
    const alumno = {
        id_alumno: req.body.id_alumno,
        nombre_completo: req.body.nombre_completo,
        fecha_nacimiento: req.body.fecha_nacimiento,
        genero: req.body.genero,
        correo: req.body.correo,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        centro_educativo: req.body.centro_educativo,
        grado_curso: req.body.grado_curso,
        tutor: req.body.tutor,
        estado_alumno: req.body.estado_alumno,
        fecha_inscripcion: req.body.fecha_inscripcion,
        foto_perfil: req.file ? req.file.filename : null,
        notas_academicas: req.body.notas_academicas,
        observaciones: req.body.observaciones
    };

    alumnos.push(alumno);
    res.json({ mensaje: "Alumno guardado con éxito", alumno });
});

app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"));
