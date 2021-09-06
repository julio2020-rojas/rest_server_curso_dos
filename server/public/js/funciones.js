fetch("https://localhost:3000/usuario")
    .then(response => response.json())
    .then(datos => {
        let usuarios = '';
        for (let usuario of datos) {
            usuarios += `${usuario}<br>`;
        }
        const elemento = document.querySelector("#datos");
        elemento.innerHTML = usuarios;
    });