import React from 'react'
import {  BrowserRouter,Route,Routes } from 'react-router-dom';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Agents from './Components/Agents/Agents';
import Maps from './Components/Maps/Maps';
import Skins from './Components/Skins/Skins';
import Support from './Components/Support/Support';
import Signup from './Components/Signup/Signup';
import Signin from './Components/Signin/Signin';
import Weapons from './Components/Weapons/Weapons';
import Home from './Components/Home/Home';

const App = () => {
  return (
   <>
   <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='agents' element={<Agents/>}/>
        <Route path='maps' element={<Maps/>}/>
        <Route path='skins' element={<Skins/>}/>
        <Route path='support' element={<Support/>}/>
        <Route path='weapons' element={<Weapons/>}/>
        <Route path='signin' element={<Signin/>}/>
        <Route path='signup' element={<Signup/>}/>
    </Routes>
    <Footer/>
   </BrowserRouter>
   </>
  )
}

export default App
