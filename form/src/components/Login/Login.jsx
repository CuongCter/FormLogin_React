import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { useEffect } from 'react';

const Login = () => {
    // "email": "eve.holt@reqres.in",
    // "password": "cityslicka"
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem('user-info'))
            navigate('/')
    }, [])
    async function login() {
        console.warn(email, password)
        let item = { email, password }
        let res = await fetch("https://reqres.in/api/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Accept": 'application/json'
            },
            body: JSON.stringify(item)
        })
        if (res.status === 200) {
            res = await res.json();
            localStorage.setItem("user-info", JSON.stringify(res))
            navigate('/home')
            alert('Đăng nhập thành công')
        } else {
            alert('Fail')
        }

    }
    return (
        <div className=''>

            <div className='card'>
                <div className='card-header'>
                    <h2>Login</h2>
                </div>
                <div className='card-body'>
                    <div className='form-group'>
                        <label>Email </label>
                        <input onChange={(e) => setEmail(e.target.value)} className='' type="text" />
                    </div>
                    <div className='form-group'>
                        <label>Password </label>
                        <input onChange={(e) => setPassword(e.target.value)} className='' type="text" />
                    </div>
                </div>
                <div className='card-footer'>
                    <button onClick={login} type='submit'>Login</button>
                    <Link to='signUp'>
                        <button>SignUp</button>
                    </Link>

                </div>
            </div>

        </div >
    )
}

export default Login