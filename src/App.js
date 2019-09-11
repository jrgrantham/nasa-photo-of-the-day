import React, { useEffect } from "react";
import axios from 'axios';
import "./App.css";

function App() {

  useEffect(() => {
    axios.get('https://lambda-github-api-server.herokuapp.com/')
      .then(response => {
        console.log(response)
      })
    }
  , [])

  return (
    <div className="App">
      <div>
        here goes the TITLE
      </div>
      <div>
        here goes the DATE
      </div>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun!
      </p>
    </div>
  );
}

export default App;
