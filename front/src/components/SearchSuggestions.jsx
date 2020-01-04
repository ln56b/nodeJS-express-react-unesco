import React from 'react';
import { Link } from 'react-scroll';
import './SearchSuggestions.css';

const SearchSuggestions = ({ query, results }) => {
  const options = results.map(res => {
    if(res.name.includes(query)) {
      return (
        <Link activeClass = "active" to = {res.name} className = "suggestions">
          <div className = "suggestion">{res.name}</div>
        </Link>
      )
    }
  })
  return (
  <div className = "result">{options}</div>
  );
}

export default SearchSuggestions;