import React from 'react'
import {Box,Typography,Container,Link,IconButton,Paper} from "@mui/material"
import Appbar from '../Components/Appbar'
export default function Home() {

    return (
        <Box > 
            <Appbar idx={0}/>
            <Box
                sx={{
                display: "flex",
                flexDirection:{xs:"column",md:"row"},
                alignItems: "center",
                justifyContent: "center",
                width: "100vw",
                minHeight: "100vh",
                }}
            >
                <Box sx={{width:"50vw",height:{xs:"40vh",md:"100vh"},display:{xs:"flex"},alignItems:"center",justifyContent:"center",backgroundColor:{md:"#90caf9"}}}>
            <Box
            component="img"
            src="https://i.postimg.cc/8PmC5BMX/Apothecarymdpi.png"
            sx={{ width:{xs:"75vw", md:"25vw"} }}
            data-aos="fade-left"
            />
            </Box>
            <Box sx={{ width: {xs:"100vw",md:"50vw"},display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center" }} data-aos="fade-right">

                <Box sx={{ width: {xs:"80vw",md:"40vw"} ,margin:"2vh 0",marginLeft:{md:"2vw"}}}>
                    <Typography
                    variant="h2"
                    sx={{ fontSize: {xs:"48px",md:"64px"}, fontWeight: "bold",color:"#2196f3" }}
                    >
                    Apothecary
                    </Typography>
                    <Typography variant="p" sx={{ maxWidth: "40vw", fontSize: {xs:"16px",md:"22px"} }}>
                    Cargon service for pharmaceutical consumers. Providing you the best shopping experience
                    </Typography>
                </Box>
               
            </Box>
            </Box>
            <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        
      }}
    >
 

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
    >
        <Container maxWidth="sm">
          <Typography variant="body1">
            Developed  with &hearts; by CARGON
          </Typography>
          <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="">
        CARGON
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
        </Container>
      </Box>
    </Box>
        </Box>
    )
}
