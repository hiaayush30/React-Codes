import React from 'react'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate=useNavigate();    //the useNavigate hook must be used inside the BrowserRouter
    function handleLogin(){
        navigate("/login")
    }
    function handleAbout(){
        navigate("/about")
    }
    function handleHome(){
        navigate("/home")
    }
  return (
    <nav className='flex justify-between items-center bg-black text-white h-10'>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleAbout}>About</button>
      <button onClick={handleHome}>Home</button>
    </nav>
  )    
}

export default Navbar
