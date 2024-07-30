import React, { useState } from 'react'
import { useGlobalContext } from '../../GlobalContext/GlobalContext'
import { Link } from 'react-router-dom'

const ProductNew = () => {
    const { handleCreateProduct } = useGlobalContext()
    const CATEGORIAS_DISPONIBLES = [
        'tecnologia',
        'hogar',
        'deportes'
    ]
    const plantillaNuevoProducto = {
        nombre: '',
        descripcion: '',
        precio: '',
        stock: '',
        codigo: '',
        categoria: '',
        thumbnail: ''
    }
    const [nuevoProducto, setNuevoProducto] = useState(plantillaNuevoProducto)

    const handleChangeValue = (e) => {
        const valueToChange = e.target.name
        const newValue = e.target.value
        setNuevoProducto({ ...nuevoProducto, [valueToChange]: newValue })

    }

    return (
        <div>
            <Link to={'/'}>Volver</Link>
            <form onSubmit={handleCreateProduct} >
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name='nombre' id='nombre' onChange={handleChangeValue} value={nuevoProducto.nombre} />
                </div>
                <br />
                <div>
                    <label htmlFor="descripcion">descripcion</label>
                    <textarea type="text" name='descripcion' id='descripcion' onChange={handleChangeValue} value={nuevoProducto.descripcion}></textarea>
                </div>
                <br />
                <div>
                    <label htmlFor="precio">Precio</label>
                    <input type="text" name='precio' id='precio' onChange={handleChangeValue} value={nuevoProducto.precio} />
                </div>
                <br />
                <div>
                    <label htmlFor="stock">Stock</label>
                    <input type="text" name='stock' id='stock' onChange={handleChangeValue} value={nuevoProducto.stock} />
                </div>
                <br />
                <div>
                    <label htmlFor="codigo">Codigo</label>
                    <input type="text" name='codigo' id='codigo' onChange={handleChangeValue} value={nuevoProducto.codigo} />
                </div>
                <br />
                <div>
                    <label htmlFor="categoria">Categoria</label>
                    <select name='categoria' id='categoria' onChange={handleChangeValue} value={nuevoProducto.categoria}>
                        <option value={''} disabled>No Seleccionado</option>
                        {CATEGORIAS_DISPONIBLES.map((opcion, index) => {
                            return <option
                                key={index + opcion}
                                value={opcion}>{opcion}</option>
                        })}
                    </select>
                </div>
                <br />
                <div>
                    <label htmlFor="thumbnail">Ingrese la direccion de la imagen</label>
                    <input type="text" name='thumbnail' id='thumbnail' onChange={handleChangeValue} value={nuevoProducto.thumbnail} />
                </div>
                <br />
                <button type='submit'>enviar</button>
            </form>
        </div>
    )
}

export default ProductNew
