import react, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import Country from "./MaincontentComponents/Country";
import SarchFilter from "./MaincontentComponents/SearchFilter";
import useFetch from "./useFetch";
import SearchFilterCountries from "./MaincontentComponents/SearchFilterCountries";



function MainContent(){
    const{theme}=useContext(ThemeContext)
    const [searchWord, setSearchWord] = useState('');
    const [selectedRegion, setSelectedRegion]=useState('');
    const { countriesData, loading, error } = useFetch('https://restcountries.com/v3.1/all');
    const targetCountries = ['Germany', 'United States', 'Brazil', 'Iceland', 'Afghanistan', 'Åland Islands', 'Albania', 'Algeria'];
    const [filteredCountries, setFilteredCountries] = useState([]);
    
    useEffect(() => {
        if (countriesData) {
          let filtered = countriesData.filter(country =>
            targetCountries.includes(country.name.common)
          );
    
          if (searchWord) {
            filtered = countriesData.filter(country =>
              country.name.common.toLowerCase().includes(searchWord.toLowerCase())
            );
          }
    
          if (selectedRegion) {
            filtered = countriesData.filter(country =>
              country.region.toLowerCase() === selectedRegion.toLowerCase()
            );
          }
    
          filtered.sort((a, b) =>
            targetCountries.indexOf(a.name.common) - targetCountries.indexOf(b.name.common)
          );
    
          setFilteredCountries(filtered);
        }
      }, [countriesData, searchWord, selectedRegion]);
    
    return(
        <>
        <main className={`${theme=="light"? 'bg-lightGray text-deepDarkBlueTX ':'bg-deepDarkBlueBG text-white'}  p-0 m-auto min-h-screen w-full  `} >
           <div className="w-11/12 justify-center m-auto">
            <section className=" text-s" >
                <SarchFilter
                    searchWord={searchWord}
                    setSearchWord={setSearchWord}
                    selectedRegion={selectedRegion}
                    setSelectedRegion={setSelectedRegion}
                />
            </section>
            <section className=" gap-4 mx-auto">
                {loading && <h2>Loading...</h2>}
                {error && <p>Error: {error.message}</p>}
                {!searchWord && !selectedRegion ? (
                <Country countries={filteredCountries} />
                ) : (
                <SearchFilterCountries filteredCountries={filteredCountries} />
                )}
                
            </section>
          </div>
        </main>
        </>
    )
}

export default MainContent