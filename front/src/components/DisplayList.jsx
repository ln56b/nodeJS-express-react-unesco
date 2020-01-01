import React from 'react';

const DisplayList = ({ siteInfos }) => {
  return (
    <div>
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