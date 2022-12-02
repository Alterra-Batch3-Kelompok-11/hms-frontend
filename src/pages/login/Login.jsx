import React, { useState, useRef } from 'react'
import styles from './styles.module.css'
import img from './bg-login.png'
import instance from '../../API/AxiosInstance' 


function Login() {
    const [err, setErr] = useState("")
    const username = useRef(null)
    const password = useRef(null)


    const handleSubmit = (e) => {
        e.preventDefault()

        // console.log(username.current?.value)
        // console.log(password.current?.value)

        instance.post('v1/login', {
            username: username.current?.value,
            password: password.current?.value
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            // setErr("Username atau password yang dimasukkan salah. Mohon periksa kembali.")
            console.log(error);
        });
    }
    
    return (
        <div className={styles.background}>
            <img src={img} className={`${styles.box} ${styles.img}`}></img>
            <div className={`${styles.box} ${styles.login}`}>
                <h1 className='mt-3'>Selamat Datang di Cleanic</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='username' ref={username} />
                    <input type='password' placeholder='password' ref={password} />
                    <div style={{height: "15px"}}>
                        <p className={styles.errMsg}>{err}</p>
                    </div>
                    <button className={styles.btn}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
