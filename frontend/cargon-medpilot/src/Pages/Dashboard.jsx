import React, { useContext,useEffect,useState } from "react";
import { Box, Typography, Grow,Button ,Grid,Container,Link, Divider, Paper, CircularProgress } from "@mui/material";
import CountUp from "react-countup";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import TopDistributor from "../Components/Dashboard/TopDistributor";
import RecentOrders from "../Components/Dashboard/RecentOrders";
import {SalesChart } from "../Components/Dashboard/SalesChart";
import { OrderChart } from "../Components/Dashboard/OrdersChart";
import {GridLoader} from 'react-spinners'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Dashboard() {
  const [data,setData]=useState(null)
  const [loading,setLoading]=useState(false)
  
  const getOrderCount=()=>{
    // fetch("http://localhost:8034/retailers")
    //   .then((a) => a.json())
    //   .then((a) => console.log(a))
    //   .then(() => setLoading(false));
  }
  useEffect(()=>{
    setTimeout(()=>{
      getOrderCount()
    },5000)
  },[])
  
  return (
     <Paper sx={{ minHeight: "100vh", width: "100vw" }}>
      <Navbar />
      <Grid
        container
        spacing={0}
        justifyContent="center"
        alignItems="flex-start"
        gap={0}
      >
        <Grid item xs={2}>
          <Sidebar active={1} />
        </Grid>

        <Grid item xs={10}>
          {/**First */}
          <Box sx={{display: "flex",flexDirection:{xs:"column",md:"row"},alignItems: "center",justifyContent: "center",width: "100%",minHeight: "100vh",backgroundColor:{xs:"#b39ddb",md:"white"}}}>
            <Box sx={{width:"50%",height:{xs:"40vh",md:"100vh"},display:{xs:"flex"},alignItems:"center",justifyContent:"center"}}>
              <Box
                component="img"
                src="https://i.postimg.cc/j5n5dp4y/Deliverymdpi.png"
                sx={{ width:{xs:"75vw", md:"25vw"} }}
                
              />
            </Box>
            <Box sx={{ width: {xs:"100%",md:"50%"},display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center" }} >

              <Box sx={{ width: {xs:"80%",md:"80%"} ,margin:"2vh 0",marginLeft:{md:"2vw"}}}>
                  <Typography
                  variant="h2"
                  sx={{ fontSize: {xs:"48px",md:"64px"}, fontWeight: "bold",color:"#673ab7" }}
                  >
                  MedPilot
                  </Typography>
                  <Typography variant="p" sx={{ maxWidth: "40%", fontSize: {xs:"16px",md:"22px"} }}>
                  Cargon service for product distributors. That helps manage all the necessities for a distributor including live tracking of riders
                  </Typography>
              </Box>
              
            </Box>
          </Box>
          {/**Second */}
          <Box sx={{display: "flex",flexDirection:{xs:"column",md:"row"},alignItems: "center",justifyContent: "center",width: "100%",minHeight: "100vh",backgroundColor:{md:"white"}}}>
            <Box sx={{ width: {xs:"100%",md:"50%"},display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center" }} >
              <Box sx={{ width: {xs:"80%",md:"100%"} ,margin:"2vh 0",marginLeft:{md:"2vw"}}}>
                  <Typography variant="h2" sx={{ fontSize: {xs:"48px",md:"64px"}, fontWeight: "bold",color:"#673ab7" }} >Track Orders</Typography>
                  <Typography variant="p" sx={{ maxWidth: "40%", fontSize: {xs:"16px",md:"22px"} }}>Track the orders that you are currently handling</Typography>
                  <Box sx={{display:"flex",alignItems:"center",justifyContent:{xs:"center",md:"flex-start"},flexWrap:"wrap", margin:"2vh 0",width: {xs:"80vw",md:"40vw"}}}>
                    <Button variant="contained"color="primary"><Typography sx={{fontSize:{xs:"18px",md:"28px"},fontWeight:"bold"}}>TRACK</Typography></Button>
                  </Box>
              </Box>
            </Box>
            <Box sx={{width:"50%",height:{xs:"40vh",md:"100vh"},display:{xs:"flex"},alignItems:"center",justifyContent:"center"}}>
              <Box component="img" src="https://i.postimg.cc/ZnxgxLHp/undraw-Progress-overview-re-tvcl.png" sx={{ width:{xs:"75vw", md:"25vw"} }}/>
            </Box>
          </Box>
          {/**Third */}
          <Box sx={{display: "flex",flexDirection:{xs:"column",md:"row"},alignItems: "center",justifyContent: "center",width: "100%",minHeight: "100vh",backgroundColor:{xs:"#b39ddb",md:"white"}}}>
            <Box sx={{width:"50%",height:{xs:"40vh",md:"100vh"},display:{xs:"flex"},alignItems:"center",justifyContent:"center"}}>
              <Box component="img" src="https://i.postimg.cc/GtCVDfFb/undraw-Order-delivered-re-v4ab.png" sx={{ width:{xs:"75vw", md:"25vw"} }}/>
            </Box>
            <Box sx={{ width: {xs:"100%",md:"50%"},display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center" }} >
              <Box sx={{ width: {xs:"80%",md:"100%"} ,margin:"2vh 0",marginLeft:{md:"2vw"}}}>
                  <Typography variant="h2" sx={{ fontSize: {xs:"48px",md:"64px"}, fontWeight: "bold",color:"#673ab7" }} >Deliver Orders</Typography>
                  <Typography variant="p" sx={{ maxWidth: "40%", fontSize: {xs:"16px",md:"22px"} }}>Deliver Orders and mark them as delivered</Typography>
              </Box>
              <Box sx={{display:"flex",alignItems:"center",justifyContent:{xs:"center",md:"flex-start"},flexWrap:"wrap", margin:"2vh 0",width: {xs:"80vw",md:"40vw"}}}>
               <Button variant="contained"color="primary"><Typography sx={{fontSize:{xs:"18px",md:"28px"},fontWeight:"bold"}}>DELIVER</Typography></Button>
              </Box>
            </Box>
            
          </Box>

        </Grid>
      </Grid>
    </Paper>

  );
}
