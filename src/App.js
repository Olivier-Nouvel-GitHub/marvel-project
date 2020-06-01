import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';

export default CharList;


function DisplayedChars(props) {
  return (
    <div className="displayedChar">
      <div className="id">{props.apiResult.id}</div>
      <div className="name">{props.apiResult.name}</div>
      <div className="description">{props.apiResult.description}</div>
      <div className="img"><img src={`${props.apiResult.thumbnail.path}.${props.apiResult.thumbnail.extension}`} alt="personnage Marvel" /></div>
    </div>
  )
}


function CharList() {
  const [chars, setChars] = useState([]); // State

  useEffect(() => {
    Axios.get(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=81cfb00bcab273da1a435081f267f362&hash=cf8e35b69d77e19e42319e39a7839166`)
      .then(res => {
        const characs = res.data.data.results;
        setChars(characs); 
      })
    })

    return (
      <ul>
        {chars.map(char => <li><DisplayedChars apiResult={char} /></li>)}
      </ul>)
  }

