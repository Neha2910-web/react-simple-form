
import React,{useState, useEffect} from 'react';

import './FormInput.css';

function FormInput(props){
const[fname,setFname]=useState('');
const[lname,setLname]=useState('');
const[email,setEmail]=useState('');
const[orgname,setOrgname]=useState('');
const[phone,setPhone]=useState('');
const[fnameError,setFnameError]=useState('');
const[lnameError,setLnameError]=useState('');
const[emailError,setEmailError]=useState('');
const[orgnameError,setOrgnameError]=useState('');
const[phoneError,setPhoneError]=useState('');
const[successmsg,setSuccessMsg]=useState('')
const changeHandleFname=(e)=>{
  setSuccessMsg ('');
  setFnameError('');
  setFname(e.target.value);
}
const changeHandleLname=(e)=>{
  setSuccessMsg ('');
  setLnameError('');
  setLname(e.target.value);
}
const changeHandleEmail=(e)=>{
  setSuccessMsg ('');
  setEmailError('');
  setEmail(e.target.value);
}
const changeHandleOrgname=(e)=>{
  setSuccessMsg ('');
  setOrgnameError('');
  setOrgname(e.target.value);
}
const changeHandlePhone=(e)=>{
  setSuccessMsg ('');
  setPhoneError('');
  setPhone(e.target.value);
}
const submitHandel=(event) =>{
  event.preventDefault();
  if(!fname){
    setFnameError("Required");
  }
  if(!lname){
    setLnameError("Required");
  }
  if(!email){
    setEmailError("Required");
  }
  if(!orgname){
    setOrgnameError("Required");
  }
  if(!phone){
    setPhoneError("Required");
  }
  



};

return(
<div>
  <form onSubmit={submitHandel}>
    <div className='header-control'>
      <button className='formik-button'>Formik Form </button>
      <button className='simple-button'>Simple Form </button>
      <button className='final-button'>Final Form </button>
    </div>
    <p>Simple Logic Form</p>
  
      <div className='form-controls'>
          <div className='form-control'> 
    <label>First Name:</label> <br/>
      <input type="text" name='fname' value={fname} onChange={changeHandleFname}/>
          </div>
          {fnameError&&<div className='error-msg'>{fnameError}</div>}
           <div className='form-control'> 
    <label>Last Name:</label> <br/>
      <input type="text" name='lname'  value={lname}onChange={changeHandleLname}/>
           </div>  
           {lnameError&&<div className='error-msg'>{lnameError}</div>} 
          <div className='form-control'> 
    <label>Organisation Name:</label> <br/>
      <input type="text" name='orgname'  value={orgname} onChange={changeHandleOrgname}/>
          </div>   
          {orgnameError&&<div className='error-msg'>{orgnameError}</div>}
          <div className='form-control'> 
    <label>Email:</label> <br/>
      <input type="text" name='email'  value={email} onChange={changeHandleEmail}/>
          </div>  
          {emailError&&<div className='error-msg'>{emailError}</div>}   
          <div className='form-control'> 
    <label>Phone Number:</label> <br/>
      <input type="text" name='fphone'  value={phone} onChange={changeHandlePhone}/>
          </div>  
          {phoneError&&<div className='error-msg'>{phoneError}</div>}   
         
       <button className='submit'>submit </button>
     
          
      </div>
  </form>
</div>
)
};


export default FormInput;