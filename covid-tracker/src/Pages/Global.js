import React, {useEffect, useState } from 'react';
import axios from "axios"
import '../App.css'

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

    <div><center>
    <h1>Global Case</h1>
    <div className = "center">
    <h1 className ="boxConfirmed">Confirmed {confirmed} Cases</h1>
    <h1 className ="boxDeaths">Deaths {deaths} Cases</h1>
    <h1 className ="boxRecovered">Recovered {recovered} Cases</h1>
    </div>
    </center></div>
    
);

};

export default Global;