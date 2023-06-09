import React, { createContext, useReducer } from 'react'
import {  BrowserRouter,Route,Routes } from 'react-router-dom';
import {reducer , initialState}from '../src/reducer/UseReduce';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Agents from './Components/Agents/Agents';
import Maps from './Components/Maps/Maps';
import Skins from './Components/Skins/Skins';
import Support from './Components/Support/Support';
import Signup from './Components/Signup/Signup';
import Weapons from './Components/Weapons/Weapons';
import Home from './Components/Home/Home';
import Signin from './Components/Signin/Signin1';
import Logout from './Components/Logout/Logout';
import Yoru from './Components/Agents/Yoru';
import Reyna from './Components/Agents/Reyna';
import Sage from './Components/Agents/Sage';
import Jett from './Components/Agents/Jett';
import Raze from './Components/Agents/Raze';
import Astra from './Components/Agents/Astra';
import Fade from './Components/Agents/Fade';
import Chamber from './Components/Agents/Chamber';


  //----- context API -----//
  export const userContext =createContext();

  //----- storing all the routes inside a function -----//
  const Routing =()=>{
    return(
      <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='agents' element={<Agents/>}>
        <Route path='yoru' element={<Yoru/>}/>
        <Route path='reyna' element={<Reyna/>}/>
        <Route path='sage' element={<Sage/>}/>
        <Route path='jett' element={<Jett/>}/>
        <Route path='raze' element={<Raze/>}/>
        <Route path='astra' element={<Astra/>}/>
        <Route path='fade' element={<Fade/>}/>
        <Route path='chamber' element={<Chamber/>}/>
        

      </Route>
      <Route path='maps' element={<Maps/>}/>
      <Route path='skins' element={<Skins/>}/>
      <Route path='support' element={<Support/>}/>
      <Route path='weapons' element={<Weapons/>}/>
      <Route path='signin' element={<Signin/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='logout' element={<Logout/>}/>
  </Routes>
    )
  }


const App = () => {

  //----- useReducer hook -----//
  const [state, dispatch]= useReducer(reducer,initialState)

  return (
   <>
   <userContext.Provider value={{state, dispatch}}>
   <BrowserRouter >
    <Header/>
    <Routing/>
    <Footer/>
   </BrowserRouter>
   </userContext.Provider>

   </>
  )
}

export default App
