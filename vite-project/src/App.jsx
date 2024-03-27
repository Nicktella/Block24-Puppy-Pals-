import React, { useState } from 'react';
import './App.css'; // Adjusted import path
import './index.css'; // Adjusted import path
import { puppyList } from './data.js'; // Adjusted import path

function App() { // Renamed App to Main
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const handleClick = (puppyId) => {
    setFeatPupId(puppyId);
  };

  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card"></div>
      <div className="puppy-list">
        {puppies.map((puppy) => (
          <p key={puppy.id} onClick={() => handleClick(puppy.id)}>
            {puppy.name}
          </p>
        ))}
      </div>
      {featPupId && (
        <div className="featured-puppy">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default App; // Renamed export to Main
