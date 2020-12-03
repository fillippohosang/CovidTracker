import React, {useEffect, useState } from 'react';
import axios from "axios"
import '../App.css'

const Indonesia = () => {
    const [jumlahKasus, setjumlahKasus] = useState([]);
    const [meninggal, setMeninggal] = useState([]);
    const [sembuh, setSembuh] = useState([]);
    useEffect(() => {
      axios 
       .get("https://indonesia-covid-19.mathdro.id/api")
       .then((response) =>
  
       { 
      setjumlahKasus(response.data.jumlahKasus);
      setMeninggal(response.data.meninggal);
      setSembuh(response.data.sembuh);
      })  
   }, []);

    return(
  
      <div><center>
      <h1>Indonesia Case</h1>
      <div className = "box">
      <h1 className ="boxConfirmed">Confirmed {jumlahKasus}</h1>
      <h1 className ="boxDeaths">Deaths {meninggal}</h1>
      <h1 className ="boxRecovered">Recovered {sembuh}</h1>
      </div>
      </center></div>
      
  );
  
  };
  export default Indonesia;