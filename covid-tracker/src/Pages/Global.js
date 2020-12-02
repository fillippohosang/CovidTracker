import React, {useEffect, useState } from 'react';
import axios from "axios"

const Global = () => {
  const [confirmed, setConfirmed] = useState([]);
  const [deaths, setDeaths] = useState([]);
  const [recovered, setRecovered] = useState([]);
  useEffect(() => {
    axios 
     .get("https://covid19.mathdro.id/api")
     .then((response) =>

     { 
    setConfirmed(response.data.confirmed.value);
    setDeaths(response.data.deaths.value);
    setRecovered(response.data.recovered.value);
    })  
 }, []);


  return(

    <div>
    <h1>Confirmed {confirmed}</h1>
    <h1>Deaths {deaths}</h1>
    <h1>Recovered {recovered}</h1>
    </div>
    
);

};
export default Global;