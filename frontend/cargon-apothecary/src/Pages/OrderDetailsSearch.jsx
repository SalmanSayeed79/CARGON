import { Box, Button, TextField, Typography } from '@mui/material'
import React,{useState,useContext} from 'react'
import { useHistory } from 'react-router-dom'
import Appbar from '../Components/Appbar'
import PrevOrderCard from '../Components/PrevOrderCard'
import { usePrevOrder, usePrevOrderUpdate } from '../Hooks/PrevOrderContext'

export default function OrderDetailsSearch() {
    const [val,setVal]=useState(null)
    const navigator=useHistory()
    const prevOrder=usePrevOrder()
    console.log(prevOrder)
  return (
    <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100vw",minHeight:"100vh"}}>
        <Appbar idx={3}/>

        <Box sx={{width:"80%",minHeight:"30vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start"}}>
          <Typography variant="h4" sx={{margin:"20px 0"}}> 🔍 Verify by putting in the Order ID</Typography>
          <TextField label="Order ID" placeholder='Order ID' value={val} onChange={e=>setVal(e.target.value)} fullWidth/>
          <Button onClick={()=>navigator.push(`/orderdetails/${val}`)} variant="contained" fullWidth>Search</Button>
        </Box>
        <Box sx={{width:"80%",minHeight:"30vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start"}}>
          <Typography variant="h4"  sx={{margin:"20px 0"}}> 📱 Verify previous orders from this device</Typography>
          {prevOrder.map(a=><PrevOrderCard data={a}/>)}
        </Box>
       
    </Box>
  )
}
