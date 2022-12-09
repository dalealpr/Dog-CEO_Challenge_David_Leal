import React, { useState } from 'react'
import { Link } from "react-router-dom";
import menuH from '../../assets/img/nav/menu_h.png'
import menuHX from '../../assets/img/nav/menu_hx.png'

//Imagenes
import Corazon from '../../assets/img/nav/corazon.png'
import Logo from '../../assets/img/nav/dogo_logo.png'

function NavBar() {
    //Hooks
    const [btnState, setBtnState] = useState({
        activeObject: null,
        objects: [{ id: 1, name: 'Home', rute: '/' },
        { id: 2, name: 'Perros', rute: '/perros' },
        { id: 3, name: 'Nosotros', rute: '/nosotros' },
        { id: 4, name: 'Contacto', rute: '/contacto' },]
    });

    function toggleActiveLogo(index) {
        setBtnState({ ...btnState, activeObject: btnState.objects[index] })
    }

    //Funcion cambiar estado al hacer click
    function toggleActive(index) {
        setBtnState({ ...btnState, activeObject: btnState.objects[index] })
    }

    function toggleActiveStyle(index) {
        if (btnState.objects[index] === btnState.activeObject) {
            return "btnactive";
        } else {
            return "btnnull";
        }
    }

    //Funcion Navbar
    const [hamNavN, sethamNavN] = useState(false)
    const [hamNavNx, sethamNavNx] = useState(false)

    const handlerN = () =>{
        sethamNavN(!hamNavN)
    }

    const handlerNx = () =>{
        sethamNavNx(!hamNavNx)
    }


    return (
        <nav className='navBar'>
            <div className='Nav_Hamb_cont'>
                <button onClick={handlerN}><img className={'hamNavN_block' + (hamNavN ? 'hamNavN_none':'')} id='icoHamb' src={menuH} /></button>
                <button onClick={handlerN}><img className={'hamNavNx_block' + (hamNavN ? 'hamNavNx_block':'')} id='icoHambx' src={menuHX} /></button>
            </div>

            <div className={'hamNav_list' + (hamNavN ? 'hamNavNx_block':'')}>
                <ul className='hamb_List_aCont'>
                    {btnState.objects.map((elements, index) => (
                        <li className='navBar_li' key={index}><Link className='hamb_a' id={elements.id} to={elements.rute} onClick={() => { toggleActive(index) }}>{elements.name}</Link></li>
                    ))}

                </ul>
            </div>

            <Link to="/"><img className='navBar_logo' src={Logo} onClick={() => { toggleActiveLogo(0) }} /></Link>

            <div className='navBar_aBtn_Cont'>
                <ul className='navBar_aCont'>
                    {btnState.objects.map((elements, index) => (
                        <li className='navBar_li' key={index}><Link className={toggleActiveStyle(index)} id={elements.id} to={elements.rute} onClick={() => { toggleActive(index) }}>{elements.name}</Link></li>
                    ))}

                </ul>

                <button><img className='navBar_heart' src={Corazon} /></button>
            </div>
        </nav>
    )
}

export default NavBar