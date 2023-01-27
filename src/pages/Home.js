import React, { useState } from 'react'
import axios from 'axios';
import { Button, Card, TextField } from '@mui/material';
import {Stack } from '@mui/system';
const Home = () => {
    const [data,setData]=useState("");
    const [cityName,setCityName]=useState('')
    const apiKey = "f56f24967aaf51182d1d4df628297c6d";
   const getData=async(cityName)=>{

    if (!cityName) return  
                
     const URL=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
      await axios.get(URL)
       .then((res)=>setData(res.data))
       .catch((err)=>console.log("err",err))
   }
    const handleClick=()=>{
        getData(cityName);
    }
  return (
    <div style={{display:"flex",flexDirection:"column",margin:"18rem 35rem 0 35rem"}}>
    <Stack  sx={{width:{lg:"400px",md:"300px",xs:"150px"}}}>
        <Stack style={{marginBottom:"2rem"}}>
        <TextField value={cityName} onChange={(e)=>setCityName(e.target.value)}/>
        </Stack>
        <Button  variant='contained'  onClick={handleClick}>Search</Button>
    </Stack>
    <Stack sx={{maxWidth:"600px"  , maxHeight:"200px",}} mt="5rem"  >
        
            {
              Object.keys(data).length>0&&
               <Card sx={{width:{lg:"500px",md:"200px", xs:"150px"},height:"200px"  }}>
                 <h2>{data.name}</h2>
                 <h3>{((data?.main?.temp)-273.15).toFixed(2)}°C</h3>
              </Card>
            }
      
    </Stack>
    </div>
   
  )
}

export default Home
