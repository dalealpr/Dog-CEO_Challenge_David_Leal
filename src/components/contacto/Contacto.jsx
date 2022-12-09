import React from 'react'

function Contacto() {
    return (
        <div className='contacto_cont'>
            <form className='form_cont' method="post">
                <h3 className='form_title'>Contacto</h3>

                <div className="usuario">
                    <label className='label'>Nombres y Apellidos</label>
                    <input className='input' type="text" required />
                </div>

                <div className="usuario">
                    <label className='label'>Telefono</label>
                    <input className='input' type="tel" required />
                </div>

                <div className="usuario">
                    <label className='label'>Correo</label>
                    <input className='input' type="email" required />
                </div>

                <div className="usuario">
                    <label className='label'>Mensaje</label>
                    <textarea className='mensaje' name="" id="message" required />
                </div>
                <input className='btn_enviar' type="submit" value="Enviar" />

            </form>
        </div>
    )
}

export default Contacto