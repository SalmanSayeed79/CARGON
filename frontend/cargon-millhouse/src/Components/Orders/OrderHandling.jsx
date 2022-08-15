import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { Paper,Box,Typography,Button, IconButton, TextField } from '@mui/material'
import { Add, Remove } from '@mui/icons-material'
import BatchQuantityCard from './BatchQuantityCard'
export default function OrderHandling(props) {
    const [loading,setLoading]=useState(true)
    const [data,setData]=useState(null)
    const [batchSelected,setBatchSelected]=useState(false)
    const baseURL="https://cargon-postgres.herokuapp.com"
    const getData=()=>{
        axios.get(`${baseURL}/batch/prod/${props.id}`).then(res=>{
            setData(res.data)
            setLoading(false)
        })
    }
    useEffect(getData,[])

  return (
    <div>
      {!loading && !batchSelected && data.map(a=><BatchQuantityCard data={a} batchSelectedFunction={setBatchSelected} orderProductID={props.orderProductID}/>)}
      {!loading && batchSelected && data.map(a=><Typography variant="h6" color="success.main" sx={{margin:"0 1vw"}}>Product Order Successfully initiated</Typography>)}
    </div>
  )
}
