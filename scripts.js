document.addEventListener("DOMContentLoaded", function() {
    const apiUrl = 'https://drfsimplecrud-test-vkqn.onrender.com/api/projects/'; // Cambia esto por la URL de tu API

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const display = document.getElementById('api-data');
        display.innerHTML = JSON.stringify(data, null, 2); // Muestra los datos en formato JSON en la página
    })
    .catch(error => console.error('Error al obtener los datos:', error));
});
