import React,{useEffect, useState} from 'react';
import axios from 'axios';
export default function Result(){
    
        const [info, setInfo] = useState([]);
            useEffect(()=>{
            const senite =  axios.get(`https://6fbuq035i6.execute-api.us-west-1.amazonaws.com/dev/local`).then(res => {
              const persons = res.data;     
                setInfo(persons)
            })
            }, []);
    
    return(
        <>
         {info.products?.map(data=>{
               return(
                <tr>
                  <td>{data.name}</td>
                  <td>{data.state}</td>
                  <td>{data.local}</td>
                  <td>
                    <a href="#">{data.mail}</a>
                  </td>
                  <td>
                  {data.party}
                  </td>
                </tr>
               )
                    })}
        </>
    )
}