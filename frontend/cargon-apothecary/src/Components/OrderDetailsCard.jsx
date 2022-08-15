import { AddAPhoto, ArrowForward, AssignmentInd, ExpandMore, Group, Man, Pending, SwipeRight } from '@mui/icons-material';
import { Paper,Stepper,Step,StepLabel,Accordion,Divider,AccordionSummary,AccordionDetails,Box, Typography, StepContent, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Moment from 'react-moment'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
export default function OrderDetailsCard({data,status}) {
  const navigator=useHistory()
  const [activeStep,setActiveStep]=useState(status.length)
  const [products,setProducts]=useState(null)
  const [loading,setLoading]=useState(true)
  const [notFound,setNotFound]=useState()
  const baseURL="https://cargon-postgres.herokuapp.com"
  const getOrderDetails=async ()=>{
    try{
      const res = await axios.get(`${baseURL}/orderProduct/order_id/${data.order_id}`)
      setProducts(res.data)
      setLoading(false)
    }catch(e){
      console.log(e)
      setNotFound(true)
      setLoading(false)
    }
  }
  useEffect(()=>{
    getOrderDetails()
  },[])
  if(notFound){
    return(
    <Paper sx={{width:"100%",minHeight:"12vh",margin:"2vh 0",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}} elevation={3}>
      <Typography variant="h6" color="error.main">ORDER NOT FOUND</Typography>
    </Paper>)
  }
  return (
    <Paper sx={{width:"100%",minHeight:"12vh",margin:"2vh 0",display:"flex",flexDirection:"column"}} elevation={3}>
      
        <Box sx={{width:"50%",height:"100%",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",marginLeft:"1vw",margin:"2vh 2vw"}}>
          <Typography variant="h6">Order # {data.order_id}</Typography>
          <Typography variant="p"><Moment format="D MMM YYYY , HH:MM" withTitle>{Date.now()}</Moment></Typography>
          <Typography color="success.main">Esitmated Delivery on <Moment format="D MMM" withTitle>{Date.now()}</Moment></Typography>
        </Box>
        {!loading && products.map(a=>(<Box>
        <Divider />
        <Box sx={{padding :"2vh 0",width:"50%",margin:"2vh 2vw"}}>
          <Typography variant="h6" color="primary.main">{a.name}</Typography>
          <Typography>Price : BDT {a.totalPrice}</Typography>
          <Typography>Qty : {a.quantity}</Typography>
        
        </Box>

        <Divider />
        </Box>))}
        <Box>
        <Typography variant="h6" sx={{margin:"0 2vw"}}>Track Order</Typography>
        </Box>

        <Stepper activeStep={activeStep} orientation="vertical" sx={{width:"80%",margin:"2vh 2vw"}}>
             <Step key={1} expanded={activeStep>=0}>
                <StepLabel >
                  <Box sx={{display:"flex",alignItems:"center"}}>
                    <SwipeRight sx={{backgroundColor:"warning.main",color:"white",padding:"10px",borderRadius:"50%",margin:"0 1vw"}} />
                  <Typography variant="h6">Order Placed</Typography>
                  </Box>
                </StepLabel>
                <StepContent>
                  <Typography sx={{marginLeft:"1vw"}}>We have received the order</Typography>
                  {status.length>0 && <Typography sx={{marginLeft:"1vw"}}>ON <Moment format="MMM DD, YYYY ">{status[0].time}</Moment></Typography>}
                 {/*status.length>0 && <Typography sx={{marginLeft:"1vw"}}>AT <Moment format="HH:MM ">{status[0].time}</Moment></Typography>*/}
                  </StepContent>
              </Step>

              <Step key={2} expanded={activeStep>=1}>
                <StepLabel >
                  <Box sx={{display:"flex",alignItems:"center"}}>
                    <Pending sx={{backgroundColor:"warning.main",color:"white",padding:"10px",borderRadius:"50%",margin:"0 1vw"}} />
                  <Typography variant="h6">Order Assigned</Typography>
                  </Box>
                </StepLabel>
                <StepContent>
                  <Typography sx={{marginLeft:"1vw"}}>We have assigned the order to a designated distributor</Typography>
                  {status.length>1 && <Typography sx={{marginLeft:"1vw"}}>ON <Moment format="MMM DD, YYYY ">{status[1].time}</Moment></Typography>}
                  {/*status.length>1 && <Typography sx={{marginLeft:"1vw"}}>AT <Moment format="HH:MM ">{status[1].time}</Moment></Typography>*/}
                
                  </StepContent>
              </Step>

              <Step key={3} expanded={activeStep>=2}>
                <StepLabel>
                  <Box sx={{display:"flex",alignItems:"center"}}>
                    <AssignmentInd sx={{backgroundColor:"success.main",color:"white",padding:"10px",borderRadius:"50%",margin:"0 1vw"}} />
                  <Typography variant="h6">Order Delivered</Typography>
                  </Box>
                </StepLabel>
                <StepContent>
                  <Typography sx={{marginLeft:"1vw"}}>Our product has reached the customer</Typography>
                  {status.length>2 && <Typography sx={{marginLeft:"1vw"}}>ON <Moment format="MMM DD, YYYY ">{status[2].time}</Moment></Typography>}
                 {/*status.length>2 && <Typography sx={{marginLeft:"1vw"}}>AT <Moment format="HH:MM ">{status[2].time}</Moment></Typography>*/}
                  </StepContent>
              </Step>

              {/*<Step key={4} expanded={activeStep>3}>
                <StepLabel>
                  <Box sx={{display:"flex",alignItems:"center"}}>
                    <Group sx={{backgroundColor:"success.main",color:"white",padding:"10px",borderRadius:"50%",margin:"0 1vw"}} />
                  <Typography variant="h6">Reached retailer</Typography>
                  </Box>
                </StepLabel>
                <StepContent>
                  <Typography sx={{marginLeft:"1vw"}}>Our product has reached retailers</Typography>
                  </StepContent>
              </Step>

              <Step key={5} expanded={activeStep>4}>
                <StepLabel>
                  <Box sx={{display:"flex",alignItems:"center"}}>
                    <Man sx={{backgroundColor:"success.main",color:"white",padding:"10px",borderRadius:"50%",margin:"0 1vw"}} />
                  <Typography variant="h6">Product Bought</Typography>
                  </Box>
                </StepLabel>
                <StepContent>
                  <Typography sx={{marginLeft:"1vw"}}>The product has been bought by a consumer</Typography>
                  </StepContent>
  </Step>*/}

             
            
          </Stepper>
  
  
    </Paper>
  )
}
