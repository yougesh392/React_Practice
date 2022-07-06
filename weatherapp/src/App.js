import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
//http://api.openweathermap.org/data/2.5/weather?q=London&units=Metric&APIkey=1a0d83671cf18f8cc1c5cf4ec36ac06c
function App() {
  const [temp, setTemp] = useState("");
  const [desc, setDesc] = useState("");
  const [icon, setIcon] = useState("");
  const [isReady, setReady] = useState(false);
  const CITY = "karachi";
  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=karachi&units=Metric&APPID=1a0d83671cf18f8cc1c5cf4ec36ac06c`
    )
      .then((res) => res.json())
      .then((jsonResult) => {
        setTemp(jsonResult.main.temp);
        setDesc(jsonResult.weather[0].description);
        setIcon(jsonResult.weather[0].icon);
        setReady(true);
        // console.log(JSON.stringify(jsonResult));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isReady) {
    return (
      <>
        <div className="App">
          <p>Temperature: {temp}</p>
          <p>Description: {desc}</p>
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="Weather icon"
          />
        </div>
      </>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default App;
