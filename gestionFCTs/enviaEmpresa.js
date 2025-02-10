//captura datos y los envia al backend
document.getElementById("empresaForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Evita recargar la página

    const formData = new FormData();
    formData.append("id_empresa", document.getElementById("id_empresa").value);
    formData.append("nombre_empresa", document.getElementById("nombre_empresa").value);
    formData.append("razon_social", document.getElementById("razon_social").value);
    formData.append("tipo_empresa", document.getElementById("tipo_empresa").value);
    formData.append("nif_cif", document.getElementById("nif_cif").value);
    formData.append("correo", document.getElementById("correo").value);
    formData.append("telefono", document.getElementById("telefono").value);
    formData.append("direccion", document.getElementById("direccion").value);
    formData.append("ciudad", document.getElementById("ciudad").value);
    formData.append("codigo_postal", document.getElementById("codigo_postal").value);
    formData.append("pais", document.getElementById("pais").value);
    formData.append("fecha_constitucion", document.getElementById("fecha_constitucion").value);
    formData.append("sector", document.getElementById("sector").value);
    formData.append("num_empleados", document.getElementById("num_empleados").value);
    formData.append("sitio_web", document.getElementById("sitio_web").value);
    formData.append("logo_empresa", document.getElementById("logo_empresa").files[0]);
    formData.append("representante_legal", document.getElementById("representante_legal").value);
    formData.append("estado_empresa", document.getElementById("estado_empresa").value);
    formData.append("fecha_alta", document.getElementById("fecha_alta").value);
    formData.append("notas", document.getElementById("notas").value);

    try {
        const respuesta = await fetch("http://localhost:3000/empresas", {
            method: "POST",
            body: formData
        });

        const resultado = await respuesta.json();
        document.getElementById("mensaje").innerText = resultado.mensaje;
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("mensaje").innerText = "Error al guardar la empresa.";
    }
});
