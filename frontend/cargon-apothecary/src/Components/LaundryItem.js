import React,{useState,useContext} from 'react'

import {Paper,Typography,Box ,Button,ButtonGroup, TextField} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../App';
import {useCart, useCartUpdate } from '../Hooks/CartContextProvider';
export default function LaundryItem({name,icon,price}) {
    const [count,setCount]=useState(0)
    const updateCart=useCartUpdate()
    const cartItems=useCart()
    return (
       
        <Paper elevation={5} sx={{width:{xs:"95vw",md:"80vw"},minHeight:{xs:"15vh",md:"10vh"},display:"flex",alignItems:"center",flexDirection:{xs:"column",md:"row"},justifyContent:"space-around",marginBottom:"2rem"}}>
            <Box sx={{width:{xs:"70vw",md:"20vw"},display:"flex",alignItems:"center",justifyContent:"space-around"}}>
                <Box component="img" src={icon} sx={{width:{xs:"30px",md:"50px"},height:{xs:"30px",md:"50px"}}}/>
                <Typography variant="h6">{name}</Typography>
                <Typography variant="p" color="#8f8f8f">&#2547;{price} Taka per item</Typography>
            </Box>
            <Box sx={{width:{xs:"70vw",md:"20vw"},display:"flex",alignItems:"center",justifyContent:"space-around"}}>
                <ButtonGroup>
                    <Button size="small" onClick={()=>{
                        if(count>0){
                            setCount(count-1)
                        }
                    }}><RemoveIcon/></Button>
                    <Button size="small" variant="outlined" color="primary">{count}</Button>
                    <Button size="small" onClick={()=>{
                        setCount(count+1)
                    }}><AddIcon/></Button>
                </ButtonGroup>
                <Button size="small" variant="outlined" onClick={()=>setCount(0)}><DeleteIcon/></Button>
                <Button size="small" variant="outlined" onClick={()=>{
                    let newItem={
                        name:name,
                        price:price,
                        count:count
                    }
                    let match=false 
                    //Item count 0
                    if(newItem.count==0){
                        alert("Please increase item count to add to cart. Current item count is 0") 
                        return
                    }

                    //Item already added to cart
                    cartItems.forEach(a=>{
                        if(a.name==newItem.name){match=true}
                    })
                    if(!match){
                        updateCart(newItem)
                    }else{
                        alert(`${newItem.name} Already added`)
                    }
                    
                }}>Add</Button>
            </Box>
        </Paper>
     
    )
}
