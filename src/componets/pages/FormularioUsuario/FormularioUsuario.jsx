import { useState } from "react";

export function FormularioUsuario() {
    const [nombreUsuario, setNombreUsuario] = useState("Formidable");
    const [edadUsuario, setEdadUsuario] = useState("");
    const [telefonoUsuario, setTelefonoUsuario] = useState("");
    const [correoUsuario, setCorreoUsuario] = useState("");
    const [contrasenaUsuario, setContrasenaUsuario] = useState("");
    const [fechaUsuario, setFechaUsuario] = useState("");
    const [ciudadUsuario, setCiudadUsuario] = useState("");

    function procesarFormulario(evento){
        evento.preventDefault();
        let datoUsuario={
            nombre:nombreUsuario,
            edad:edadUsuario,
            telefono:telefonoUsuario,
            correo:correoUsuario,
            contrasena:contrasenaUsuario,
            fecha:fechaUsuario,
            ciudad:ciudadUsuario

        }
        console.log(datoUsuario)
    }

    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-12">
                        <h3>Registro de usuario: </h3>
                        
                        <form className="p-5 border rounded shadow"onSubmit={procesarFormulario}>
                            <div className="row">
                                <div className="col-12">
                                    <label className="form-label">Nombre</label>
                                    <input 

                                    type="text" 
                                    className="form-control"
                                    value={nombreUsuario}
                                    onChange={function(evento){setNombreUsuario(evento.target.value)}}
                                    
                                    />
                                </div>

                            </div>

                            <div className="row mt-3">
                                <div className="col-12 col-md-6">
                                    <label className="form-label">Edad: </label>
                                    <input type="number"
                                     className="form-control" 
                                     value={edadUsuario}
                                    onChange={function(evento){setEdadUsuario(evento.target.value)}}/>
                                </div>

                                <div className="col-12 col-md-6">
                                    <label className="form-label">Teléfono: </label>
                                    <input type="number" 
                                    className="form-control"
                                    value={telefonoUsuario}
                                    onChange={function(evento){setTelefonoUsuario(evento.target.value)}}
                                     />
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-12 col-md-6">
                                    <label className="form-label">Correo: </label>
                                    <input type="email" 
                                    className="form-control" 
                                    value={correoUsuario}
                                    onChange={function(evento){setCorreoUsuario(evento.target.value)}}/>
                                </div>

                                <div className="col-12 col-md-6">
                                    <label className="form-label">Contraseña: </label>
                                    <input type="password" 
                                    className="form-control" 
                                    value={contrasenaUsuario}
                                    onChange={function(evento){setContrasenaUsuario(evento.target.value)}}
                                    />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-12 col-md-6">
                                    <label className="form-label">Fecha Registro: </label>
                                    <input type="date"
                                     className="form-control" 
                                     value={fechaUsuario}
                                    onChange={function(evento){setFechaUsuario(evento.target.value)}}/>
                                </div>
                                <div className="col-12 col-md-6">
                                    <label className="form-label">Ciudad: </label>
                                    <input type="text" 
                                    className="form-control"
                                    value={ciudadUsuario}
                                    onChange={function(evento){setCiudadUsuario(evento.target.value)}} />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-outline-success my-3 w-100">Registrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
