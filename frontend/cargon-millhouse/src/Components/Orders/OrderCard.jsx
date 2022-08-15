import { AddAPhoto, ArrowForward, AssignmentInd, ExpandMore, Group, LineAxisOutlined, Man, Pending, SwipeRight } from '@mui/icons-material';
import { Paper,Select,Stepper,Step,StepLabel,Accordion,Divider,AccordionSummary,AccordionDetails,Box, Typography, StepContent, Button, MenuItem, CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Moment from 'react-moment'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import OrderHandling from './OrderHandling';
import QRCode from 'react-qr-code'
export default function OrderCard({order_id}) {
  const navigator=useNavigate()
  const [activeStep,setActiveStep]=useState(2)
  const productIdList=[48,36,122]

  const baseURL="https://cargon-postgres.herokuapp.com"
  //const baseURL="http://localhost:8081"
  const orderURL=`${baseURL}/orders`
  const totalOrderURL=`${baseURL}/orderCount`
  const todayOrderURL=`${baseURL}/orderCount`
  const filledOrderURL=`${baseURL}/orderCount`
  

  const [loading,setLoading]=useState(true)
  const [loadingDist,setLoadingDist]=useState(true)
  const [orderData,setOrderData]=useState(null)
  const [distData,setDistData]=useState(null)
  const [selectedDistributor,setSelectedDistributor]=useState(null)
  const [assigned,setAssigned]=useState(false)
  const [status,setStatus]=useState(0)
  const getOrderInfo= async ()=>{
    const res = await axios.get(`${baseURL}/orderProduct/order_id/${order_id}`)
    const statRes = await axios.get(`${baseURL}/status/${order_id}`)
    setStatus(statRes.data.length)
    setOrderData(res.data)
    setLoading(false)
    console.log(res.data)
  }
  const getDistributorList=async()=>{
    
    const res = await axios.get(`${baseURL}/distributors`)
    setDistData(res.data)
    setLoadingDist(false)
  }
  const markAsAssigned=async()=>{
    try{
      await axios.post(`${baseURL}/status/updateStatus`,{
        "order_id":order_id,
        "name":"ASSIGNED",
        "time":Date.now()
      })
      setAssigned(true)
      console.log("Status updated")
    }catch(e){
      console.log(e)
    }
    
  }

  const updateDistributorID=async ()=>{
    try{
      await axios.put(`${baseURL}/order/distributor/${order_id}/${selectedDistributor}`)
      console.log("Distributor updated")
      
    }catch(e){
      console.log(e)
    }
  }
  useEffect(()=>{
    getOrderInfo()
    getDistributorList()
  },[])
  return (
    <Accordion sx={{width:"100%",minHeight:"12vh",margin:"1vh 0"}} elevation={3}>
      <AccordionSummary>
        <Box sx={{width:"50%",height:"100%",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",marginLeft:"1vw",marginBottom:"2vh"}}>
          <Typography variant="h6">Order # {order_id}</Typography>
          <Typography><Moment format="D MMM YYYY , HH:MM" withTitle>{Date.now()}</Moment></Typography>
          <Typography color="success.main">Esitmated Delivery on <Moment format="D MMM" withTitle>{Date.now()}</Moment></Typography>
          <Box sx={{display:'flex',alignItems:"center"}}>
            <Typography sx={{fontSize:{xs:"14px",md:"18px",marginRight:"10px"}}}>Status : </Typography>
            {status==1 && <Typography variant="h6" color="error.main" sx={{fontSize:{xs:"16px",md:"18px"}}}>PENDING </Typography>}
            {status==2 && <Typography variant="h6" color="warning.main" sx={{fontSize:{xs:"16px",md:"18px"}}}>ASSIGNED </Typography>}
            {status==3 && <Typography variant="h6" color="success.main" sx={{fontSize:{xs:"16px",md:"18px"}}}>DELIVERED </Typography>}
          </Box>
        </Box>
        <Box sx={{width:"50%",height:"100%",display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"center",marginLeft:"1vw",marginBottom:"2vh"}}>
          
          <Box onClick={()=>navigator(`/order/${order_id}`)}> <QRCode value={`https://cargon-apothecary.firebaseapp.com/orderdetails/${order_id}`} size={100}/></Box>
          
        </Box>
      </AccordionSummary>
      {!loading && <AccordionDetails>
        {orderData.map(a=>(
          <Box>
          <Divider />
            <Box sx={{padding :"2vh 1vw",width:"50%"}}>
              <Typography variant="h6" color="primary.main">{a.name}</Typography>
              <Typography>Price : BDT {a.totalprice}</Typography>
              <Typography>Qty : {a.quantity}</Typography>
            
            </Box>
          <Divider />
          {status ==1 && <Box>
            <Typography variant="h6" sx={{margin:"1vh 1vw"}}>Inistantiate Order</Typography>
            <OrderHandling id={a.product_id} orderProductID={a.orderproduct_id}/>
          </Box>}
          <Divider />
          </Box>
      ))}
          {status==1 && !assigned && <Box sx={{margin:"1vh 1vw"}}>
            <Typography variant="h6" sx={{margin:"1vh 1vw"}}>Assign Distributor</Typography>
            <Select fullWidth onChange={(e)=>setSelectedDistributor(e.target.value)}>
                {!loadingDist && distData.map(a=>(<MenuItem value={a.distributor_id}>{a.distributor_id} - {a.name} - {a.region} </MenuItem>))}
            </Select>
            <Button variant="contained" onClick={async ()=>{
              await markAsAssigned()
              await updateDistributorID()
            }}><Typography variant="h6">Assign</Typography></Button>
        </Box>}
        {assigned && <Box sx={{margin:"1vh 1vw"}}>
          <Typography variant="h6">Assigned Distributor</Typography>
            <Typography >Distributor ID #{selectedDistributor}</Typography>
        </Box>}
      </AccordionDetails>}
      {loading && <CircularProgress/>}
  
    </Accordion>
  )
}
