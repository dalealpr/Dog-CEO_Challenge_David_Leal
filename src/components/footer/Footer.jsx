import React from 'react'
//Imagenes
import Logo2 from '../../assets/img/nav/dogo_logo2.png'
import Twitter from '../../assets/img/footer/ico-twiiter-128px.png'
import Instag from '../../assets/img/footer/ico-insta-128px.png'
import Faceb from '../../assets/img/footer/ico-face-128px.png'
import Youtube from '../../assets/img/footer/ico-yout-128px.png'




function Footer() {
  return (
    <footer className='footer'>
      <div className='redes_cont'>
        <a href='https://twitter.com/?lang=es' target="_blank"><img className='redes_img' src={Twitter}/></a>
        <a href='https://www.instagram.com/' target="_blank"><img className='redes_img' src={Instag}/></a>
        <a href='https://www.facebook.com/' target="_blank"><img className='redes_img' src={Faceb}/></a>
        <a href='https://www.youtube.com/' target="_blank"><img className='redes_img' src={Youtube}/></a>

      </div>

      <div className='footer_contText'>
        <img className='navBar_logo' src={Logo2} />
        <p className='footer_text'>DOGO centro de rescate yu adopcion de mascotas, todos los derechos reservados 2022</p>
      </div>
    </footer>

  )
}

export default Footer