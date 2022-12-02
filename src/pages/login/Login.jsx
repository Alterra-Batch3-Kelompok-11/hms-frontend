import React from 'react'
import styles from './loginStyle.module.css'
import img from './bg-login.png'

function Login() {
    return (
        <div className={styles.body}>
            <img src={img} className='box img'></img>
            <div className='box box-login'>
                <h1>Selamat Datang di Cleanic</h1>
                <form>
                    <input type='text' placeholder='username' />
                    <input type='text' placeholder='password' />
                    <button className={styles.btn}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
