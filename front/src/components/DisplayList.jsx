import React from 'react';
import './DisplayList.css';

const DisplayList = ({ siteInfos }) => {
  return (
    <div>
      <div className="header-container"> 
        <h2 className="list-h2"> Unesco World Heritage List </h2>
      </div>
      <ul className="list-container">
        {siteInfos
        .map(site =>   
        <li className="list-name">{site.site_name}</li>
        )
        }
      </ul>
    </div>
  );
}

export default DisplayList;