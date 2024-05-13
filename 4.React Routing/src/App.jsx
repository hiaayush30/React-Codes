//Routing
//Note-window.location.href="/" will lead to yhe re rendering of the whole page
//and is not the right way in client side routing
import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { lazy } from 'react'
const Login =lazy(()=>import("./components/Login"));  //Lazy Loading (will have to use Suspense now)
const About=lazy(()=>import("./components/About"));   //Now about is async so will have to use Suspense
const App = () => {
    return (
        <div>
            <BrowserRouter>
            <Navbar />
            {/* <Suspense fallback="Loading..."> */}
                <Routes>
                    <Route path="/login" element={<Suspense fallback="Loading..."><Login /></Suspense>} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<Suspense fallback="Loading..."><About /></Suspense>} />
                </Routes>
                {/* </Suspense> */}
            </BrowserRouter>
        </div>
    )
}

export default App
