//Routing (CWH)
//Navbar used is Navbar2.jsx
import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import About from "./components/About"
import User from './components/User'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const App = () => {
    const router = createBrowserRouter([
        {
            path:"/",
            element:<><Navbar /><Home/></>
        }, 
        {
            path:"/login",
            element:<><Navbar /><Login/></>
        },
        {
            path:"/about",
            element:<><Navbar /><About/></>
        },
        {
            path:"/user/:username",
            element:<><Navbar /><User/></>
        }
    ])
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    )
}

export default App
