import React from 'react'
import {Link} from "react-router-dom";
//Imagenes
import Perros from '../../assets/img/header/perros.png'


function Header() {
  return (
    <header>

        <div className='header_cont'>

            <div className='header_textCont'>
                <h1 className='header_textTitle'>Adopta un perro rescatado</h1>

                <p className='header_textP'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum, quaerat ab necessitatibus fugit amet ea eos eveniet
                    autem natus optio sequi quia aspernatur eaque, illo perspiciatis
                    at, consequuntur quo repudiandae?
                </p>

                <button className='btn_adoptar'><Link className='a_adoptaAqui' to="/perros">Adopta Aqui</Link></button>
            </div>

            <img className='header_img' src={Perros}/>

        </div>
    </header>
  )
}

export default Header