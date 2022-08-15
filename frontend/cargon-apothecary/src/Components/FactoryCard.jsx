import { Paper, Typography,Button ,Box, TextField} from '@mui/material'
import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import {useCart, useCartUpdate } from '../Hooks/CartContextProvider';
export default function FactoryCard({data}) {
    const navigator=useHistory()
    
   
  return (
    <Paper elevation={5} sx={{minWidth:{xs:"100%",md:"20%"},margin:"1vh 1vw",minHeight:"180px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} > 
        <Box component="img" src="https://i.postimg.cc/nhf7m3xz/49102.jpg" sx={{width:"250px",margin:"10px",cursor:"pointer"}} onClick={()=>navigator.push(`/products/${data.factory_id}`)}/>
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"flex-start",width:"100%"}}>
            <Box sx={{display:"flex",flexDirection:"column",justifyContent:"flex-start",width:"80%"}}>    
                    <Typography variant="h6" sx={{marginRight:"1rem",margin:"0 10px"}} color="primary.main">Factory #{data.factory_id}</Typography>   
                    <Typography variant="h6" sx={{marginRight:"1rem",margin:"0 10px"}} >{data.name}</Typography>
                    
                    <Typography variant="p" sx={{margin:"0 10px"}}>{data.address}</Typography>     
            </Box>
         
        </Box>
        <Box sx={{display:"flex",width:"50%",alignItems:"center",justifyContent:"space-between",margin:"1vh 10px"}}>
                <Button variant="contained" sx={{width:"100%",margin:"5px 0"}} onClick={()=>navigator.push(`/products/${data.factory_id}`)}>See Products</Button>
        </Box>
    </Paper>
  )
}