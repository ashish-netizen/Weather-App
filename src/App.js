import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Weather from './component/Weather';
import Form from './component/Form';

const API_key="ab52e8dcea9cfe0ce01d2ced5eb97ca2";

// Class based Components
class App extends React.Component{
  constructor(){
    super();
    
    this.state={
      city: "",
      country:"",
      main:"",
      celcius:"",
      temp_min:"",
      temp_max:"",
      description:"",
      error:false
     
    };
    
  
  }

  
  calCelcius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }


// function to get api data
  getWeather= async (e) =>{
    e.preventDefault();

    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;

    if(city && country){
      const api_call= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`);
    const res= await api_call.json();
    console.log(res);
// setting the data in state
    this.setState({
      city: `${res.name},${ res.sys.country}`,
      celcius:this.calCelcius(res.main.temp),
      temp_min:this.calCelcius(res.main.temp_min),
      temp_max:this.calCelcius(res.main.temp_min),
      description:res.weather[0].description, 
      error:false
      
      });
      
 
    }

  else{
this.setState({error:true});
  
  };

    };
  render(){
  return(
    <>
    <div className="App">

      <br/>
    <h2 className="heading">Netizen Weather App</h2>


    <Form
    loadWeather= {this.getWeather}
    error= {this.state.error}
    />
      
    <Weather
    city= {this.state.city}
    country= {this.state.country}
    celcius= {this.state.celcius}
    temp_min= {this.state.temp_min}
    temp_max={this.state.temp_max}
    description={this.state.description}
    weatherIcon={this.state.icon}
    />
 

       </div>
       </>
  )
  }
}



export default App;
