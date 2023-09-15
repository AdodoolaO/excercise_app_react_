export const excerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '68c8ea3319mshda10cf4e2ce0b98p10695bjsn394752c29e90',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
const response = await fetch(url, options)
const data = await response.json(); //turn data into json format 
return data 
}