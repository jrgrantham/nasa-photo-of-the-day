import React, { useState, useEffect } from "react";
import axios from 'axios';
import Title from './Components/Title';
import Date from './Components/Date';
import Header from './Components/Header';
import Image from './Components/Image';
import Description from './Components/Description';
import "./App.css";

const sourceApi = 'https://lambda-github-api-server.herokuapp.com/';

function App() {

  const [nasaData, setNasaData] = useState();

  useEffect(() => {
    axios.get(sourceApi)
      .then(response => {
        // console.log(response);
        // console.log(response.data);
        // console.log(response.data.title)
        setNasaData(response.data);
      })
      .catch(error => {
        
      })
    }
  , [])

  console.log(nasaData);
  // console.log(nasaData.title);

  if (nasaData) {
    return (
      <div className="App">
          <Header />
          <Title title={nasaData.title} />
          <Date date={nasaData.date} />
          <Image src={nasaData.hdurl} />
          <Description description={nasaData.explanation} />
      </div>
    );
    } else {
      return null;
    }
}

export default App;
