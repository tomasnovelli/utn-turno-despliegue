import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useGlobalContext } from '../../GlobalContext/GlobalContext'

const Detail = () => {
    const parametros = useParams()
    const { handleDeleteProduct, buscarProductoPorId, getUserData } = useGlobalContext()
    const navigate = useNavigate()
    const userLoged = getUserData()
    const producto = buscarProductoPorId(parametros.producto_codigo)


    return (
        <div>
            {
                producto
                    ?
                    <>
                        <Link to={'/'}>Volver</Link>
                        <br />
                        <h3>{producto.nombre}({producto.codigo})</h3>
                        <img src="" alt="" />
                        <span>Categoria: {producto.categoria}</span>
                        <br />
                        <p>{producto.descripcion}</p>
                        <br />
                        <span>Disponibles: {producto.stock}</span>
                        <br />
                        <span>Precio: {producto.precio}</span>
                        <button>Comprar</button>
                        {
                            userLoged.role === 'admin' &&
                            <button onClick={() => handleDeleteProduct(producto.codigo)}>Eliminar Producto</button>
                        }

                        <hr />
                    </>
                    :
                    navigate('/*')

            }

        </div>
    )
}

export default Detail
