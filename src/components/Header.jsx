import React, { useContext } from 'react'
import { IoMoonOutline } from "react-icons/io5";
import { ThemeContext } from './ThemeContext';
import { IoMoon } from "react-icons/io5";





function Header() {
   const{theme,changeTheme}= useContext(ThemeContext)
  return (
    <>
      
      <header className={`${theme=="light"? 'bg-white text-darkBlue':'bg-darkBlue text-white'} w-full`}>
        <div className='flex justify-between py-5 px-5 w-11/12 m-auto'>
          <h1 className="text-2ml font-bold">Where is your World?</h1>
          <div className='flex gap-2 cursor-pointer'onClick={changeTheme}>
            <span >
              {theme=="light"? <IoMoonOutline />: <IoMoon className='text-white' />}
            </span>
            <span  >
              { theme =="light"?"Light Mode" : "Dark Mode"}
            </span>
          </div>
        </div>
      </header>
    </>

  )
}

export default Header