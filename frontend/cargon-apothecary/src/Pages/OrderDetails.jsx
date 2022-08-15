import React,{useState,useEffect} from 'react'
import {useParams,useHistory} from 'react-router-dom'
import { Box,Paper,CircularProgress, Typography, Grid, Divider, AppBar, Toolbar,IconButton, Button } from "@mui/material";
import { ArrowBackIos } from '@mui/icons-material';
import axios from 'axios'
import OrderDetailsCard from '../Components/OrderDetailsCard';
import Appbar from '../Components/Appbar';

export default function OrderDetails() {
    const params=useParams()
    const navigator=useHistory()
    const handleBackClick=()=>{
        navigator("/orders")
      }
    const [loading,setLoading]=useState(true)
    const [data,setData]=useState(null)
    const [status,setStatus]=useState(null)
    const baseURL="https://cargon-postgres.herokuapp.com"
    const orderURL=`${baseURL}/order/${params.id}`

      const getData = async()=>{
        console.log(params)
        const res = await axios.get(orderURL)
        const stat=await axios.get(`${baseURL}/status/${params.id}`)
        setStatus(stat.data)
        console.log(stat.data.length)
        setData(res.data)
        setLoading(false)
      }
      useEffect(()=>{
        getData()
      },[])
  return (
    <Paper sx={{ minHeight: "100vh", width: "100vw" }}>
      <Appbar/>
      <Grid container>
       
     
        <Divider />
        <Grid item xs={12}>
        
        {loading && <Box sx={{width:"100%",height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center "}}> <CircularProgress /><Typography>Loading Order Details....</Typography></Box>}
          {!loading &&
           
              <Box sx={{margin:"10vh 2vw" }}>
                <OrderDetailsCard data={data} status={status}/>
              </Box>
         }
        </Grid>
 
      </Grid>
    </Paper>
  )
}
