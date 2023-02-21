import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, Link } from "@mui/material";
import Logo from "../Assets/Images/logo.svg";
import ClearIcon from '@mui/icons-material/Clear';

export default function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const style = {
    linkmenu: {
      fontSize: "16px",
      marginLeft: "20px",
      fontFamily: "Karla",
      fontWeight: "700",
      textDecoration: "none",
      color: "hsl(273, 4%, 51%)",
    },
    drawer : {
        textAlign : "center",
    },
    appBar : {
        backgroundColor: "hsl(0, 0%, 98%)", 
    },
    viewPlanBtn: {
      marginLeft: "20px",
      fontFamily: "Karla",
      fontWeight: "700",
      fontSize: "16px",
      border: "1px solid hsl(256, 26%, 20%)",
      color: "hsl(256, 26%, 20%)",
      width: "150px",
    },
    linkmenuMobile: {
      display: "flex",
      justifyContent: "center",
      marginTop: "25px",
      textDecoration: "none",
      fontFamily: "Karla",
      fontWeight: "500",
      color: "#000000",
    },
    headerDrawer : {
        display : "flex",
        justifyContent : "space-between",
        padding : "10px 20px",
        alignItems : "center",
    },
    close : {
        border: "1px solid hsl(256, 26%, 20%)",
        borderRadius : "0px",
        height : "30px",
        width : "30px"
    },
    drawerLogo : {
        width : "35%",
        height : "35%"
    },
    drawerItems : {
        flexDirection : "column",
        backgroundColor : "hsl(270, 9%, 17%)",
        height : "100vh"
    },
    drawerlinks : {
        padding : "20px"
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    //drawer
    <Box sx={style.drawer}>
        <Box sx = {style.headerDrawer}>
            <Box component= 'img' src = {Logo} sx = {style.drawerLogo}></Box>
            <IconButton sx = {style.close} onClick = {handleDrawerToggle}>
                <ClearIcon></ClearIcon>
            </IconButton>
        </Box>
        <Box sx = {style.drawerItems}>
            <Box sx = {style.drawerlinks}>
            <Link>HOW WE WORK</Link>
            </Box>
            <Box>
            <Link>BLOG</Link>
            </Box>
            <Box>
            <Link>ACCOUNT</Link>
            </Box>
            <Box>
            <Button>View Plans</Button>
            </Box>
        </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <CssBaseline />
      <AppBar
        position="absolute"
        component="nav"
        sx = {style.appBar}
        elevation={0}
      >
        <Toolbar style={{padding : "20px 180px"}}>
          <Typography component="div" style={{ display: "flex", flexGrow: 1 }}>
            <Box component="img" src={Logo}></Box>
          </Typography>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 1, display: { sm: "none" } }}
            style={{
              border: "1px solid hsl(256, 26%, 20%)",
              borderRadius: "0px",
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              
            }}
          >
            <Box>
              <Link href="#" sx={style.linkmenu}>
                HOW WE WORK
              </Link>
              <Link sx={style.linkmenu} href="#Services">
                BLOG
              </Link>
              <Link sx={style.linkmenu} href="#Work">
                ACCOUNT
              </Link>
              <Button sx={style.viewPlanBtn}>View Plans</Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100vw",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
