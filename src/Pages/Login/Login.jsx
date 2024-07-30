import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { users } from '../../data/usersData'

const Login = () => {

    const initialState = { username: '', password: '' }
    const [loginForm, setLoginform] = useState(initialState)
    const navigate = useNavigate()

    const handleChangeValue = (e) => {
        setLoginform({ ...loginForm, [e.target.name]: e.target.value })
    }
    

    const handleLogin = (e) =>{
        e.preventDefault()
        for(const user of users){
            if(user.username === loginForm.username && user.password === loginForm.password){
                localStorage.setItem('user', JSON.stringify(user))
                return navigate('/')
            }
        }
    }

    return (
        <main>
            
            <h1>Iniciar sesion</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Nombre de usuario:</label>
                    <input
                        type="text"
                        placeholder='joedoe'
                        id='username'
                        name='username'
                        onChange={handleChangeValue}
                        value={loginForm.username}
                    />
                </div>
                <div>
                    <label htmlFor="password">contraseña:</label>
                    <input
                        type="password"
                        placeholder='joedoe123'
                        id='password'
                        name='password'
                        onChange={handleChangeValue}
                        value={loginForm.password}
                    />
                </div>
                <button type='submit'>enviar</button>
            </form>
        </main>
    )
}

export default Login
