document.getElementById("profesorForm").addEventListener("submit", async (event) => {
    event.preventDefault(); // Evita el envío normal del formulario

    const formData = new FormData(event.target);

    try {
        const respuesta = await fetch("http://localhost:3000/profesores", {
            method: "POST",
            body: formData
        });

        const resultado = await respuesta.json();
        document.getElementById("mensaje").innerText = resultado.mensaje; // Mostrar mensaje en la página
    } catch (error) {
        console.error("Error al guardar el profesor:", error);
        alert("Hubo un error al guardar el profesor.");
    }
});
