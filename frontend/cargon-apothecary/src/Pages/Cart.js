import React,{useEffect, useState} from 'react'
import { Typography,TextField,Box,Button,Paper, CircularProgress } from '@mui/material'
import {removeCartItem, useCart, useCartEmpty} from '../Hooks/CartContextProvider'
import CartItem from '../Components/CartItem'
import {db} from '../FireBase'
import { ImportExport } from '@material-ui/icons'
import Appbar from '../Components/Appbar'
import axios from 'axios'
import { usePrevOrderUpdate } from '../Hooks/PrevOrderContext'
export default function Cart() {
    const cartItems=useCart()
    const cartEmpty=useCartEmpty()
    const PrevOrderUpdate=usePrevOrderUpdate()
    const [address,setAddress]=useState(null)
    const [orderID,setOrderID]=useState(null)
    const [placingOrder,setPlacingOrder]=useState(false)

    const baseURL="https://cargon-postgres.herokuapp.com"
  
    const addOrder=async ()=>{
        setPlacingOrder(true)
        try{
            const res =await axios.post(`${baseURL}/order`,{
                "delivery_start_date":Date.now(),
                "delivered_to":address,
                "distributor_id":null,
                "is_wholesaler":false,
                "wholesaler_id":null
            })
            console.log(res.data.order_id)
            setOrderID(res.data.order_id)
            
            
        }catch(e){
            console.log(e)
            setPlacingOrder(false)
        }

        
    }
    const addProducts=async ()=>{
        cartItems.map(async(a)=>{
            if(orderID!=null){
                try{
                    const res =await axios.post(`${baseURL}/orderProduct`,{
                        "order_id":orderID,
                        "product_id":a.details.product_id,
                        "quantity":a.qty,
                        "batch_id":null,                
                    })
                }catch(e){console.log(e)}
            }        
        })
    }
    const addStatus=async ()=>{
        if(orderID!=null){
            await axios.post(`${baseURL}/status/updateStatus`,{
                "order_id":orderID,
                "name":"PLACED",
                "time":Date.now()
            })
            PrevOrderUpdate({"order_id":orderID,"time":Date.now()})
            setPlacingOrder(false)
            console.log("Order Placed! Your Order ID is ",orderID)
            cartEmpty()
            console.log("Updated Status")
        }
    }
    let totalPrice=0
    useEffect(()=>{
        addProducts()
        addStatus()
    },[orderID])
    return (
        <Box>
        <Appbar idx={2}/>
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100vw",minHeight:"100vh",backgroundColor:"#2196f3",marginTop:{md:"7vh"}}}>
            <Typography variant="h3" color="white" sx={{marginTop:"1rem"}}>🛍 Cart Page</Typography>
            <Typography variant="p" color="#f4f4f4"  sx={{marginBottom:"1rem"}}>Confirm your order request </Typography>
            <Box sx={{minHeight:"80vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginBottom:{xs:"7vh",md:"0"}}}>
            {cartItems.length!=0 &&
                <Paper elevation={5} sx={{backgroundColor:"white",width:{xs:"98vw",md:"80vw"},minHeight:"10vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    <Typography variant="h6" sx={{margin:"1rem 0"}} color="primary">Your Cart</Typography>
                    {cartItems.length>0 && cartItems.map((item,index)=>{
                    totalPrice=totalPrice+(item.details.price)*(item.qty)
                    return(<CartItem data={item.details} qty={item.qty} index={index}/>)})}
                    <Box sx={{display:"flex",width:{xs:"90%",md:"80%"},}}>
                        <Typography>Total Price : {totalPrice} Taka</Typography>
                    </Box>
                    <Box sx={{display:"flex",flexDirection:"column",width:{xs:"90%",md:"80%"},margin:"10px 0"}}>
                        <Typography>Your Address</Typography>
                        <TextField value={address} fullWidth onChange={e=>setAddress(e.target.value)}/>
                    </Box>
                   
                    <Box sx={{display:"flex",flexDirection:"column",width:{xs:"90%",md:"80%"},margin:"10px 0"}}>
                        <Button variant="contained" size="large" sx={{marginBottom:"1rem"}} onClick={async()=>{
                            addOrder()
                        }}>
                        
                        {!placingOrder && <Typography>Order</Typography>}
                        {placingOrder && <Box><CircularProgress/><Typography>Placing Order</Typography></Box>}
                        
                        </Button>
                    </Box>
                </Paper>
            }
            {cartItems.length==0 && 
                <Paper elevation={5} sx={{width:"80vw",height:"50vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    <Box component="img" src="https://i.postimg.cc/W3Qn5nrr/3369473.jpg" sx={{width:{xs:"50vw",md:"15vw"}}}/>
                    <Typography>Your Cart is empty</Typography>
                </Paper>}
            </Box>
        </Box>
        </Box>
    )
}
