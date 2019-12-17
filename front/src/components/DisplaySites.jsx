import React from 'react';

const DisplaySites = (infos) => {
  const { id, site_name, country, inscription_year} = infos
  return (
    <div>
      <p>{country}</p>
    </div>
  );
}

export default DisplaySites;