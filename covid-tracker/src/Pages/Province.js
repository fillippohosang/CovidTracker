import React, {useEffect, useState } from 'react';
import axios from "axios"
import '../App.css'
import NumberFormat from 'react-number-format'


const Province = () => {
    const [province, IndonesiaList] = useState([]);
    useEffect(() => {
      axios
      .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
      .then(response => {
        IndonesiaList(response.data.data)
         })

    }, []);

return (
          <div><h1><center>Province Case</center></h1>
          <div className="center"> 
            <table>
               <thead>
                <tr>
                 <th className="boxNum">No</th>
                 <th className="boxProvince">Province</th>
                 <th className="boxConfirmedP">Confirmed</th>
                 <th className="boxDeathsP">Deaths</th>
                 <th className="boxRecoveredP">Recovered</th>
                </tr>
                </thead>
                <tbody>
                  {province?.map((item, index) => {
                   return (
                    <tr key={index}>
                    <th className="boxNum" key={item.fid}>{index + 1}.</th>
                    <td className="boxProvince">{item.provinsi}</td>
                    <td className="boxConfirmedP"> <NumberFormat value={item.kasusPosi} thousandSeparator={true} displayType={'text'}/> </td>
                    <td className="boxDeathsP"> <NumberFormat value={item.kasusMeni} thousandSeparator={true} displayType={'text'}/> </td>
                    <td className="boxRecoveredP">  <NumberFormat value={item.kasusSemb} thousandSeparator={true} displayType={'text'}/> </td>
                 </tr>
                )
                })}
              </tbody>
            </table></div></div>
 
 
)
}
export default Province;