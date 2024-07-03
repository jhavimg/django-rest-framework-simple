import React, { useEffect, useState } from 'react';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://drfsimplecrud-test-vkqn.onrender.com/api/projects/') 
            .then(response => response.json())
            .then(setData)
            .catch(console.error);
    }, []);

    return (
        <div>
            <h1>Datos desde la API</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default App;
