import React,{useState,useEffect} from 'react'
import { Typography,Box, CircularProgress,TextField,InputAdornment, Button } from '@mui/material'
import ProductCard from '../Components/ProductCard'
import axios from 'axios'
import { Search } from '@material-ui/icons'
import Appbar from '../Components/Appbar'
import FactoryCard from '../Components/FactoryCard'
export default function Factories() {
    const [loading,setLoading]=useState(true)
    const [factoryList,setFactoryList]=useState(null)
    const [searchValue,setSearchValue]=useState(null)
    const baseURL="https://cargon-postgres.herokuapp.com"
    const productURL=`${baseURL}/products`
    const getByNameURL=`${baseURL}/product/name/${searchValue}`
    // const getProductsByName=async ()=>{
    //     setLoading(true)
    //     axios.get(getByNameURL).then(res=>{
    //       setProductsList(res.data)
    //       setLoading(false)
    //     })
    //   }

    // const getProducts=()=>{
    //     axios.get(productURL).then(res=>{
    //         console.log(res.data)
    //       setProductsList(res.data)
    //       //setLoading(false)
    //     })
    //   }
      const getFactories=()=>{
        axios.get(`${baseURL}/factories`).then(res=>{
        console.log(res.data)
            setFactoryList(res.data)
          setLoading(false)
        })
      }
    useEffect(()=>{
        console.log("hello")
        //getProducts()
        getFactories()
    },[])
    return (
        <Box>
        <Appbar idx={1}/>
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around",width:"100vw", minHeight:"100vh",backgroundColor:"#f4f4f4",marginTop:{md:"7vh"}}}>
                <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <Typography variant="h3" color="primary" sx={{marginTop:"1rem"}}>🛠 Partner Factories</Typography>
                    <Typography variant="p"  sx={{marginBottom:"1rem"}}>Choose from any one of our partner factories and start shopping</Typography>
                </Box>
                {!loading && <Box sx={{marginBottom:{xs:"7vh",md:"0"},width:"90%",display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap"}}>
                    {factoryList.map(item=>(<FactoryCard data={item}/>))}
                </Box>}
                {loading && <Box sx={{marginBottom:{xs:"7vh",md:"0"},width:"90%",minHeight:"80vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flexWrap:"wrap"}}><CircularProgress/>Loading Products.....</Box>}
            </Box>
        </Box>
    )
}
