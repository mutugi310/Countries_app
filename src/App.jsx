import React, { useState } from "react";
import {Routes, Route} from "react-router-dom"
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import './App.css'
import CountryDitails from "./components/CountryDitails";




function App() {
  const [view, setView] = useState('home'); // 'home' or 'filtered'

  return (
    <>
     
        <Header setView={setView}></Header>
        <Routes>
          <Route path='/' element= {<MainContent view={view} setView={setView} />}></Route>
          <Route path="/country-details/:countryName" element={<CountryDitails/>} />
        </Routes>
        
      
    </>
  )
}

export default App

