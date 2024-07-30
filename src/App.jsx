import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cart, Detail, Home, Login, NotFound, ProductNew } from './Pages'




function App() {

	return (	
		
		<Routes>
			<Route path='/' element={<Home />}/>
			<Route path='/detail/:producto_codigo' element={<Detail/>} />
			<Route path='/cart' element={<Cart />} />
			<Route path='/product/new' element={<ProductNew />}/>
			<Route path='/login' element={<Login />}/>
			<Route path='/*' element={<NotFound />}/>
		</Routes>
	)
}

export default App
