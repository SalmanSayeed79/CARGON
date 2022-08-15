import React, { useEffect, useState ,useContext} from "react";
import {
  Box,
  Typography,
  Grid,
  Divider,
  Avatar,
  Button,
  TextField,
  Paper,
  CircularProgress,
} from "@mui/material";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import {
  Info,
  Preview,
  StarBorder,
  VpnKey,
  Details,
} from "@mui/icons-material";
import { DistributorIDContext } from "../Context/IDContextProvider";

export default function AdminDetails() {
  const axios=require('axios')
  const [showAccountInformation, setShowAccountInformation] = useState(true);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showChangeDetails, setShowChangeDetails] = useState(false);

  const [name,setName]=useState(null)
  const [phoneNumber,setPhoneNumber]=useState(null)
  const [region,setRegion]=useState(null)
  const [address,setAddress]=useState(null)


  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  const distributorIDSaved=useContext(DistributorIDContext)
  const baseURL="https://cargon-postgres.herokuapp.com"
  const distURL=`${baseURL}/distributor/${distributorIDSaved}`
//{name:"Salman",address:"Helo",experience:"2",}

const updateDistributor= ()=>{

  axios.put(`${baseURL}/distributor/${distributorIDSaved}`,{
    "name":name,
    "address":address,
    "phoneNumber":phoneNumber,
    "region":region,
  })
  .then((res)=>{
    alert("Updated Distributor")
   
  })
  .catch(e=>{
    alert("Distributor Update Failed")
  })
}
  const getAdminInfo = () => {
    setLoading(true);
    axios.get(distURL)
      .then((a) => {
        setData(a.data)
        setName(a.data.name)
        setPhoneNumber(a.data.phoneNumber)
        setRegion(a.data.region)
        setAddress(a.data.address)
        setLoading(false)
        console.log(a.data)
      })
   
  };


  useEffect(getAdminInfo, []);

  return (
    <Paper sx={{ minHeight: "100vh", width: "100vw" }}>
      <Navbar />
      <Grid container>
        <Grid item xs={2}>
          <Sidebar active={4} />
        </Grid>
        <Divider />
        <Grid item xs={10}>
          {loading && (
            <Box
              sx={{
                width: "100%",
                minHeight: "100vh",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CircularProgress />
              <Typography>Loading Admin Data....</Typography>
            </Box>
          )}
          {!loading && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                width: "80vw",
                minHeight: "100%",
              }}
            >
              <Typography
                variant="h3"
                color="primary"
                sx={{
                  marginTop: "1rem",
                  fontSize: { xs: "36px", md: "56px" },
                  textAlign: "left",
                }}
              >
              Your Account
              </Typography>
              <Typography
                variant="p"
                sx={{ marginBottom: "2rem", textAlign: "left" }}
              >
                Your account information
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "2rem",
                }}
              >
                {!loading && <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar
                    alt="Salman Sayeed"
                    src={data.image}
                    sx={{
                      width: { xs: "42px", md: "64px" },
                      height: { xs: "42px", md: "64px" },
                    }}
                  />
                  <Box sx={{ marginLeft: "20px" }}>
                    <Typography variant="h5">{data.name}</Typography>
                    <Typography variant="p" color="#8f8f8f">
                      {data.address}
                    </Typography>
                  </Box>
                </Box>}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                  justifyContent: "center",
                  width: "80vw",
                  marginBottom: { xs: "8vh", md: "0" },
                }}
              >
                {/**Account Information */}
                <Button
                  variant={showAccountInformation ? "contained" : "outlined"}
                  sx={{
                    minHeight: { xs: "7vh", md: "20vh" },
                    minWidth: { xs: "100%", md: "25vw" },
                    display: "flex",
                    flexDirection: { xs: "row", md: "column" },
                  }}
                  onClick={() => {
                    setShowAccountInformation(!showAccountInformation);
                    setShowChangeDetails(false);
                    setShowChangePassword(false);
                  }}
                >
                  <Info />
                  Your account information
                </Button>

                {/**Change Password */}
                <Button
                  variant={showChangePassword ? "contained" : "outlined"}
                  sx={{
                    minHeight: { xs: "7vh", md: "20vh" },
                    minWidth: { xs: "100%", md: "25vw" },
                    display: "flex",
                    flexDirection: { xs: "row", md: "column" },
                  }}
                  onClick={() => {
                    setShowAccountInformation(false);
                    setShowChangeDetails(false);
                    setShowChangePassword(!showChangePassword);
                  }}
                >
                  <VpnKey />
                  Change Password
                </Button>

                {/**Change Details */}
                <Button
                  variant={showChangeDetails ? "contained" : "outlined"}
                  sx={{
                    minHeight: { xs: "7vh", md: "20vh" },
                    minWidth: { xs: "100%", md: "25vw" },
                    display: "flex",
                    flexDirection: { xs: "row", md: "column" },
                  }}
                  onClick={() => {
                    setShowAccountInformation(false);
                    setShowChangeDetails(!showChangeDetails);
                    setShowChangePassword(false);
                  }}
                >
                  <Details />
                  Change Your Details
                </Button>
              </Box>

              <Box>
                {showAccountInformation && !loading && (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "center",
                      width: "80vw",
                      minHeight: "20vh",
                      border: "1px solid primary.main",
                      padding: "1rem 0",
                    }}
                  >
                
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant="h6" sx={{ marginLeft: "1rem" }}>
                        Name :
                      </Typography>
                      <Typography sx={{ marginLeft: "1rem" }}>
                        {data.name}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant="h6" sx={{ marginLeft: "1rem" }}>
                        Email :
                      </Typography>
                      <Typography sx={{ marginLeft: "1rem" }}>
                        {data.email}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant="h6" sx={{ marginLeft: "1rem" }}>
                        Experience :
                      </Typography>
                      <Typography sx={{ marginLeft: "1rem" }}>
                        {data.experience} Years
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant="h6" sx={{ marginLeft: "1rem" }}>
                        Phone Number :
                      </Typography>
                      <Typography sx={{ marginLeft: "1rem" }}>
                        {data.phoneNumber}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant="h6" sx={{ marginLeft: "1rem" }}>
                        Gender :
                      </Typography>
                      <Typography sx={{ marginLeft: "1rem" }}>Male</Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant="h6" sx={{ marginLeft: "1rem" }}>
                        Emergency Contact :
                      </Typography>
                      <Typography sx={{ marginLeft: "1rem" }}>
                        +8802389410123
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant="h6" sx={{ marginLeft: "1rem" }}>
                        Address :
                      </Typography>
                      <Typography sx={{ marginLeft: "1rem" }}>
                        {data.address}
                      </Typography>
                    </Box>
                  </Box>
                )}
                {showChangePassword && (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "80vw",
                      minHeight: "20vh",
                      border: "1px solid primary.main",
                      padding: "1rem 0",
                    }}
                  >
                    <Typography variant="h5" sx={{ margin: "1rem 0" }}>
                      Change Password
                    </Typography>
                    <Box
                      sx={{
                        width: "75vw",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <TextField
                        type="password"
                        fullWidth
                        placeholder="Current Password"
                      ></TextField>
                      <TextField
                        type="password"
                        fullWidth
                        placeholder="New Password"
                        sx={{ marginTop: "1rem" }}
                      ></TextField>
                      <TextField
                        type="password"
                        fullWidth
                        placeholder="Confirm New Password"
                        sx={{ marginTop: "1rem" }}
                      ></TextField>
                      <Button variant="contained" sx={{ marginTop: "1rem" }}>
                        Change Password
                      </Button>
                    </Box>
                  </Box>
                )}
                {showChangeDetails && (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "80vw",
                      minHeight: "20vh",
                      border: "1px solid primary.main",
                      padding: "1rem 0",
                    }}
                  >
                    <Typography variant="h5" sx={{ margin: "1rem 0" }}>
                      Change Account Information
                    </Typography>
                    <Box
                      sx={{
                        width: "75vw",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
   
                
                      <TextField
                        label="Name"
                        fullWidth
                        placeholder="Name"
                        sx={{ marginTop: "1rem" }}
                        value={name}
                        onChange={e=>setName(e.target.value)}
                      ></TextField>
                      <TextField
                        fullWidth
                        value={phoneNumber}
                        onChange={e=>setPhoneNumber(e.target.value)}
                        placeholder="Phone Number"
                        label="Phone Number"
                        sx={{ marginTop: "1rem" }}
                      ></TextField>
                      <TextField
                        value={region}
                        onChange={e=>setRegion(e.target.value)}
                        fullWidth
                 
                        placeholder="Region"
                        label="Region"
                        sx={{ marginTop: "1rem" }}
                      ></TextField>
                      <TextField
                        fullWidth
                        label="Address"
                        placeholder="Address"
                        value={address}
                        onChange={e=>setAddress(e.target.value)}
                        sx={{ marginTop: "1rem" }}
                      ></TextField>
             
                   
                
                      <TextField
                        fullWidth
                        label="Email"
                        placeholder="Email"
                        value={data.email}
                        unselectable
                        sx={{ marginTop: "1rem" }}
                      ></TextField>
                      <Button variant="contained" sx={{ marginTop: "1rem" }} onClick={updateDistributor}>
                        Change Details
                      </Button>
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
}
