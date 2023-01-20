import React,{useState, useEffect} from 'react'

const ProductList = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/product/api')
            .then(respuesta => {
                return respuesta.json()
            })
            .then(products => {
                //console.log(movies)
                setProductos({ products: products.data })
                console.log(products)
            })
            .catch(error => console.log(error))
    }, [])
    return (
        <div>ProductList</div>
    )
}

export default ProductList