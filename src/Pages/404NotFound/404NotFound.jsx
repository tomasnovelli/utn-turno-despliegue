import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <h1>Error 404 no encontramos esta ruta</h1>
        <Link to='/'>ir a Inicio</Link>
    </div>
  )
}

export default NotFound
