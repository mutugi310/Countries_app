import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import { ThemeContext } from "./ThemeContext";
//import germanyFlag from '../assets/images/1280px-Germany_Flag.png'
import useFetch from "./useFetch";
//import Country from "./MaincontentComponents/Country";

function CountryDitails() {
    //const url ='https://restcountries.com/v3.1/name/germany'
    const {theme} = useContext(ThemeContext)
    const navigate= useNavigate()
    const {countryName}= useParams()
    const {countriesData, loading, error} = useFetch(`https://restcountries.com/v3.1/name/${countryName}`)

    if(loading) return <h2>loading...</h2>;
    if(error) return <p>'Error:' {error.message}</p>
    const country = countriesData && countriesData[0]
    
  return (
   <div className={`${theme=='light'? 'bg-lightGray text-deepDarkBlueTX ' : 'bg-deepDarkBlueBG text-white '} min-h-screen w-full align-middle justify-center`}>
        <article className=" container w-11/12  mx-auto p-4">
            
            <div className="flex">
                <span className=" align-middle py-2 cursor-pointer" onClick={()=> navigate(-1)}><MdKeyboardBackspace className=""/></span> 
                <button onClick={()=> navigate(-1)}> Back</button>
                
            </div>
            {country? (
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full py-5 mx-auto ">
                <div className=" h-full" >
                    <img src={country?.flags?.svg} alt={`${country?.name?.common} flag`} className="size-fit" />
                </div>
                
                <div>
                    <h2 className="font-bold">{country?.name?.common}</h2>
                    
                    <div className="flex gap-3">
                        <div>
                            <p><span className="font-semibold">Native Name:</span> {country?.name?.native?.common} </p>
                            <p><span className="font-semibold">Population:</span>{country?.population}</p>
                            <p><span className="font-semibold">Region:</span>{country?.region}</p>
                            <p><span className="font-semibold">Sub Region:</span>{country?.subregion}</p>
                            <p><span className="font-semibold">Capital:</span>{country?.capital}</p>
                        </div>
                        <div>
                            <p><span className="font-semibold">Top Level Domain:</span> {country?.tld && country?.tld[0]}</p>
                            <p><span className="font-semibold">Currencies:</span> {country?.currencies && Object.values(country.currencies || {}).map((currency) => currency.name).join(", ")}</p>
                            <p><span className="font-semibold">Languages:</span>{country?.languages && Object.values(country?.languages).join(', ')}</p>
                        </div>
                    </div>
                </div>
                <div className="flex-col gap-2 sm:flex lg:flex">
                    <h2 className="font-semibold">Border countries:</h2>
                    <div>
                            {Array.isArray(country.borders) && country.borders.length > 0 ? (
                                country.borders.map((border) => (
                                <button
                                    key={border}
                                    onClick={() => navigate(`/country-details/${border}`)}
                                    className={
                                        theme === "light"
                                        ? "bg-white px-4 py-0.5 m-1 border-2"
                                        : "bg-darkBlue px-4 py-0.5 m-1"
                                    }
                                >
                                    {border}
                                </button>
                        ))
                        ) : (
                        <p>No border countries available.</p>
                        )}

                    
                    </div>
                </div>
            </section>)
            : <p>No country details available!</p>}
        </article>
    </div>
  )
}

export default CountryDitails