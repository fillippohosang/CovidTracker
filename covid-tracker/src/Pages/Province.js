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

            <table>
               <thead>
                <tr>
                 <th>|No|</th>
                 <th>Province|</th>
                 <th>Confirmed|</th>
                 <th>Deaths|</th>
                 <th>Recovered|</th>
                </tr>
                </thead>
                <tbody>
                  {province?.map((item, index) => {
                   return (
                    <tr key={index}>
                    <th key={item.fid}>{index + 1}.</th>
                    <td>{item.provinsi}</td>
                    <td>{item.kasusPosi}</td>
                    <td>{item.kasusMeni}</td>
                    <td>{item.kasusSemb}</td>
                 </tr>
                )
                })}
              </tbody>
            </table>
 
)
}
export default Province;