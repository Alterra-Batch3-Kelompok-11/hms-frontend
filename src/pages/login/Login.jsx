import React from 'react'
import './style.css'
import img from './bg-login.png'

function Login() {
    return (
        <div>
            <img src={img} className='box img'></img>
            <div className='box box-login'>
                <h1>Selamat Datang di Cleanic</h1>
                <form>
                    <input type='text' placeholder='username' />
                    <input type='text' placeholder='password' />
                    <button className='btn'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
