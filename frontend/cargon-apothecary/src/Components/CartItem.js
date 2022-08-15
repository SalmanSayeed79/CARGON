import React,{useState,useContext} from 'react'

import {Paper,Typography,Box ,Button,ButtonGroup, TextField} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { RemoveCartItem, useCart } from '../Hooks/CartContextProvider';


export default function CartItem({index,data,qty}) {
    const cartItems=useCart()
    const removeItem=RemoveCartItem()
    return (
       
        <Paper elevation={5} sx={{width:{xs:"90%",md:"80%"},minHeight:{xs:"10vh",md:"10vh"},display:"flex",alignItems:"center",flexDirection:{xs:"row",md:"row"},justifyContent:"space-around",marginBottom:".5rem"}}>
        <Box component="img" src={data.image} sx={{width:{xs:"60px",md:"100px"},margin:"10px"}}/>
            <Box sx={{width:{xs:"70vw",md:"20vw"},display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"space-around",margin:"0"}}>
                <Typography variant="h6">{data.name}</Typography>
                <Typography >{data.chemicalName}</Typography>
            </Box>
            <Box sx={{width:{xs:"70vw",md:"20vw"},display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        { /*   <ButtonGroup>
                <Button size="small" onClick={()=>{
                    if(count>0){
                        
                    }
                }}><RemoveIcon/></Button>
                
                <Button size="small" onClick={()=>{
            
                }}><AddIcon/></Button>
            </ButtonGroup>
            <Button size="small" variant="outlined" onClick={()=>{}}><DeleteIcon/></Button>*/}
                    <Box sx={{display:'flex',flexDirection:"column",alignItems:"center"}}>
                        <Typography sx={{fontSize:{xs:"32px",md:"50px"}}}>{qty}</Typography>
                        <Typography sx={{fontSize:{xs:"13px",md:"16px"}}}>Count</Typography>
                    </Box>
                    <Box sx={{display:'flex',flexDirection:"column",alignItems:"center"}}>
                        <Typography sx={{fontSize:{xs:"32px",md:"50px"}}}>{qty*data.price}</Typography>
                        <Typography sx={{fontSize:{xs:"13px",md:"16px"}}}>Price</Typography>
                    </Box>
                    <Box>
                        <Button size="small"  sx={{width:"50px",height:"50px"}} variant="outlined" onClick={()=>{
                            removeItem(index)
                            console.log(cartItems)
                        }}><DeleteIcon/></Button>
                    </Box>
                    
             
            </Box>
        </Paper>
     
    )
}
