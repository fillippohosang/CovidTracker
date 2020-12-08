import React, {useEffect, useState } from 'react';
import axios from "axios"
import '../App.css'
import NumberFormat from 'react-number-format'


const Indonesia = () => {
    const [jumlahKasus, setjumlahKasus] = useState("");
    const [meninggal, setMeninggal] = useState("");
    const [sembuh, setSembuh] = useState("");
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
      <div className = "center">
      <h1 className ="boxConfirmed">Confirmed <NumberFormat value={jumlahKasus} thousandSeparator={true}  displayType={'text'} /> Cases</h1>
      <h1 className ="boxDeaths">Deaths <NumberFormat value={meninggal} thousandSeparator={true} displayType={'text'}/> Cases</h1>
      <h1 className ="boxRecovered">Recovered <NumberFormat value={sembuh} thousandSeparator={true} displayType={'text'}/> Cases</h1>
      </div>
      </center></div>
  );
  
  };
  export default Indonesia;