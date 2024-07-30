export const obtenerCarrito = () => {
    const carrito = localStorage.getItem('carrito')
    if(carrito){
        return JSON.parse(carrito)
    } else{
        localStorage.setItem('carriot', JSON.stringify([]))
        return []
    }
}