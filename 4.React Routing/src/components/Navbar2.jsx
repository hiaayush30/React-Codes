import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-black text-white h-10'>
      {/* <Link to='/login'>Login</Link>
      <Link to='/about'>About</Link>
      <Link to='/'>Home</Link> */}

      {/* The NavLink component is a special version of Link that provides additional features
      for navigation, such as styling the link based on whether it matches the current URL.
      It accepts additional props, such as activeClassName, activeStyle, and exact,which
      allow you to customize the appearance and behavior of the link when it matches the
      current URL. */}

      <NavLink className={(e)=>{return e.isActive ? "bg-red-600 text-white rounded-sm p-1":"p-1"}} to='/login'>Login</NavLink>
      <NavLink className={(e)=>{return e.isActive ? "bg-red-600 text-white rounded-sm p-1":"p-1"}} to='/about'>About</NavLink>
      <NavLink className={(e)=>{return e.isActive ? "bg-red-600 text-white rounded-sm p-1":"p-1"}} to='/'>Home</NavLink>
      
       {/* In the context of a NavLink component from react-router-dom,
       the e in your code snippet doesn't represent an event object as you might expect
       in event handlers like onClick. Instead, it represents the props passed to the NavLink
       component. */}
    </nav>
  )    
}

export default Navbar
