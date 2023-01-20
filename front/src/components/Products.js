//Trabajando con componentes de estado - Clases
//Apis  - Eventos
import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';

//Importar nuestro componente

function Products () {
    const [productos, setProductos] = useState([])
    //Compomentes Ciclo de vida - Montar - Actualizar - Desmontar
    //Montaje
    /* componentDidMount(){
        fetch('/api/movies')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(movies =>{
            //console.log(movies)
            this.setState({movies: movies.data})
        })
        .catch(error => console.log(error))

    } */

    useEffect(() => {
        fetch('http://localhost:3000/product/api')
            .then(respuesta => {
                return respuesta.json()
            })
            .then(products => {
                //console.log(movies)
                setProductos(products.data.products)

            })
            .catch(error => console.log(error))
    }, [])


    return (
        <>
            {/*<!-- MOVIES LIST -->*/}
            <h1 className="h3 mb-2 text-gray-800 ">Productos en la database</h1>

            {/*<!-- DataTales Example -->*/}
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Titulo</th>
                                    <th>Descripcion</th>
                                    <th>Descuento</th>
                                    <th>Detalle</th>
                                    <th>Precio</th>
                                    <th>Categoría</th>
                                </tr>
                            </thead>
                            <tfoot>
                            <tr>
                                    <th>Id</th>
                                    <th>Titulo</th>
                                    <th>Descripcion</th>
                                    <th>Descuento</th>
                                    <th>Detalle</th>
                                    <th>Precio</th>
                                    <th>Categoría</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    productos.map((producto, index) => {
                                        return (
                                            <MovieList {...producto} key={index} />
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Products;
