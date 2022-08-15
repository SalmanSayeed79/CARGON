import { Paper,Box ,Typography, CircularProgress} from '@mui/material'
import React,{useState,useEffect} from 'react'
import axios from 'axios'
export default function DistributorCard({data}) {
//   const [productData,setProductData]=useState(null)
//   const [loading,setLoading]=useState(true)
//   const baseURL="https://cargon-postgres.herokuapp.com"
//   const productURL=`${baseURL}/product/${data.product_id}`
//   const getProductData=()=>{
//    // console.log(data)
//     //console.log(data.product_id)
//     axios.get(productURL).then((res)=> {
//       setProductData(res.data)
//       setLoading(false)
//     })
//   }
//   useEffect(getProductData,[])
  return (
    <Paper elevation={5} sx={{width:"100%",minHeight:"10vh",margin:"2vh 0",display:"flex",alignItems:"center",justifyContent:"space-around",cursor:"pointer"}}>
      <Box  sx={{width:{xs:"35%",md:"20%"},display:"flex",flexDirection:"column",margin:"0 10px",alignItems:"flex-start",justifyContent:"center" }}>
        <Typography variant="h3">{data.distributor_id}</Typography>
        <Typography >Distributor ID</Typography>
      </Box>
        
        <Box sx={{width:{xs:"65%",md:"80%"},display:"flex",flexDirection:"column",margin:"0 10px",alignItems:{xs:"flex-end"}}}>
          <Typography variant="h5" color="primary.main">{data.name}</Typography>
          <Typography>{data.region}</Typography>
        </Box>

        {/*<Box sx={{display:"flex",width:"40%" ,alignItems:"center",justifyContent:"space-around"}}>
          <Box  sx={{width:{xs:"40%",md:"20%"},display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center" }}>
            <Typography variant="h3" sx={{fontSize:{xs:"32px",md:"50px"}}}>{data.current_quantity}</Typography>
            <Typography sx={{fontSize:{xs:"13px",md:"16px"}}}>In Stock</Typography>
          </Box>
          
          <Box  sx={{width:{xs:"40%",md:"20%"},display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center" }}>
            <Typography variant="h3" sx={{fontSize:{xs:"32px",md:"50px"}}}>{data.initial_quantity}</Typography>
            <Typography sx={{fontSize:{xs:"13px",md:"16px"}}}>Total</Typography>
          </Box>
          
        </Box>*/}
    </Paper>
  )
}
