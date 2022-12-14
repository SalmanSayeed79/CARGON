import React, { useEffect, useState } from "react";
import { Box,Paper,CircularProgress,TextField, Typography, Grid, Divider, AppBar, Toolbar,IconButton, Button } from "@mui/material";
import { ArrowBackIos, Delete, Edit, LineAxisOutlined } from "@mui/icons-material";
import { useHistory,useParams } from "react-router-dom";
import {useCart, useCartUpdate } from '../Hooks/CartContextProvider';
import axios from "axios"
export default function ProductDetails() {
  
  const navigator=useHistory();
  const params=useParams()
  const [data,setData]=useState()
  const [loading,setLoading]=useState(true)
  const [updateModalOpen,setUpdateModalOpen]=useState(false)

  const handleBackClick=()=>{
    navigator.push("/products")
  }

  const baseURL="https://cargon-postgres.herokuapp.com"

  const productURL=`${baseURL}/product/${params.id}`

  const getData = ()=>{
    console.log(params)
    axios.get(productURL).then(res=>{
      setData(res.data)
      setLoading(false)
    })
    //setLoading(false)
  }
  const updateCart=useCartUpdate()
    const cartItems=useCart()
    const [qty,setQty]=useState(0)
    const increaseCount=()=>{
        setQty(qty+1)
    }
    const decreaseCount=()=>{
        setQty(qty-1)
    }
    const addToCart=()=>{
        updateCart({
            "details":data,
            "qty":qty
        })
    }



  useEffect(getData,[])
  return (
    <Paper sx={{ minHeight: "100vh", width: "100vw" }}>
      <AppBar>
        <Toolbar color="primary.main">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleBackClick}
          >
            <ArrowBackIos />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Product Details
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container>
       
        <Grid item xs={2}></Grid>
        <Divider />
        <Grid item xs={8}>
       
        {loading && <Box sx={{width:"100%",height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center "}}> <CircularProgress /><Typography>Loading Product Details....</Typography></Box>}
          {!loading && <Box sx={{ marginTop: { xs: "7vh", md: "6.5vh" } }}>
            <Box sx={{display:"flex",padding:"2vh 0", alignItems:{xs:"center",md:"flex-end"},flexDirection:{xs:"column",md:"row"}}}>
              <Box component="img" src={data.image} sx={{width:{xs:"80%",md:"40%"},maxWidth:"300px"}}/>  
              <Box sx={{marginLeft:"2vw",width:{xs:"80%",md:"40%"} }}>
                <Box sx={{display:"flex",alignItems:"flex-end"}}>
                  
                  <Typography variant="h4" sx={{marginRight:"1rem"}} color="primary.main">{data.name}</Typography>
                  <Typography variant="p">{data.variant}</Typography>
                </Box>
                <Box sx={{display:"flex",flexDirection:"column"}}>
                  <Typography variant="p" sx={{marginRight:"1rem",fontWeight:500}} color="primary.dark">{data.chemicalName}</Typography>
                  <Typography variant="p" sx={{marginRight:"1rem",fontWeight:400}} >{data.intensity}</Typography>
                  <Typography variant="p" sx={{marginRight:"1rem",fontWeight:400}} >{data.brand}</Typography>
                </Box>
                <Box sx={{display:"flex",flexDirection:"column"}}>
                  <Typography variant="p" sx={{marginRight:"1rem",fontWeight:400}} color="primary.dark">Unit Price : {data.price} BDT</Typography>
                </Box>
                <Box sx={{display:"flex",flexDirection:{xs:"column",md:"row"},width:"80%",alignItems:"center",justifyContent:"space-between",margin:"1vh 0"}}>
                  
                  <Box sx={{display:"flex",width:{xs:"100%",md:"60%"}}}>
                      <Button variant="outlined" sx={{width:"50px"}} onClick={decreaseCount}>-</Button>
                      <TextField value={qty} onChange={e=>setQty(e.target.value)} sx={{width:"200px"}}/>
                      <Button variant="outlined" sx={{width:"50px"}} onClick={increaseCount}>+</Button>
                  </Box>
                  <Box sx={{display:"flex",flexDirection:"column"}}>
                    <Button variant="contained" sx={{width:{xs:"100%",md:"20%"},margin:"10px 0"}} onClick={addToCart}>Add</Button>
                  </Box>
                </Box>
              </Box>
            </Box>
           
            
            {/**INDICATIONS */}
            <Paper sx={{margin:"1vh 0",padding:"10px"}} elevation={3}>
              <Box sx={{display:"flex",flexDirection:"column",width:"100%",margin:"1rem 0",backgroundColor:"primary.main"}}>
                <Typography variant="h6" sx={{margin:"0.5rem 1rem",fontWeight:400}} >Indications</Typography>
              </Box>
              <Typography variant="p" sx={{margin:"0.5rem 1rem"}} >{data.indications}</Typography>
            </Paper>
            {/**Pharmacology */}
            <Paper sx={{margin:"1vh 0",padding:"10px"}} elevation={3}>
              <Box sx={{display:"flex",flexDirection:"column",width:"100%",margin:"1rem 0",backgroundColor:"primary.main"}}>
                <Typography variant="h6" sx={{margin:"0.5rem 1rem",fontWeight:400}} >Pharmacology</Typography>
              </Box>
              <Typography variant="p" sx={{margin:"0.5rem 1rem"}} >{data.pharmacology}</Typography>
            </Paper>
            {/**Dosage */}
            <Paper sx={{margin:"1vh 0",padding:"10px"}} elevation={3}>
              <Box sx={{display:"flex",flexDirection:"column",width:"100%",margin:"1rem 0",backgroundColor:"primary.main"}}>
                <Typography variant="h6" sx={{margin:"0.5rem 1rem",fontWeight:400}} >Dosage</Typography>
              </Box>
              <Typography variant="p" sx={{margin:"0.5rem 1rem"}} >{data.dosage}</Typography>
            </Paper>
            {/**Adminstration */}
            <Paper sx={{margin:"1vh 0",padding:"10px"}} elevation={3}>
              <Box sx={{display:"flex",flexDirection:"column",width:"100%",margin:"1rem 0",backgroundColor:"primary.main"}}>
                <Typography variant="h6" sx={{margin:"0.5rem 1rem",fontWeight:400}} >Adminstration</Typography>
              </Box>
              <Typography variant="p" sx={{margin:"0.5rem 1rem"}} >{data.adminstration}</Typography>
            </Paper>
            {/**Interaction */}
            <Paper sx={{margin:"1vh 0",padding:"10px"}} elevation={3}>
              <Box sx={{display:"flex",flexDirection:"column",width:"100%",margin:"1rem 0",backgroundColor:"primary.main"}}>
                <Typography variant="h6" sx={{margin:"0.5rem 1rem",fontWeight:400}} >Interaction</Typography>
              </Box>
              <Typography variant="p" sx={{margin:"0.5rem 1rem"}}> {data.interaction}</Typography>
            </Paper>
            {/**Side Effects */}
            <Paper sx={{margin:"1vh 0",padding:"10px"}} elevation={3}>
              <Box sx={{display:"flex",flexDirection:"column",width:"100%",margin:"1rem 0",backgroundColor:"primary.main"}}>
                <Typography variant="h6" sx={{margin:"0.5rem 1rem",fontWeight:400}} >Side Effects</Typography>
              </Box>
              <Typography variant="p" sx={{margin:"0.5rem 1rem"}} >{data.side_effects}</Typography>
            </Paper>
            {/**Precautions and warnings */}
            <Paper sx={{margin:"1vh 0",padding:"10px"}} elevation={3}>
              <Box sx={{display:"flex",flexDirection:"column",width:"100%",margin:"1rem 0",backgroundColor:"primary.main"}}>
                <Typography variant="h6" sx={{margin:"0.5rem 1rem",fontWeight:400}} >Precautions and warnings</Typography>
              </Box>
              <Typography variant="p" sx={{margin:"0.5rem 1rem"}} >{data.precautions}</Typography>
            </Paper>
            {/**Storage Conditions */}
            <Paper sx={{margin:"1vh 0",padding:"10px"}} elevation={3}>
              <Box sx={{display:"flex",flexDirection:"column",width:"100%",margin:"1rem 0",backgroundColor:"primary.main"}}>
                <Typography variant="h6" sx={{margin:"0.5rem 1rem",fontWeight:400}} >Storage Conditions</Typography>
              </Box>
              <Typography variant="p" sx={{margin:"0.5rem 1rem"}} >{data.storage}</Typography>
            </Paper>


            

          </Box>}
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </Paper>
  );
}
