import React, { useContext, useEffect, useState } from "react";
import CountUp from "react-countup";
import { Box, Typography, Grid,CircularProgress, Paper, Divider, Select, MenuItem, TextField,Button } from "@mui/material";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import OrderTable from "../Components/OrderTable";
import axios from 'axios'
import OrderCard from "../Components/Orders/OrderCard";
import { FactoryIDContext } from "../Context/IDContextProvider";
export default function Orders() {
const factoryIDSaved=useContext(FactoryIDContext)

  const baseURL="https://cargon-postgres.herokuapp.com"
  //const baseURL="http://localhost:8081"
  const orderURL=`${baseURL}/orders/factory/${factoryIDSaved}`
  const totalOrderURL=`${baseURL}/ordercount`
  const todayOrderURL=`${baseURL}/ordercount`
  const filledOrderURL=`${baseURL}/ordercount`

  const[totalOrder,setTotalOrder]=useState(null)
  const[orderToday,setOrderToday]=useState(null)
  const[filledOrder,setFilledOrder]=useState(null)
  const[orderList,setOrderList]=useState([])

  const[cardLoading,setCardLoading]=useState(true)
  const[loading,setLoading]=useState(true)
  

  const getCardInfo=async ()=>{
    axios.get(totalOrderURL).then(res=>{
      setTotalOrder(res.data)
      setCardLoading(false)
    })
    axios.get(todayOrderURL).then(res=>{
      setOrderToday(res.data)
    })
    axios.get(filledOrderURL).then(res=>{
      setFilledOrder(res.data)
      
    })
    
  }
  const getOrders=async ()=>{
    console.log(orderURL)
    axios.get(orderURL).then(res=>{
      console.log(res.data)
      setOrderList(res.data)
      setLoading(false)
    })
  }
  useEffect(()=>{
    getCardInfo()
    getOrders()
  },[])

  return (
    <Paper sx={{ minHeight: "100vh", width: "100vw" }}>
      <Navbar />
      <Grid container>
        <Grid item xs={2}>
          <Sidebar active={2} />
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
            📦 Order Management
            </Typography>
            <Box sx={{display:"flex",flexWrap:"wrap",width:"100%",alignItems:"flex-start",justifyContent:"flex-start"}}>
            <Paper elevation={5} sx={{display:"flex",flexDirection:"column",width:{xs:"90%",md:"25%"},minHeight:"15vh",marginTop:"2vh",marginRight:"2vw",alignItems:"flex-start",justifyContent:"center",backgroundColor:"success.light"}}>
              <Box sx={{marginLeft:"20px"}}>
              
              <Typography variant="h6" >	&#128176; Total Orders</Typography>
              {!cardLoading && <Typography variant="h2" ><CountUp start={0} duration={1} end={totalOrder} ></CountUp></Typography>}
              {cardLoading && <CircularProgress/>}
              </Box>
            </Paper>
            <Paper elevation={5} sx={{display:"flex",flexDirection:"column",width:{xs:"90%",md:"25%"},minHeight:"15vh",marginTop:"2vh",marginRight:"2vw",alignItems:"flex-start",justifyContent:"center",backgroundColor:"secondary.light"}}>
              <Box sx={{marginLeft:"20px"}}>
              
              <Typography variant="h6" >&#128197; Orders Today</Typography>
              {!cardLoading && <Typography variant="h2" ><CountUp start={0} duration={1} end={totalOrder} ></CountUp></Typography>}
              {cardLoading && <CircularProgress/>}
              </Box>
            </Paper>
              <Paper elevation={5} sx={{display:"flex",flexDirection:"column",width:{xs:"90%",md:"25%"},minHeight:"15vh",marginTop:"2vh",marginRight:"2vw",alignItems:"flex-start",justifyContent:"center",backgroundColor:"primary.light"}}>
              <Box sx={{marginLeft:"20px"}}>
              
              <Typography variant="h6" >&#10004; Orders Fulfilled</Typography>
              {!cardLoading && <Typography variant="h2" ><CountUp start={0} duration={1} end={totalOrder} ></CountUp></Typography>}
              {cardLoading && <CircularProgress/>}
              </Box>
            </Paper>
           
            </Box>
              <Box sx={{marginTop:"2vh",width:{xs:"90%",md:"82%"}}}>
                {loading && <Box sx={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center "}}> <CircularProgress /><Typography>Loading Order Data....</Typography></Box>}
                {!loading && <Box>{orderList.map(a=><OrderCard order_id={a}/>)}</Box>}
                {!loading && orderList.length==0 && <Paper elevation={4} sx={{width:"100%",minHeight:"10vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
                  <Typography variant="h6" sx={{fontSize:{xs:"24px",md:"32px"}}} color="error.main">No orders available to see</Typography>
                </Paper>}
              </Box>

            
          </Box>
        </Grid>
       
      </Grid>
    </Paper>
  );
}
