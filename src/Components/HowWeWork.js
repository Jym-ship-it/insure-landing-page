import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import IntroLeftDT from '../Assets/Images/bg-pattern-intro-left-desktop.svg'

export default function HowWeWork() {
    const style = {
        mainContainer : {
            padding : "240px 180px",
            backgroundImage : `url(${IntroLeftDT})`,
            backgroundRepeat : "no-repeat",
            backgroundPosition : "left -208px"
        },
        divider: {
            width: "180px",
            height: "1.5px",
            backgroundColor: "hsl(270, 9%, 17%)",
          },
         workTitle: {
            fontFamily: "DM Serif Display",
            fontWeight: "500",
            fontSize: "70px",
            marginTop: "80px",
            color: "hsl(270, 9%, 17%)",
            width: "35vw",
            lineHeight: "8vh",
          },
    }
  return (
   <Box sx = {style.mainContainer}>
    <Box sx={style.divider}></Box>
    <Typography sx={style.workTitle}>We're different</Typography>
   </Box>
  )
}
