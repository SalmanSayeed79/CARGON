import React,{useState} from 'react'
import { Typography,Box,Avatar,Button, TextField } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PreviewIcon from '@mui/icons-material/Preview';
import DetailsIcon from '@mui/icons-material/Details';
import Appbar from '../Components/Appbar'
export default function Account() {
    const [showAccountInformation,setShowAccountInformation]=useState(false)
    const [showPrevOrders,setShowPrevOrders]=useState(false)
    const [showCurrentOrders,setShowCurrentOrders]=useState(false)
    const [showChangePassword,setShowChangePassword]=useState(false)
    const [showChangeDetails,setShowChangeDetails]=useState(false)
    return (
        <Box>
        <Appbar idx={4}/>
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100vw", minHeight:"100vh",backgroundColor:"#f4f4f4",marginTop:{md:"7vh"}}}>
            <Typography variant="h3" color="primary" sx={{marginTop:"1rem"}}>Your Account</Typography>
            <Typography variant="p"   sx={{marginBottom:"1rem"}}>Your account information</Typography>
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginBottom:"2rem"}}>
                <Avatar alt="GUEST" src="/static/images/avatar/1.jpg" sx={{width:{xs:"30vw",md:"7vw"},height:{xs:"30vw",md:"7vw"}}}/>
                <Typography variant="h5">GUEST User</Typography>
                <Typography variant="p" color="#8f8f8f">Rd No 13 , Dhanmondi</Typography>
                <Typography variant="h5"></Typography>
            </Box>
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"80vw",marginBottom:{xs:"8vh",md:"0"}}}>
                {/**Account Information */}
                <Button variant="outlined" fullWidth sx={{minHeight:"7vh"}} onClick={()=>setShowAccountInformation(!showAccountInformation)}>
                    <InfoIcon />
                    Your account information
                </Button>
                {showAccountInformation && 
                    <Box sx={{backgroundColor:"#2196f3",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",width:"80vw",minHeight:"20vh",border:"1px solid #2196f3",padding:"1rem 0"}}>
                        
                        <Typography color="#f4f4f4" sx={{marginLeft:"1rem"}}>First Name : </Typography>
                        <Typography color="#f4f4f4" sx={{marginLeft:"1rem"}}>Last Name : </Typography>
                        <Typography color="#f4f4f4" sx={{marginLeft:"1rem"}}>Phone Number  : </Typography>
                        <Typography color="#f4f4f4" sx={{marginLeft:"1rem"}}>Region  : </Typography>
                        <Typography color="#f4f4f4" sx={{marginLeft:"1rem"}}>Area  : </Typography>
                        <Typography color="#f4f4f4" sx={{marginLeft:"1rem"}}>Zone  :  </Typography>
                        <Typography color="#f4f4f4" sx={{marginLeft:"1rem"}}>City  : </Typography>
                        <Typography color="#f4f4f4" sx={{marginLeft:"1rem"}}>Gender : </Typography>
                        <Typography color="#f4f4f4" sx={{marginLeft:"1rem"}}>Email : </Typography>
                
                    </Box>
                }
                {/**Previous Orders */}
                <Button variant="outlined" fullWidth sx={{minHeight:"7vh"}}>
                    <PreviewIcon/>
                    Your previous orders
                </Button>
                {/**Current Orders */}
                <Button variant="outlined" fullWidth sx={{minHeight:"7vh"}}>
                    <StarBorderIcon/>
                    Track current orders
                </Button>
                {/**Change Password */}
                <Button variant="outlined" fullWidth sx={{minHeight:"7vh"}} onClick={()=>{setShowChangePassword(!showChangePassword)}}>
                    <VpnKeyIcon/>
                    Change Password
                </Button>
                {showChangePassword && 
                    <Box sx={{backgroundColor:"#2196f3",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"80vw",minHeight:"20vh",border:"1px solid #2196f3",padding:"1rem 0"}}>
                        <Typography variant="h5" sx={{margin:"1rem 0"}} color="#f4f4f4">Change Password</Typography>
                        <Box sx={{width:"75vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                            <TextField type="password" fullWidth placeholder="Current Password" sx={{backgroundColor:"#f4f4f4"}}></TextField>
                            <TextField type="password" fullWidth placeholder="New Password" sx={{marginTop:"1rem",backgroundColor:"#f4f4f4"}}></TextField>
                            <TextField type="password" fullWidth placeholder="Confirm New Password" sx={{marginTop:"1rem",backgroundColor:"#f4f4f4"}}></TextField>
                            <Button variant="contained" sx={{marginTop:"1rem"}}>Change Password</Button>
                        </Box>
                    </Box>
                }
                {/**Change Details */}
                <Button variant="outlined" fullWidth sx={{minHeight:"7vh"}} onClick={()=>{setShowChangeDetails(!showChangeDetails)}}>
                    <DetailsIcon/>
                    Change Your Details
                </Button>
                {showChangeDetails && 
                    <Box sx={{backgroundColor:"#2196f3",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"80vw",minHeight:"20vh",border:"1px solid #2196f3",padding:"1rem 0"}}>
                        <Typography variant="h5" sx={{margin:"1rem 0"}} color="#f4f4f4">Change Account Information</Typography>
                        <Box sx={{width:"75vw",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                            <TextField fullWidth placeholder="First Name" sx={{backgroundColor:"#f4f4f4"}}></TextField>
                            <TextField fullWidth placeholder="Last Name" sx={{marginTop:"1rem",backgroundColor:"#f4f4f4"}}></TextField>
                            <TextField fullWidth placeholder="Phone Number" sx={{marginTop:"1rem",backgroundColor:"#f4f4f4"}}></TextField>
                            <TextField fullWidth placeholder="Region" sx={{marginTop:"1rem",backgroundColor:"#f4f4f4"}}></TextField>
                            <TextField fullWidth placeholder="Area" sx={{marginTop:"1rem",backgroundColor:"#f4f4f4"}}></TextField>
                            <TextField fullWidth placeholder="Zone" sx={{marginTop:"1rem",backgroundColor:"#f4f4f4"}}></TextField>
                            <TextField fullWidth placeholder="City" sx={{marginTop:"1rem",backgroundColor:"#f4f4f4"}}></TextField>
                            <TextField fullWidth placeholder="Gender" sx={{marginTop:"1rem",backgroundColor:"#f4f4f4"}}></TextField>
                            <TextField fullWidth placeholder="Email" sx={{marginTop:"1rem",backgroundColor:"#f4f4f4"}}></TextField>
                            <Button variant="contained"  sx={{marginTop:"1rem"}}>Change Details</Button>
                        </Box>
                    </Box>
                }
            </Box>
        </Box>
        </Box>
    )
}
