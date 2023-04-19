import React from 'react'

const Card = (props) => {
    const {name, capital,flags, region, population, timezones} = props.country;    
  return (
    <div>
        <img src={flags.png} alt='flag' />
        <h1>Country Name: {name.common}</h1>
        <p>Capital: {capital}</p>
        <p>Region: {region}</p>
        <b>Population: {population}</b><br />
        <i>Time Zone: {timezones}</i>
        <hr />
    </div>
  )
}

export default Card