import React from 'react'
import { render } from 'react-dom'
import { Form, Field } from 'react-final-form'
import './FinalFormInput.css'
const onSubmit = ( values) => {
  console.log(values);
 
}

export default function FinalFormInput() {

  return (
    <div className='form-controls' >
      <h1>React Final Form</h1>
       <Form
      onSubmit={onSubmit}
      validate={values => {
        const errors = {}
        if (!values.fname) {
          errors.fname = 'Required'
        }
        if (!values.lname) {
          errors.lname = 'Required'
        }
        if (!values.orgname) {
          errors.orgname = 'Required'
        }
        if (!values.email) {
          errors.email = 'Required'
        }
        else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if (!values.phone) {
          errors.phone = 'Required'
        } else if (!/^\d{10}$/.test(values.phone))
        {
          errors.phone='Invalid phone Number';
        }
        
        return errors
      }}
      render={({ handleSubmit, form, submitting, values }) => (
 
        <form onSubmit={handleSubmit} >
          <Field name="fname">
            {({ input, meta }) => (
              <div className='form-control'>
                <label>First Name</label>
        
                <input {...input} type="text"  />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="lname">
            {({ input, meta }) => (
              <div className='form-control'>
                <label>Last Name</label>
                <input {...input} type="text"  />
                {meta.error&&meta.touched&&<span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="orgname">
            {({ input, meta }) => (
              <div className='form-control'>
                <label>Organisation Name</label>
                <input {...input} type="text"  />
                {meta.error&&meta.touched&&<span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="email">
            {({ input, meta }) => (
              <div className='form-control'>
                <label>Email</label>
                <input {...input} type="email" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="phone">
            {({ input, meta }) => (
              <div className='form-control'>
                <label>Phone Number</label>
                <input {...input} type="text" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <div className="buttons">
            <button type="submit" disabled={submitting}>
              Submit
            </button>
            
          </div>
         
        </form> 

      )}
      
    />
   </div>
  )
}
