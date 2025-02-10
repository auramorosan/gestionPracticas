//Recibe los datos y guarda el alumno en memoria (modificar para guardar en una BD).
document.getElementById("alumnoForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Evita recargar la página

    const formData = new FormData();
    formData.append("id_alumno", document.getElementById("id_alumno").value);
    formData.append("nombre_completo", document.getElementById("nombre_completo").value);
    formData.append("fecha_nacimiento", document.getElementById("fecha_nacimiento").value);
    formData.append("genero", document.getElementById("genero").value);
    formData.append("correo", document.getElementById("correo").value);
    formData.append("telefono", document.getElementById("telefono").value);
    formData.append("direccion", document.getElementById("direccion").value);
    formData.append("centro_educativo", document.getElementById("centro_educativo").value);
    formData.append("grado_curso", document.getElementById("grado_curso").value);
    formData.append("tutor", document.getElementById("tutor").value);
    formData.append("estado_alumno", document.getElementById("estado_alumno").value);
    formData.append("fecha_inscripcion", document.getElementById("fecha_inscripcion").value);
    formData.append("foto_perfil", document.getElementById("foto_perfil").files[0]);
    formData.append("notas_academicas", document.getElementById("notas_academicas").value);
    formData.append("observaciones", document.getElementById("observaciones").value);

    try {
        const respuesta = await fetch("http://localhost:3000/alumnos", {
            method: "POST",
            body: formData
        });

        const resultado = await respuesta.json();
        document.getElementById("mensaje").innerText = resultado.mensaje;
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("mensaje").innerText = "Error al guardar el alumno.";
    }
});
