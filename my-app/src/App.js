import React,{ useState,useEffect} from 'react';
import './App.css';
import FormikFormInput from './Components/FormikForm/FormikFormInput';
import FormInput from './Components/SimpleForm/FormInput';

function App() {

  return (
    <div className="App">
<FormInput/>
{/* <FormikFormInput/> */}
    </div>
  );
}

export default App;
