import React,{useState} from 'react'
import {useHistory} from "react-router-dom"
import {Box,Typography,AppBar,Toolbar,Button, Badge} from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';

import Checkroom from '@mui/icons-material/Checkroom';
import PersonIcon from '@mui/icons-material/Person';
import { ListAlt } from '@material-ui/icons';
import { Verified } from '@mui/icons-material';
import { useCart } from '../Hooks/CartContextProvider';

export default function Appbar({idx}) {
    const [active,setActive]=useState(0)
    const history=useHistory()

    const cartItems=useCart()
    const HomeClick=()=>{
        //setActive(0)
        history.push("/")
    }
    const LaundryClick=()=>{
        //setActive(1)
        history.push("/products")
    }
    const CartClick=()=>{
        //setActive(2)
        history.push("/cart")
    }
    const DetailsClick=()=>{
        //setActive(3)
        history.push("/orderdetails")
    }
    const AccountClick=()=>{
        //setActive(3)
        history.push("/account")
    }
    return (
        <AppBar color="default" position="fixed" sx={{ top: {xs:'auto',md:0}, bottom: {xs:0,md:"auto" }}}>
            <Toolbar sx={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
                <Box sx={{display:{md:"flex"},alignItems:"center",cursor:"pointer",width:{md:"40%"}}} onClick={HomeClick}>
                    <Box component="img" sx={{display:{xs:"none",md:"flex",width:"42px"}}} src="https://i.postimg.cc/XqF5WrGY/M.png" />
                    <Typography variant="h6" sx={{display:{xs:"none",md:"flex",marginLeft:"10px"}}} color="primary.main">Apothecary</Typography>
                </Box>
                <Button onClick={HomeClick} color="inherit" sx={{display:"flex",flexDirection:{xs:"column",md:"row"}}}>
                    {idx==0 ? <HomeIcon color="primary" sx={{display:{xs:"flex",md:"none"}}}/> : <HomeIcon sx={{display:{xs:"flex",md:"none"}}}/>}
                    {idx==0 ? <Typography color="primary">Home</Typography> : <Typography>Home</Typography>}
               
                </Button>
              
                <Button onClick={LaundryClick} color="inherit" sx={{display:"flex",flexDirection:{xs:"column",md:"row"}}}>
                    {idx==1 ? <ListAlt color="primary" sx={{display:{xs:"flex",md:"none"}}}/> : <ListAlt sx={{display:{xs:"flex",md:"none"}}}/>}
                    {idx==1 ? <Typography color="primary">Products</Typography> : <Typography>Products</Typography>}
                </Button>
                <Button onClick={CartClick} color="inherit" sx={{display:"flex",flexDirection:{xs:"column",md:"row"}}}>
                    {idx===2 ? <Badge badgeContent={cartItems.length} color="error"><ShoppingCartIcon color="primary" sx={{display:{xs:"flex",md:"none"}}}/></Badge > : <Badge badgeContent={cartItems.length} color="error"><ShoppingCartIcon sx={{display:{xs:"flex",md:"none"}}}/></Badge>}
                    {idx===2 ? <Typography color="primary">Cart</Typography> :<Typography>Cart</Typography>}
               
                </Button>
                <Button onClick={DetailsClick} color="inherit" sx={{display:"flex",flexDirection:{xs:"column",md:"row"}}}>
                    {idx==3 ? <Verified color="primary" sx={{display:{xs:"flex",md:"none"}}}/> : <Verified sx={{display:{xs:"flex",md:"none"}}}/>}
                    {idx==3 ? <Typography color="primary">Verification</Typography> : <Typography>Verification</Typography>}
                </Button>
                <Button onClick={AccountClick} color="inherit" sx={{display:"flex",flexDirection:{xs:"column",md:"row"}}}>
                    {idx==4 ? <PersonIcon color="primary" sx={{display:{xs:"flex",md:"none"}}}/> : <PersonIcon sx={{display:{xs:"flex",md:"none"}}}/>}
                    {idx==4 ? <Typography color="primary">Account</Typography> : <Typography>Account</Typography>}
                </Button>
                
            </Toolbar>
        </AppBar>
    )
}
 