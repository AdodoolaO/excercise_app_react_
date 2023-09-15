import React from 'react';
import {Box} from '@mui/material';
import BodyPart from './BodyPart';

const HorizontalScrollBar = ({data}) => { //accepts the data property from searchexcervises.js
  return (// looping data
    <div>
{data.map((item)=> (
<Box
key ={item.id || item}
itemID ={item.id || item}
title ={item.id || item}
m= "0 40px"
> 
<BodyPart item={item} BodyPart={BodyPart} setBodyPart={setBodyPart}/>
</Box>)
)}
    </div>
  )
}

export default HorizontalScrollBar