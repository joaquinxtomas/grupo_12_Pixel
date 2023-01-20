import React, {useState, useEffect} from 'react';

function LastMovieInDb(){

    const [lastProduct, setLastProduct] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/product/api')
            .then(respuesta => {
                return respuesta.json()
            })
            .then(product => {
                //console.log(movies)
                setLastProduct(product.data.products.pop())
                /* console.log(product.data.products.pop()) */

            })
            .catch(error => console.log(error))
    }, [])

    console.log(lastProduct)

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último producto</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={`http://localhost:3000/img/${lastProduct.img}`} alt=" producto "/>
                    </div>
                    <h4>{lastProduct.titulo}</h4>
                    <p>{lastProduct.longDesc}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
                </div>
            </div>
        </div>
    )
}

export default LastMovieInDb;
