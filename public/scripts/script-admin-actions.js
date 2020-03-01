function enviarModificacion(data) {
    fetch("https://localhost:5500/edit", {
        method: "POST,",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
}
