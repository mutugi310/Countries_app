import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../ThemeContext'
import { useNavigate } from 'react-router-dom'
//import useFetch from '../useFetch'
/* import germanyFlag from '../../assets/images/1280px-Germany_Flag.png'
import usaFlag from '../../assets/images/1280px-USA_Flag.png'
import brazilFlag from '../../assets/images/1280px-Brazil_Flag.png'
import icelandFlag from '../../assets/images/1280px-Iceland_Flag.png'
import afganisternFlag from '../../assets/images/1280px-Afganistern_Flag.png'
import alandIslandFlag from '../../assets/images/1280px-Aland-Island_Flag.png'
import albaniaFlag from '../../assets/images/1280px-Albania_Flag.png'
import algeriaFlag from '../../assets/images/1280px-Algeria_Flag.png'
 */

/* 
const countriesData = [
  { name: 'Germany',population: 81770900,region: 'Europe', capital: 'Berlin', flag: germanyFlag },
  { name: 'United States',population: 323947000,region: 'Americas', capital: 'Washington DC', flag: usaFlag },
  { name: 'Brazil',population: 206135893,region: 'Americas', capital: 'Brasilia',flag: brazilFlag },
  { name: 'Iceland',population:  334300,region: 'Europe', capital: 'Reykjavík', flag: icelandFlag },
  { name: 'Afganistern',population:  27657145,region: 'Asia', capital: 'Kabul', flag: afganisternFlag },
  { name: 'Aland Island',population: 28875,region: 'Europe', capital: 'Mariehamn', flag: alandIslandFlag },
  { name: 'Albania',population: 2886026,region: 'Europe', capital: 'Tirana',flag: albaniaFlag },
  { name: 'Algeria',population: 40400000,region: 'Africa', capital: 'Algiers',flag: algeriaFlag },
]; */

/* const targetCountries = [
  'Germany', 'United States', 'Brazil', 'Iceland', 'Afghanistan', 'Åland Islands', 'Albania', 'Algeria'
]; */

const Countries =({countries}) => {
  const {theme}=useContext(ThemeContext)
  const navigate= useNavigate();
 

  return (
  
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-0 w-full">
      {countries.map((country) => (
        <article key={country.name.common} className="flex flex-col rounded-lg shadow-md overflow-hidden w-full ">
          <div className='px-3 cursor-pointer'>
            <img src={country.flags.svg} alt={`${country.name.common} Flag`} onClick={()=> navigate(`country-details/${country.name.common}`)} className='w-full'/>
          </div>
          <section className={(theme=="light"? 'bg-lightGray text-deepDarkBlueTX px-5 pb-5':'bg-deepDarkBlueBG text-white px-5 pb-5')}>
            <h2 className='my-2 font-bold'>{country.name.common}</h2>
            <p><span className='font-semibold'>Population</span>: {country.population.toLocaleString()}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital?.[0]}</p>
          </section>
          </article>))
      }
    </section>
      
   
  )
}

export default Countries