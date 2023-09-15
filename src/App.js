//This is the application

import React from 'react';
import {Route, Routes} from 'react-router-dom'; //using this route between our home page and excercise details page
import {Box} from "@mui/material";
import './app.css';
import ExcerciseDetail from './pages/ExcerciseDetail';
import Home from './pages/home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//:id is going to be dynamic render in our excercise detail component 

export const App = () => {
  return (
    <Box width="400px" sx={{width: {xl:'1488px'}}} m="auto"> 
    <Navbar/>
    <Routes>
        <Route path ="/" element={<Home/>} />
        <Route path="/excercise/:id" element={<ExcerciseDetail/>}/> 
        </Routes> 
        <Footer/> 
    </Box>
  )
}

export default App