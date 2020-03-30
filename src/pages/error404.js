import React from 'react';
import { Link } from 'react-router-dom';

export const Error404 = () => {
    return (
        <div>
            <h1>Error 404</h1>
            <p>Ha habido un error en la solicitud de la página</p>
            <div>
                <Link to={`/`}>
                    <button className='btn btn-primary'>Volver</button>
                </Link>
            </div>
        </div>
    )
} 