import React from 'react'
//Imagenes
import ImgPerrosRescate from '../../assets/img/nosotros/nosotros_img.jpg'

function Nosotros() {
    return (
        <div className='nosotros_cont'>
            <div className='img_nosotros'>
                <h2 className='titulo_nosotros'>Quienes somos</h2>
            </div>

            <section className='nosotros_sectCont'>

                <div className='nosotros_textCont'>
                    <p className='nosotros_p'>Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Aspernatur nemo iure voluptatem
                        similique nesciunt ad delectus placeat, maiores neque
                        accusantium minima, dolor quidem optio cupiditate.
                        Ducimus sit quod nobis repellat.
                    </p>
                </div>

                <div className='nosotros_imgCont'>
                    <img className='img_refugio' src={ImgPerrosRescate} />
                </div>

            </section>

        </div>
    )
}

export default Nosotros