import WeatherApi from "./WeatherApi"
import React from 'react';



export default function Example(props) {
return(
    <>
<h1>Example heading</h1>
<h1>{props.brand}</h1>
<h1>{props.cityName}</h1>
    </>
)
}