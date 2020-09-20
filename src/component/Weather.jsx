import React from 'react';
import './weather.css'



const Weather = (props)=>{
    return(

<div className="container">

    
        <h1 className="my-5">{props.city}</h1> 
        
        {props.celcius ? (
          <h1 className="py-2">{props.celcius}&deg;</h1>
        ) : null}
        {/* <h2 className="py-2">{props.celcius}&deg;</h2> */}
        {
            minmaxtemp(props.temp_min,props.temp_max)
        }
        <h4>{props.description.charAt(0).toUpperCase()  +
            props.description.slice(1)}</h4>
    
</div>


    )
}


function minmaxtemp(min, max){
    if(min,max){
    return(
        
        <>
        
        <span className="px-4"> {min}&deg;</span>
<span className="px-4">
{max}&deg;
</span>

</>
    )
}
};

export default Weather;