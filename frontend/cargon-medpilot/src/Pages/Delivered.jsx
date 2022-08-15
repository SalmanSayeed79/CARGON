import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { Box, Typography, Grid,CircularProgress, Paper, Divider, Select, MenuItem, TextField,Button } from "@mui/material";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import OrderTable from "../Components/OrderTable";
import axios from 'axios'
import OrderCard from "../Components/Orders/OrderCard";
export default function Orders() {

  const baseURL="https://cargon-postgres.herokuapp.com"
  const orderURL=`${baseURL}/orders`
  const totalOrderURL=`${baseURL}/orderCount`
  const todayOrderURL=`${baseURL}/orderCount`
  const filledOrderURL=`${baseURL}/orderCount`

  const[totalOrder,setTotalOrder]=useState(null)
  const[orderToday,setOrderToday]=useState(null)
  const[filledOrder,setFilledOrder]=useState(null)
  const[orderList,setOrderList]=useState([])

  const[cardLoading,setCardLoading]=useState(true)
  const[loading,setLoading]=useState(true)
  

  const getCardInfo=async ()=>{
    axios.get(totalOrderURL).then(res=>{
      setTotalOrder(res.data)
    })
    axios.get(todayOrderURL).then(res=>{
      setOrderToday(res.data)
    })
    axios.get(filledOrderURL).then(res=>{
      setFilledOrder(res.data)
    }).then(()=>setCardLoading(false))
    
  }
  const getOrders=async ()=>{
    axios.get(orderURL).then(res=>{
      console.log(res.data)
      setOrderList(res.data)
      setLoading(false)
    })
  }
  useEffect(()=>{
    //getCardInfo()
    getOrders()
  },[])

  return (
    <Paper sx={{ minHeight: "100vh", width: "100vw" }}>
      <Navbar />
      <Grid container>
        <Grid item xs={2}>
          <Sidebar active={3} />
        </Grid>
        <Divider />
        <Grid item xs={10} md={10}>
          <Box>
            <Typography
              variant="h3"
              color="primary"
              sx={{
                marginTop: "1rem",
                fontSize: { xs: "36px", md: "56px" },
                textAlign: "left",
              }}
            >
              Order Management
            </Typography>
           
              <Box sx={{marginTop:"2vh",width:{xs:"90%",md:"82%"}}}>
                {loading && <Box sx={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center "}}> <CircularProgress /><Typography>Loading Order Data....</Typography></Box>}
                {!loading && <Box>{orderList.map(a=><OrderCard data={a}/>)}</Box>}
              </Box>

            
          </Box>
        </Grid>
        
      </Grid>
    </Paper>
  );
}
