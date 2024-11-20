import { useState, useEffect } from "react";

export function ListadoUsuarios() {
    // SIMULA UN CONJUNTO DE DATOS QUE VIENE DEL BACKEND
    const usuarios = [
        {
            id: 5,
            nombre: "Kevin Gutierrez",
            telefono: "3001125456",
            ciudad: "Medellin"
        },
        {
            id: 6,
            nombre: "Raphael Gutierrez",
            telefono: "30011250446",
            ciudad: "Robledo"
        },
        {
            id: 70,
            nombre: "Armando SanPedro",
            telefono: "300611611",
            ciudad: "Porto Bello"
        },
        {
            id: 1,
            nombre: "Aphelios",
            telefono: "011150215",
            ciudad: "Bajo Terra"
        },
        {
            id: 11,
            nombre: "Bob SanPedro",
            telefono: "300611611",
            ciudad: "Construcción Bello"
        },
    ];

    const [datosAPI, setDatosApi] = useState([]);
    const [estadoCarga, setEstadoCarga] = useState(true);

    // PROGRAMO EL useEffect PARA SIMULAR LLAMADA AL BACKEND
    useEffect(() => {
        setTimeout(() => {
            // Simula la obtención de datos
            setDatosApi(usuarios);
            setEstadoCarga(false);
        }, 1000); // Simula una espera de 1 segundo
    }, []); // Ejecuta solo una vez al montar el componente

    return (
        <>
            <h3>LISTADO DE USUARIOS</h3>
            <div className="container">
                {
                    estadoCarga ? (
                        <p>Cargando usuarios...</p>
                    ) : (
                        <div className="row row-cols-1 row-cols-md-3 g-3">
                            {datosAPI.map(usuario => (
                                <div className="col" key={usuario.id}>
                                    <div className="card h-100 shadow p-5">
                                        <h5>{usuario.nombre}</h5>
                                        <h4>Ciudad: {usuario.ciudad}</h4>
                                        <h4>Teléfono: {usuario.telefono}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                }
            </div>
        </>
    );
}
