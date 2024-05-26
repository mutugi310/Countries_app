import React, { useEffect, useState } from 'react'
import axios, { isCancel } from 'axios'

function useFetch(url) {
  const [countriesData, setCountriesData]=useState([])
  const [loading, setLoading ]= useState(false)
  const [error, setError] = useState(null)

useEffect(() => {
  const source = axios.CancelToken.source() //create a cancel token

  const fechData= async ()=>{
    setLoading(true) //set loading to true before the request
    try {
      const response = await axios.get(url, {cancelToken: source.token}) //make request and attach a cancle token to the request
      setCountriesData(response.data)
    } catch (err) {
      if (axios.isCancel(err)) {
        console.log('Request canceled', err.message) //handle reqest cancelation errors separatly 
      } else {
        setError(err)
      }
    } finally{
      setLoading(false) 
    }
};
//call the fechData asyc function
fechData();

//claean up function for cancled request
 return ()=>{
  source.cancel('Request canceled by the user')
 };

}, [url])
return {countriesData,loading,error}
};

export default useFetch