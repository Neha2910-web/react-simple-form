import React from 'react'
import { Form, Field } from 'react-final-form'

export default function FinalFormInput() {
   
  return (
   <>
     <Form
    // onSubmit={onSubmit}
    // validate={validate}
    render={({handleSubmit})=> (
    <form onSubmit={handleSubmit}>
         <div>
          <label>First Name</label>
          <Field name="fName" component="input" placeholder="First Name" />
        </div>
         <div>
          <label>Last Name</label>
          <Field name="lName" component="input" placeholder="Last Name" />
        </div>
         <div>
          <label>Organisation Name</label>
          <Field name="orgName" component="input" placeholder="Organisation Name" />
        </div>
         <div>
          <label>Email</label>
          <Field name="email" component="input" placeholder="Email Address" />
        </div>
         <div>
          <label>Phone Number</label>
          <Field name="phone" component="input" placeholder="Phone Number" />
        </div>
        <button type="submit">Submit</button>

    </form>

    )
    }/>
     
   </>

  )
}
