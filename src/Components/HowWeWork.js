import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import IntroLeftDT from '../Assets/Images/bg-pattern-intro-left-desktop.svg'

export default function HowWeWork() {
    const style = {
        mainContainer : {
            padding : "200px 180px",
            backgroundImage : `url(${IntroLeftDT})`,
            backgroundRepeat : "no-repeat",
            backgroundPosition : "left -208px"
        }
    }
  return (
   <Box sx = {style.mainContainer}>
    <Typography>TEst</Typography>
   </Box>
  )
}
