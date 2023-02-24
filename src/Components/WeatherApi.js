// import React, { useEffect, useState } from "react";
// import Weather from "./Weather"





// export default function WeatherApi(props) {
//     const [Search, setSearch] = useState(props.searchdata);
//     console.log("search" + Search)
    
//     useEffect(()=>{
//         const fetchApi = async ()=>{
//             const url = `https://api.openweathermap.org/data/2.5/weather?q=${Search}&appid=8b43f8ee3c35a931e3c96556a1341fa6 `
//             const res = await fetch(url);

//             const resJson = await res.json();

//             console.log(resJson.main.temp)
//         }

//         fetchApi();
//     })

//     return (
//         <>
//         <Weather
//         cityName = "Mumbai"
//         Temprature ={27}

//         />
//         </>)

// }

