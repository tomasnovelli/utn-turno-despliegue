import { createContext, useContext, useEffect, useState } from "react";
import { crearProducto, eliminarProdcutoPorId, obtenerProductos } from "../Components/helpers/productos";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { obtenerCarrito } from "../Components/helpers/cart";

const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {

    const [productos, setProductos] = useState(obtenerProductos())
    const [carrito, setCarrito] = useState(obtenerCarrito())
    const [searchTerm, setSearchTheme] = useState('')
    const navigation = useNavigate()

    const handleChangeSearchTerm = ( e )  =>{
        setSearchTheme(e.targe.value)
    }

    useEffect(()=>{
        const productList = obtenerProductos()
        console.log(searchTerm);
        if(searchTerm != ''){
            const nerProductList = productList.filter(product => product.nombre.toLowerCase().includes(searchTerm.toLowerCase()))
            setProductos(nerProductList)
        } else{
            setProductos(productList)
        }
    }, [searchTerm])

    const handleDeleteProduct = (codigo) => {
        setProductos(eliminarProdcutoPorId(codigo))
        navigation('/')
    }
/*     const handleCreateProduct = (e, nuevoProducto) => {
        console.log('producto creado')
        e.preventDefault()
        setProductos(crearProducto(nuevoProducto, nuevoProducto.id = uuid()))
        
    } */
    const handleCreateProduct = (e) =>{
        e.preventDefault()
        const formulario = e.target
        const formularioValores = new FormData(formulario)
        const nuevoProducto = {
            nombre: '',
            descripcion: '',
            precio: 0,
            stock: 0,
            codigo: '',
            categoria: ''
        }
        for(let propiedad in nuevoProducto){
            nuevoProducto[propiedad] = formularioValores.get(propiedad)
        }
        nuevoProducto.id = uuid()
        
        setProductos([...productos, nuevoProducto])
        crearProducto(nuevoProducto)
        navigation('/')
    }

    const buscarProductoPorId = (codigo) => {
        const listaProductos = obtenerProductos()
        return listaProductos.find((producto) => producto.codigo === codigo)
    }
    const getUserData = () => {
        const userLoged = JSON.parse(localStorage.getItem('user'))
        return userLoged
    }
    const logout = () => {
        localStorage.removeItem('user')
        navigation('/')
    }


    return (
        <GlobalContext.Provider value={
            {
                productos: productos,
                handleDeleteProduct: handleDeleteProduct,
                handleCreateProduct: handleCreateProduct,
                buscarProductoPorId: buscarProductoPorId,
                getUserData: getUserData,
                logout: logout,
                handleChangeSearchTerm,
                searchTerm
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {

    return useContext(GlobalContext)

}