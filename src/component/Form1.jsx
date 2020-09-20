import React from "react";

const Form = props => {
    return (
        <>




        <div>{props.error ? error() : ""}</div>
    <form  onSubmit={props.loadWeather}>
        <input type="text" name="city" autoComplete='off' placeholder="Enter City" />
        <input type="text" placeholder= "Country" name="country" autoComplete='off' />
        <button type="submit" className="btn btn-danger"> submit</button>
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