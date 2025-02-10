document.getElementById("contactoForm").addEventListener("submit", async (event) => {
    event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

    const formData = new FormData(event.target); // Captura todos los campos

    try {
        const respuesta = await fetch("http://localhost:3000/contactos", {
            method: "POST",
            body: formData
        });

        const resultado = await respuesta.json();
        document.getElementById("mensaje").innerText = resultado.mensaje; // Muestra el mensaje en la página
    } catch (error) {
        console.error("Error al guardar la persona de contacto:", error);
        alert("Hubo un error al guardar la persona de contacto.");
    }
});
