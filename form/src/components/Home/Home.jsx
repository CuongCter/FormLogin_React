import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const Home = () => {
    const navigate = useNavigate()
    let user = JSON.parse(localStorage.getItem('user-info'))
    const hanleLogout = () => {
        localStorage.clear();
        navigate('/')
    }
    return (
        <div>
            <h1>Home</h1>
            <button onClick={hanleLogout}>SignOut</button>
        </div>

    )
}

export default Home