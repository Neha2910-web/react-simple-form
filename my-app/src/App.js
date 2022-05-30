import React,{ useState,useEffect} from 'react';
import './App.css';
import FormikFormInput from './Components/FormikForm/FormikFormInput';
import FormInput from './Components/SimpleForm/FormInput';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    
    <div className="App">
            
<FormInput/>
{/* <FormikFormInput/> */}
    </div>
  );
}

export default App;
