import React,{useState, useEffect} from 'react';

import './FormInput.css';

function FormInput(props){
const initialValues ={ username:'',  email:'', password:''}
const [formValues,setFormValues]=useState(initialValues);
const [formErrors,setFormErrors]=useState('');
const[isSubmit, setIsSubmit]=useState(false);


const changeHandle =(event)=>{
const {name,value} =event.target;
setFormValues({...formValues, [name]:value});
console.log (formValues);
}

const submitHandel =(event)=>{
  event.preventdefault();
  setFormErrors(validate(formValues));
  setIsSubmit(true);
}
useEffect(() => {
  console.log(formErrors);
if(Object.keys(formErrors).length === 0 && isSubmit){
  console.log(formValues);
}
},[formErrors]);

const validate = (values)=>{
const errors = {};

if(!values.fname){
  errors.fname = 'First Name is required';
}
if(!values.lname){
  errors.lname = 'last Name is required';
}
if(!values.orgname){
  errors.orgname =  'This Field is required';
}
if(!values.email){
  errors.email = 'Email is required';
}
if(!values.fphone){
  errors.fphone = 'Phone Number is required';
}
return errors;
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
      <input type="text" name='fname' value={formValues.fname} onChange={changeHandle}/>
          </div>
           <p>{formErrors.fname}</p>
           <div className='form-control'> 
    <label>Last Name:</label> <br/>
      <input type="text" name='lname'  value={formValues.lname}onChange={changeHandle}/>
           </div>  
           <p>{formErrors.lname}</p>   
          <div className='form-control'> 
    <label>Organisation Name:</label> <br/>
      <input type="text" name='orgname'  value={formValues.orgname} onChange={changeHandle}/>
          </div>   
          <p>{formErrors.orgname}</p>   
          <div className='form-control'> 
    <label>Email:</label> <br/>
      <input type="text" name='email'  value={formValues.email} onChange={changeHandle}/>
          </div>  
          <p>{formErrors.email}</p>   
          <div className='form-control'> 
    <label>Phone Number:</label> <br/>
      <input type="text" name='fphone'  value={formValues.password} onChange={changeHandle}/>
          </div>  
          <p>{formErrors.fphone}</p>   
         
       <button className='submit'>submit</button>
     
          
      </div>
  </form>
</div>
)
};


export default FormInput;