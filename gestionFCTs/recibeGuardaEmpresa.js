const express = require("express");
const cors = require("cors");
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

let empresas = [];

app.post("/empresas", upload.single("logo_empresa"), (req, res) => {
    const empresa = {
        id_empresa: req.body.id_empresa,
        nombre_empresa: req.body.nombre_empresa,
        razon_social: req.body.razon_social,
        tipo_empresa: req.body.tipo_empresa,
        nif_cif: req.body.nif_cif,
        correo: req.body.correo,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        ciudad: req.body.ciudad,
        codigo_postal: req.body.codigo_postal,
        pais: req.body.pais,
        fecha_constitucion: req.body.fecha_constitucion,
        sector: req.body.sector,
        num_empleados: req.body.num_empleados,
        sitio_web: req.body.sitio_web,
        logo_empresa: req.file ? req.file.filename : null,
        representante_legal: req.body.representante_legal,
        estado_empresa: req.body.estado_empresa,
        fecha_alta: req.body.fecha_alta,
        notas: req.body.notas
    };

    empresas.push(empresa);
    res.json({ mensaje: "Empresa guardada con éxito", empresa });
});

app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"));
