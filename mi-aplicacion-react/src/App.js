import React, { useEffect, useState } from 'react';

function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('https://drfsimplecrud-test-vkqn.onrender.com/api/projects/')
            .then(response => response.json())
            .then(setProjects)
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Proyectos desde la API</h1>
            {projects.length > 0 ? (
                <ul>
                    {projects.map(project => (
                        <li key={project.id}>
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <p>Technología utilizada: {project.technology}</p>
                            <p>Creado el: {new Date(project.created_at).toLocaleDateString()}</p>
                            {project.image && <img src={project.image} alt={`Imagen de ${project.title}`} style={{ width: '100px' }} />}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No hay proyectos para mostrar.</p>
            )}
        </div>
    );
}

export default App;
