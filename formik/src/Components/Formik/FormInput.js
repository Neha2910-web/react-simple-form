import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik';
import './FormInput.css'
function FormInput() {
   
  return (
    <div>
       <Formik initialValues={{fname:"",lname:"",orgname:"",email:"",phone:"" }}
       validate={values => {
        const errors = {};
        if(!values.fname){
            errors.fname='Required';
        } 
        if(!values.lname){
            errors.lname='Required'
        }
        if(!values.orgname){
            errors.orgname='Required'
        }
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if(!values.phone){
            errors.phone= 'Required'
        }else if (
          !/^\d{10}$/.test(values.phone)
        ){
          errors.phone ='Invalid phone address';
        }
        return errors;
      }}
   
    onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
        
     console.log(values);
    }}
>
{({ isSubmitting }) => (
  <div className='formik-form-controls'>
      <Form>
        <h1>Formik Form</h1>
        
        <label>First Name:</label><br/>
        <Field name='fname' type='text'/>
        <ErrorMessage className='error-msg'  name="fname" component="div" />
        <br/>

        <label>Last Name:</label><br/>
        <Field name='lname' type='text'/>
        <ErrorMessage className='error-msg' name="lname" component= 'div' />
        <br/>
      
         <label>Organisation Name:</label><br/>
        <Field name='orgname' type='text' />
        <ErrorMessage className='error-msg' name="orgname" component="div" />
        <br/>

        <label>Email:</label><br/>
        <Field name='email' type='email'  />
        <ErrorMessage  className='error-msg' name="email" component="div" />
        <br/>
    
        <label>Phone Number:</label><br/>
        <Field name='phone' type='text'/>
        <ErrorMessage className='error-msg' name="phone" component="div" />
        <br/>
     
       <button type="submit" className='submit'>Submit</button>
     
      </Form>
      </div>
)}
    </Formik>
    </div>

  )
}

export default FormInput
