import React,{useState,useEffect} from 'react'
import { Typography,Box, CircularProgress,TextField,InputAdornment, Button } from '@mui/material'
import ProductCard from '../Components/ProductCard'
import axios from 'axios'
import { Search } from '@material-ui/icons'
import Appbar from '../Components/Appbar'
import {useHistory, useParams} from 'react-router-dom'
export default function Products() {
    const [loading,setLoading]=useState(true)
    const [productsList,setProductsList]=useState(null)
    const [searchValue,setSearchValue]=useState(null)
    const params=useParams()
    const navigator=useHistory()
    const baseURL="https://cargon-postgres.herokuapp.com"
    const productURL=`${baseURL}/product/factory/${params.id}`
    //const getByNameURL=`${baseURL}/product/name/${searchValue}`
    const getProductsByName=async ()=>{
        setLoading(true)
        // axios.get(getByNameURL).then(res=>{
        //   setProductsList(res.data)
        //   setLoading(false)
        // })
        setProductsList(productsList.filter(checkMatch))
        console.log(productsList)
        setLoading(false)
      }
    const checkMatch=(a)=>{
        console.log("Match")
        return a.name.includes(searchValue)
    }

    const getProducts=()=>{
        axios.get(productURL).then(res=>{
            console.log(res.data)
          setProductsList(res.data)
          setLoading(false)
        })
      }
    
    useEffect(()=>{
        console.log("hello")
        getProducts()
 
    },[])
    return (
        <Box>
        <Appbar idx={1}/>
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100vw", minHeight:"100vh",backgroundColor:"#f4f4f4",marginTop:{md:"7vh"}}}>
            
            <Box sx={{width:{xs:"90%",md:"80%"}}}>
                <Button sx={{margin:"1vh 0"}} variant="contained" onClick={()=>navigator.push("/products")}><Typography>Go Back</Typography></Button>
            </Box>
            <Typography variant="h3" color="primary" sx={{marginTop:"1rem"}}>📦 Shopping Page</Typography>
            <Typography variant="p"  sx={{marginBottom:"1rem"}}>Add the products you want to the cart and directly buy them</Typography>
            
            <Box sx={{display:"flex",width:"90%",minHeight:"7vh",alignItems:"center",justifyContent:"center",marginTop:"4vh"}}>
            
                <TextField
                    placeholder="Search by name"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <Search />
                        </InputAdornment>
                    ),
                    }}

                sx={{width:{xs:"80%",md:"80%"}}}
                    onChange={(e)=>{
                    setSearchValue(e.target.value)
                    }}
                />
                <Button variant="contained" sx={{height:"100%"}} onClick={()=>{
                    if(searchValue!=null && searchValue!=""){
                        getProductsByName()
                    }
                    else{
                        getProducts()
                    }
                }}><Typography>Search</Typography></Button>
            </Box>
            {!loading && <Box sx={{marginBottom:{xs:"7vh",md:"0"},width:"90%",display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap"}}>
                {productsList.map(item=>(<ProductCard data={item}/>))}
            </Box>}
            {loading && <Box sx={{marginBottom:{xs:"7vh",md:"0"},width:"90%",minHeight:"80vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flexWrap:"wrap"}}><CircularProgress/>Loading Products.....</Box>}
        </Box>
        </Box>
    )
}
