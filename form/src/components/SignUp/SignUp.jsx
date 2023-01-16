import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate()
    // "email": "eve.holt@reqres.in",
    // "password": "pistol"
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function signUp() {
        let item = { email, password }
        let res = await fetch("https://reqres.in/api/register", {
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
            navigate('/')
            alert('Đăng kí thành công')
        } else {
            alert('Fail')
        }
    }
    return (
        <div>
            <h1>SignUp</h1>
            <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder='email' />
            <br />
            <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder='password' />
            <br />
            <button onClick={signUp}>SignUp</button>
        </div>

    )
}

export default SignUp