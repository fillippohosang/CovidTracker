import React, {useEffect, useState } from 'react';
import axios from "axios"
import '../App.css'

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

          <div className="center">
            <table>
               <thead>
                <tr>
                 <th className="boxNum">No</th>
                 <th className="boxProvince">Province</th>
                 <th className="boxConfirmedP">Confirmed</th>
                 <th className="boxDeathsP">Deaths</th>
                 <th  className="boxRecoveredP">Recovered</th>
                </tr>
                </thead>
                <tbody>
                  {province?.map((item, index) => {
                   return (
                    <tr key={index}>
                    <th className="boxNum" key={item.fid}>{index + 1}.</th>
                    <td className="boxProvince">{item.provinsi}</td>
                    <td className="boxConfirmedP">{item.kasusPosi}</td>
                    <td className="boxDeathsP">{item.kasusMeni}</td>
                    <td className="boxRecoveredP">{item.kasusSemb}</td>
                 </tr>
                )
                })}
              </tbody>
            </table></div>
 
 
)
}
export default Province;