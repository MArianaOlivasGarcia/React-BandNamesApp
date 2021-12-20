

import React, { useState, useContext } from 'react'
import { SocketContext } from '../context/SocketContext';

export const BandAdd = ( ) => {

    const [valor, setValor] = useState('')
    const { socket } = useContext( SocketContext );


    const onSubmit = ( e ) => {
        e.preventDefault();

        if ( valor.trim().length > 0 ) {
            socket.emit('create-band', { name: valor })
        }
    }

    return (
        <>
            <h3>Agregar Band</h3>

            <form onSubmit={ onSubmit }>
                <input 
                    className="form-control"
                    placeholder="Nuevo nombre de banda"
                    value={ valor }
                    onChange={ (e) => setValor( e.target.value ) }
                />    
            </form>   
        </>
    )
}
