import React, {Fragment, useState} from 'react';

const Formulario = () => {

    const [datos, setDatos] = useState({
        nombre: '',
        clave: ''
    })

const handInputChange = (event) => {
    console.log(event.target.value)
    setDatos({
        ...datos,
        [event.target.name] : event.target.value
    })
}

const enviarDatos = (event) => {
    event.preventDefault();
    console.log(datos.nombre + ' ' + datos.clave)
}

    return (
        <Fragment>
            <h1>Login Unua</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-4">
                    
                </div>
                <div className="col-md-4">
                    <input
                        name="nombre"
                        className="form-control"
                        placeholder="Nombre"
                        type="text"
                        onChange={handInputChange}
                    />
                    <input
                        name="clave"
                        className="form-control"
                        placeholder="Clave"
                        type="password"
                        onChange={handInputChange}
                    />
                    <input
                        className="btn btn-success form-control"
                        type="submit"
                    />
                </div>
                <div className="col-md-4">
                    
                </div>
            </form>
        </Fragment>
        
    );
}

export default Formulario;