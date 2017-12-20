import React from 'react';


export default function Search(props) {
  const onSubmit = e => { 
    e.preventDefault()
    
  }
  
  return (
    <form onSubmit={onSubmit}>
      <input placeholder='Enter Value'/>
      <button className="search-linear" >Linear Search</button>
      <button className="search-binary" >Binary Search</button>
    </form>
  );
}