import React from 'react'
import { Link } from 'react-router-dom'
import { Detail } from '../../Pages'

const ProductCard = ({ producto }) => {

    const { nombre,
        descripcion,
        precio,
        id,
        stock,
        codigo,
        categoria } = producto

    return (
        <div>
            <h3>{nombre}({codigo})</h3>
            <span>Categoria: {categoria}</span>
            <br />
            <span>Disponibles: {stock}</span>
            <br />
            <span>Precio: {precio}</span>
            <br />
            <Link to={'/detail/' + codigo}>Ver Detalle</Link>
            <hr />
            
        </div>
    )
}

export default ProductCard
