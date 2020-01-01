import React from 'react';
import './DisplayCountry.css';

const DisplayCountry = ({ countries }) => {
  return (
    <div>
      <div className="header-container"> 
        <h2 className="list-h2"> Unesco World Heritage List </h2>
      </div>
        {countries
        .map(country =>   
        <h4 className="country-name">{country.name}</h4>
        )
        }
    </div>
  );
}

export default DisplayCountry;