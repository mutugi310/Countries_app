import React from "react";
import {Routes, Route} from "react-router-dom"
import MainContent from "./components/MainContent";
import Header from "./components/Header"
import './App.css'
import CountryDitails from "./components/CountryDitails";



function App() {


  return (
    <>
     
        <Header></Header>
        <Routes>
          <Route path='/' element= {<MainContent/>}></Route>
          <Route path="/country-details/:countryName" element={<CountryDitails/>} />
        </Routes>
        
      
    </>
  )
}

export default App

