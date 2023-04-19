import { useEffect, useState } from 'react';
import Card from './Card';

const Countries = () => {
    const [countries, setCountries] = useState([]);

  useEffect(()=>{
    const fetchCountries=()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then((res)=>res.json())
        .then((data)=>setCountries(data));
    }
    fetchCountries();
  },[])
//   console.log(countries)
  return (
    <div>
        {countries.map((country,index)=>{
        return (
          <Card key={index} country={country} />
        )
      })}
    </div>
  )
}

export default Countries