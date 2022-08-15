import { Paper, Typography,Button ,Box, TextField} from '@mui/material'
import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import {useCart, useCartUpdate } from '../Hooks/CartContextProvider';
export default function ProductCard({data}) {
    const navigator=useHistory()
    // const handleClick=()=>{
    //     navigator(`/product/${data.product_id}`)
    // }
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
  return (
    <Paper elevation={5} sx={{minWidth:{xs:"100%",md:"20%"},margin:"1vh 1vw",minHeight:"180px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} > 

        <Box component="img" src={data.image} sx={{width:"250px",margin:"10px",cursor:"pointer"}} onClick={()=>navigator.push(`/product/${data.product_id}`)}/>
        <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"}}>
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"flex-start",width:"70%",margin:"10px 0"}}>
                <Box sx={{display:"flex",alignItems:"flex-end",margin:"0 1rem",maxWidth:"250px"}}>     
                    <Typography variant="h4" sx={{marginRight:"1rem"}} color="primary.main">{data.name}</Typography>
                    <Typography variant="p">{data.variant}</Typography>
                </Box>
                <Typography sx={{margin:"0 1rem",maxWidth:"200px"}}>{data.chemicalName}</Typography>
                <Typography sx={{margin:"0 1rem",maxWidth:"200px"}}>{data.intensity} </Typography>
                
            </Box>
            <Box sx={{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-end",width:"30%",margin:"0 10px"}}>
                <Typography sx={{margin:"0 1rem",maxWidth:"200px"}} color="success.main" variant="h4">&#x9F3; {data.price}</Typography>
                
            </Box>
        </Box>
        <Box sx={{display:"flex",width:"90%",alignItems:"center",justifyContent:"space-between",margin:"1vh 0"}}>
            <Box sx={{display:"flex",flexDirection:"column"}}>
            
            <Button variant="contained" sx={{width:"20%",margin:"5px 0"}} onClick={addToCart}>Add</Button>
            </Box>
            <Box sx={{display:"flex",width:"60%"}}>
                <Button variant="outlined" sx={{width:"50px"}} onClick={decreaseCount}>-</Button>
                <TextField value={qty} onChange={e=>setQty(e.target.value)} sx={{width:"50px"}}/>
                <Button variant="outlined" sx={{width:"50px"}} onClick={increaseCount}>+</Button>
            </Box>
        </Box>
        
    </Paper>
  )
}