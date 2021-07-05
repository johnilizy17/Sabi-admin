import React,{useEffect, useState} from 'react';
import axios from 'axios';
import SearchIcon from "../../../components/Icons/HeaderIcons/SearchIcon";
import {
  InputGroupAddon,
  Input,
  InputGroupText,
} from "reactstrap";  
export default function Searching(){
  return(
        <>
        <div style={{display:"flex", flexDirection:"row"}}>
            <InputGroupAddon addonType="prepend">
                  <InputGroupText >
                    <SearchIcon />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  id="search-input"
                  className="input-transparent"
                  placeholder=" Search for the Federal legislature......."
                />
            </div>
         
        </>
    )
}