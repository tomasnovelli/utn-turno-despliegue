import React from 'react'
import ProductList from '../../Components/ProductList/ProductList'
import { useGlobalContext } from '../../GlobalContext/GlobalContext'
import { Link, useNavigate } from 'react-router-dom'


const Home = () => {

    const { productos, getUserData, logout, searchTerm, handleChangeSearchTerm } = useGlobalContext()

    const userLoged = getUserData()

    return (
        <div>
            {userLoged
                ?
                <Link onClick={logout}>Logout</Link>
                :
                <Link to={'/login'}>LogIn</Link>
            }

            {
                (userLoged && userLoged.role === 'admin')
                &&
                <>
                    <Link to={'/product/new'}>
                        Agregar Producto
                    </Link>
                    <Link to={'/cart'}>Carrito</Link>
                </>
            }
            {
                (userLoged && userLoged.role === 'user')
                &&
                <>
                    <Link to={'/cart'}>Carrito</Link>
                </>
            }

            <h1>Elige nuestros productos</h1>
            <input type="text" name='text' onChange={handleChangeSearchTerm} value={searchTerm} />
            <ProductList products={productos} />


        </div>
    )
}

export default Home
