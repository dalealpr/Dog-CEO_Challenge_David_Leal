import React, { useState, useEffect } from 'react'


function Perros() {

    //STATES
    const [loading, setLoading] = useState(true)
    const [loadingS, setLoadingS] = useState(true)
    const [loadingR, setLoadingR] = useState(true)
    const [loadingI, setLoadingI] = useState(true)


    const [listSubRazas, setListSubRazas] = useState([])
    const [listPerro, setListPerro] = useState([])
    const [imgPerro, setImgPerro] = useState([])

    const [valorListRazas, setValorListRazas] = useState(null)



    //Trayendo API con Async Await
    useEffect(() => {

        const getItem = async () => {
            try {
                //End Point Razas de Perros
                const respuestaList = await fetch('https://dog.ceo/api/breeds/list/all');
                const dataList = await respuestaList.json();
                setListPerro(dataList)


            }
            catch (err) {
                console.err('UN ERROR'.err)
            }
            finally {
                setLoading(false)
            }
        }

        getItem()

    }, [])

    //FUNCIONES

    // Funcion valores seleccionados de la lista
    const handlerCargarArticulos = function (evento) {
        const opcion = evento.target.value;
        console.log(opcion)
        setValorListRazas(opcion)
        setLoadingS(false)
        setListSubRazas([])
        fetchImg(opcion)

    }

    //Funcion cargar subrazas
    const handlerCargarSubRazas = function (evento) {
        const opcion = evento.target.value;
        console.log(opcion)
        setListSubRazas(opcion)
        setLoadingR(false)

    }

    //Funcion API Dinamica IMG Razas de Perros
    const fetchImg = (ev) => {
        const getItem = async () => {
            //End Point Razas de Perros
            const respuestaList = await fetch(`https://dog.ceo/api/breed/${ev}/images`);
            const dataList = await respuestaList.json();
            console.log(dataList)
            setImgPerro(dataList)
            setLoadingI(false)
        }
        getItem()
    }

    return (
        <div className='perros_cont'>

            <div className='cont_listas'>
                <div>
                    <span>Ordenar por Raza:</span>
                    <select className="listRazas" onChange={handlerCargarArticulos}>
                       
                        {
                            loading
                                ? <div className='carg'>Cargando</div>
                                :
                   
                                Object.keys(listPerro.message).map((key, index) => {
                                    
                                    return (
                                        <option key={index} value={key}>{key}</option>
                                    )
                                })
                           
                        }
                         <option>Elige una Raza</option>

                    </select>
                </div>

                <div>

                    <span>Subrazas</span>

                    <select className="listSubRazas" onChange={handlerCargarSubRazas}>
                        {valorListRazas === 'bulldog' || valorListRazas ==='hound' || valorListRazas ==='mastiff' || valorListRazas ==='mountain' || valorListRazas ==='pointer' ||valorListRazas ==='poodle'
                        || valorListRazas ==='retriever' || valorListRazas ==='schnauzer'|| valorListRazas ==='setter'|| valorListRazas ==='sheepdog'|| valorListRazas ==='spaniel' || valorListRazas ==='terrier'
                        ?
                            <option>Elige una SubRaza</option>

                            :
                            <option></option>
                        }

                        {
                            loadingS
                                ?
                                <></>
                                :
                                listPerro.message[valorListRazas].map((subraza, index) => {
                                    return (
                                        <option key={index} value={subraza}>{subraza}</option>
                                    )
                                })
                        }

                    </select>
                </div>
            </div>

            <div className='img_perrosCont'>
                {
                    loadingI
                        ?
                        <span>Cargando</span>
                        :
                        listSubRazas === [] ?
                            imgPerro.message.map((img, index) => {
                                return (
                                    <div key={index} className='cardPerro_cont'>
                                        <img className='cardPerro_img' src={img} />
                                        <h4>{valorListRazas}</h4>
                                  
                                        <button className='btnCard_adoptar'>Adoptar</button>
                                    </div>
                                )
                            })

                            :
                            imgPerro.message.filter(img => img.includes(listSubRazas)).map((img, index) => {

                                return (
                                    <div key={index} className='cardPerro_cont'>
                                        <img className='cardPerro_img' src={img} />
                                        <h4>{valorListRazas}</h4>
                                        
                                        <p>{listSubRazas}</p>
                                        <button className='btnCard_adoptar'>Adoptar</button>
                                    </div>
                                )
                            })
                }

            </div>
        </div>
    )
}

export default Perros