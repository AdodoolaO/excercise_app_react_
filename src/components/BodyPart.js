import React from 'react'
import {Stack, Typography} from "@mui/material";
import icon from "../assets/icons/gym.png"

const BodyPart = () => {
  return (
    <Stack>
<img src={icon} alt='dumbbell' className='body-part-icon' styles={{ width:"40px", 
height:"40px"}}/>
    </Stack>
  )
}

export default BodyPart