import React from 'react'
import ProductCard from '../ProductCard/ProductCard'


const ProductList = ({products}) => {

    return (
        <div>
            {
                products.map((producto) => {
                    return (
                        <ProductCard producto={producto} key={producto.id}/>
                    )
                })
            }
        </div>
    )
}

export default ProductList
