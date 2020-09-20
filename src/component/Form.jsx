import React from "react";
import "./form.css";

const Form = props => {
    return (
        <>

        <div>{props.error ? error() : ""}</div>
    <form  onSubmit={props.loadWeather}>
      <div className="row">
        <div className="col-md-3 offset-md-2">
      
        <input type="text" name="city" autoComplete='off' placeholder="Enter City" />
        </div>
        <div className="col-md-3">
        <input type="text" placeholder= "Country" name="country" autoComplete='off' />
        </div>
        <div className="col-md-3 mt-md-0 mt-2 text-md-left">
        <button type="submit" className="btn btn-danger"> submit</button>
        </div>
        </div>
    </form>
    </>
    );
  };
  
  


  const error = props => {
    return (
      <div className="alert alert-danger mx-5" role="alert">
        Please Enter City and Country...!
      </div>
    );
  };
    
  export default Form;