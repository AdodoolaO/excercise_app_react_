import React, {useState} from 'react';
import {Box} from '@mui/material';
import Excercises from '../components/Excercises';
import SearchExcercises from '../components/SearchExcercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  const [bodyPart, setbodyPart] = useState("all"); 
  const [excecises, setExcercises] = useState([]);
  
// useState() is a function in React (a JavaScript library for building user interfaces) that helps you manage 
//and store pieces of data, often called "state," that can change over time.
//Two values bodyPart hold current state value, setbodyPart is the function that allows you to update the bodyPart value in react componenet- bodyPart 

  return (
<Box>
    <HeroBanner/>
    <SearchExcercises/>
    <Excercises/>

</Box>
  )
}

export default Home