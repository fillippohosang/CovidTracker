import React, {useEffect, useState } from 'react';
import axios from "axios"
import '../App.css'
import NumberFormat from 'react-number-format'


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
    <h1 className ="boxConfirmed">Confirmed <NumberFormat value={confirmed} thousandSeparator={true} /> Cases</h1>
    <h1 className ="boxDeaths">Deaths <NumberFormat value={deaths} thousandSeparator={true} displayType={'text'}/> Cases</h1>
    <h1 className ="boxRecovered">Recovered <NumberFormat value={recovered} thousandSeparator={true} displayType={'text'}/> Cases</h1>
    </div>
    </center></div>
    
);

};

export default Global;