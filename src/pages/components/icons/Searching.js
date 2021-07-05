import React,{useEffect, useState} from 'react';
import axios from 'axios';
import SearchIcon from "../../../components/Icons/HeaderIcons/SearchIcon";
import {
  InputGroupAddon,
  Input,
  InputGroupText,
} from "reactstrap";  
export default function Searching(){
    const [info, setInfo] = useState([]);
        useEffect(()=>{
        const senite =  axios.get(`https://6fbuq035i6.execute-api.us-west-1.amazonaws.com/dev/local`).then(res => {
          const persons = res.data;     
            setInfo(persons)
        })
        }, []);
    return(
        <>
        <div style={{display:"flex", flexDirection:"row"}}>
            <SearchIcon  />
            <InputGroupAddon addonType="prepend">
                  <InputGroupText >
                  <Input
                  id="search-input"
                  className="input-transparent"
                  placeholder=" Search for the Representative legislature......."
                  style={{
                    width:"100%"
                }}
                />     
                  </InputGroupText>
                </InputGroupAddon>  
            </div>
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