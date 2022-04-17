import React from "react";
import { useState } from "react";
import axios from "axios";
const RandomJokesApi = () => {
  const [userData, setUserData] = useState({});
  const [text, setText] = useState("Click the button to get a joke");

  const fetchData = async () => {
    const response = await axios.get("https://api.chucknorris.io/jokes/random");
    setUserData(response.data);
  };
  const clickHandler = () => {
    fetchData();
    setText("");
  };
  return (
    <div>
      <img src="https://i.ibb.co/5F5F532/chuck.png" alt="ChuckNorris" />
      <div id="display-joke" className="card">
        <span className="random-text">{text}</span>
        <span>{userData.value}</span>
      </div>
      <button onClick={clickHandler} className="glow-on-hover">
        Get a Joke!
      </button>
    </div>
  );
};

export default RandomJokesApi;
