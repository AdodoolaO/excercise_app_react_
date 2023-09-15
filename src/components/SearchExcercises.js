import React, {useEffect, useState} from 'react'
import {Box,Button,Stack,TextField, Typography} from '@mui/material';
import { excerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';


const SearchExcercises = ({setExcercises,bodyPart,setBodyPart}) => {
const [search, setSearch]= useState("");
//const [excecises, setExcercises] = useState([]);
const [bodyParts, setBodyParts] = useState([])

//useEffect is like a helper that lets you tell React what to do when your web page loads, and it can also help you tidy up after your tasks are done.
//Imagine you're building a web page with React, and you want to do something when the page loads. 
//Maybe you want to fetch some information from the internet and show it on your page.

useEffect(() => { //used to fetch the excercises categories as soon as the page loads 
  const fetchExcercisesData = async () =>{
    const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList",excerciseOptions)
    setBodyParts(["all", ...bodyPartsData])
  }
  fetchExcercisesData(); //calling this immediately as soon as the app loads 
}, [])  // This part means do it only once when the page first loads


const handleSearch = async ()=> { //async because we have to fetch some data from it & this fuction will take some time and means pull data from api
  if (search){//if the search exists fetch data

    const excercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises",
 excerciseOptions)

console.log(excercisesData);

const searchedExcercises = excercisesData.filter((excercise)=>
excercise.name.toLowerCase().includes(search )
|| excercise.target.toLowerCase().includes(search )
|| excercise.equipment.toLowerCase().includes(search )
|| excercise.bodyPart.toLowerCase().includes(search )
)

setSearch(""); //clearing search 
setExcercises(searchedExcercises)

  }
}

  return (
   <Stack alignItems="center" mt="37px"
   justifyContent="center" p="20px">
<Typography fontWeight={700} sx={{
  fontSize: {lg:"44px", xs:"30px"}
}}
md="50px" textAlign="center"
>
  Awesome Excercises You <br/>
   Should Know
</Typography>
<Box position='relative' mb ="72px">
  <TextField
  sx={{
    input:{
      fontWeight: "700",
      border: "none", 
      borderRadius: "4px"
    }, 
      width: {lg: "800px", xs:"350px"},
      backgroundColor:"#fff", borderRadius: "40px"
  
    }}
  height="76px"
  value={search}
  onChange={(e)=>setSearch(e.target.value.toLowerCase())}
  placeholder='Search Excercises'
  type= "text"
  />
<Button className='search-btn'
sx={{
  bgcolor:"#FF2625",
  color:"#fff",
  textTransform:"none",
  width: {lg: "17px", xs: "80px"},
  fontSize: {lg:"20px", xs: "14px"},
  height:"56px",
  position:"absolute",
  right: "0"
}}
onClick={handleSearch} //function
>
Search
</Button>
</Box>
<Box sx={{position: "relative", width: "100%", p:"20px"}}>
  <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>


</Box>
   </Stack>
  )
}

export default SearchExcercises