import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";

const sourceApi = 'https://lambda-github-api-server.herokuapp.com/';

function App() {

  const [nasaData, setNasaData] = useState();
  

  useEffect(() => {
    axios.get(sourceApi)
      .then(response => {
        console.log(response)
      })
    }
  , [])

  return (
    <div className="App">
      <div>
        <h1>here goes the TITLE</h1>
      </div>
      <div>
        <h3>here goes the DATE</h3>
      </div>
      <div>
        here goes the IMG
      </div>
      <div>
        <h2>Explanation</h2>
        <p>
          Read through the instructions in the README.md file to build your NASA
          app! Have fun!
        </p>
      </div>
    </div>
  );
}

export default App;
