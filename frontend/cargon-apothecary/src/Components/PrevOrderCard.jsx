import { Paper,Box,Typography } from '@mui/material'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'
import QRCode from 'react-qr-code'

export default function PrevOrderCard({data}) {
    const [val,setVal]=useState(`https://cargon-apothecary.firebaseapp.com/orderdetails/${data.order_id}`)
    const navigator=useHistory()
  return (
    <Paper elevation={5} sx={{width:"100%",minHeight:"10vh",display:"flex",alignItems:"center",justifyContent:"space-between"}} >
        <Box sx={{display:'flex',flexDirection:"column",alignItems:"center",margin:"10px"}}>
            <Typography sx={{fontSize:{xs:"32px",md:"50px"}}}>{data.order_id}</Typography>
            <Typography sx={{fontSize:{xs:"13px",md:"16px"}}}>Order ID</Typography>
        </Box>
        <a href={val} target="_blank">
            <Box sx={{margin:"10px",cursor:"pointer"}}>
                <QRCode value={val} size={75}/>
            </Box>
        </a>
    </Paper>
  )
}
