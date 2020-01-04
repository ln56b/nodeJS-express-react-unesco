import React, {Fragment} from 'react';
import './DisplaySites.css';

const DisplaySites = ({ siteInfos }) => {
  const { id, site_name, country, inscription_year, main_pic, pic2, pic3} = siteInfos
  return(
    <Fragment>
      <div className="sites-header-container"> 
        <h2 className="sites-h2"> Site List </h2>
      </div>
      <div className="container">
        {siteInfos
        .map(site => 
          <figure className="site-figure">
            <img className="site_pic" src={site.main_pic} />
            <h4 className="site-name">{site.site_name}</h4>
            <p className="site-country">{site.country}</p>
          </figure>
          )}
      </div>
    </Fragment>
  )
}

export default DisplaySites;