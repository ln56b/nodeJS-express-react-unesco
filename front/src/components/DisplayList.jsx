import React from 'react';

const DisplayList = ({ siteInfos }) => {
  return (
    <div>
      <ul>
        {siteInfos
        .map(site => 
        <li>{site.site_name}</li>)
        }
      </ul>
    </div>
  );
}

export default DisplayList;