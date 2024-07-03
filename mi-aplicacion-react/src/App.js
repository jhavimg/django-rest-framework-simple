import React, { useEffect, useState } from 'react';

function App() {
    const [data, setData] = useState(null); // Estado para almacenar los datos recibidos
    const [isLoading, setIsLoading] = useState(true); // Estado para controlar la carga
    const [error, setError] = useState(null); // Estado para manejar errores

    // useEffect se ejecutará una vez cuando el componente se monte
    useEffect(() => {
        const url = 'https://drfsimplecrud-test-vkqn.onrender.com/api/projects/'; // URL de tu API
        fetch(url)
            .then(response => {
                // Verificar si la respuesta es exitosa
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json(); // Parsear la respuesta como JSON
            })
            .then(data => {
                setData(data); // Guardar los datos en el estado
                setIsLoading(false); // Actualizar el estado de carga
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError(error.message); // Guardar el mensaje de error en el estado
                setIsLoading(false);
            });
    }, []); // El array vacío asegura que el efecto se ejecute solo una vez

    if (isLoading) {
        return <div>Loading...</div>; // Mostrar un mensaje de carga
    }

    if (error) {
        return <div>Error: {error}</div>; // Mostrar un mensaje de error
    }

    return (
        <div>
            <h1>Proyectos desde la API</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default App;
