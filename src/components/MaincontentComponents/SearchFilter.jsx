import React, { useContext } from 'react'
import { IoSearch } from "react-icons/io5";
import { ThemeContext } from '../ThemeContext';

function SarchFilter({searchWord, setSearchWord, selectedRegion, setSelectedRegion}) {
    
    const{theme}=useContext(ThemeContext);

  return (
    
    <div className=" flex flex-col md:flex-row gap-2 justify-between p-3 w-full">
        <div  className={`${theme=="light"? 'bg-white text-darkGray':'bg-darkBlue text-white'} flex gap-2 align-middle text-sm`} >
            <div className="relative">
                <div className="absolute inset-y-0 left-0  flex items-center pointer-events-none px-1">
                    <IoSearch  className={theme=="light"?"text-darkGray":"text-white"} />
                </div>
                <input type="search" id="searchInput" value={searchWord}
                    placeholder= "Search for a country..." 
                    onChange={(e)=>setSearchWord(e.target.value)}
                    className={`${theme=="light"? "bg-white": "bg-darkBlue"} p-2 pl-5`} 
                />
            </div>
        </div>
        <div>
            <select name="regions" id="regions" 
            value={selectedRegion}
            onChange={(e)=>setSelectedRegion(e.target.value)}
            className={`${theme=="light"? "bg-white text-darkGray":" bg-darkBlue text-white"} p-2 rounded`}
            >
                <option value="">Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="americas">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceanian</option>
            </select>
        </div>
    </div>
  )
}

export default SarchFilter