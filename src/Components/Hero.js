import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ImageIntro from "../Assets/Images/image-intro-desktop.jpg";
import IntroLeftDT from '../Assets/Images/bg-pattern-intro-left-desktop.svg'
import IntroRightDT from '../Assets/Images/bg-pattern-intro-right-desktop.svg'

export default function Hero() {
  const style = {
    mainContainer: {
      backgroundColor: "hsl(256, 26%, 20%)",
      width: "100%",
      height: "94vh",
      padding: "100px 180px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      backgroundImage : `url(${IntroLeftDT}) , url(${IntroRightDT})`,
      backgroundPosition : "left 500px , right top",
      backgroundRepeat : "no-repeat"
    },
    subCon : {
        display : "flex",
    },
    divider: {
      width: "180px",
      height: "1.5px",
      backgroundColor: "hsl(0, 0%, 98%)",
    },
    heroTitle: {
      fontFamily: "DM Serif Display",
      fontWeight: "500",
      fontSize: "70px",
      marginTop: "80px",
      color: "hsl(0, 0%, 98%)",
      width: "35vw",
      lineHeight: "8vh",
    },
    viewPlanBtn: {
      fontFamily: "Karla",
      fontWeight: "700",
      fontSize: "16px",
      backgroundColor: "transparent",
      color: "hsl(0, 0%, 98%)",
      width: "150px",
      borderRadius: "0px",
      marginTop: "35px",
      border: "1px solid hsl(0, 0%, 98%)",
    },
    subTitle: {
      fontFamily: "Karla",
      fontSize: "16px",
      fontWeight: "400",
      marginTop: "30px",
      color: "hsl(0, 0%, 98%)",
      width: "36vw",
    },
    ImageIntro : {
        position : "absolute",
        marginLeft : "70px"
        
    }
  };
  return (
    <Box sx={style.mainContainer}>
      <Box sx={style.divider}></Box>
      <Box sx = {style.subCon}>
        <Box>
          <Typography sx={style.heroTitle}>
            Humanizing your insurance.
          </Typography>
          <Typography sx={style.subTitle}>
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that is right for
            you. Ensure you and your loved ones protected.
          </Typography>
          <Button sx={style.viewPlanBtn}>View Plans</Button>
        </Box>
        <Box>
          <Box component="img" src={ImageIntro} sx = {style.ImageIntro}></Box>
        </Box>
      </Box>
    </Box>
  );
}
