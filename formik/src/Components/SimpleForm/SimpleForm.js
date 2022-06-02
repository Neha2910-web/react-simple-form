import React from "react";
import { useForm } from "react-hook-form";
import './SimpleForm.css';

export default function SimpleForm() {
  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

 

  return (
  <div className="simple-controls">
      <h1>Simple Form</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
     
    <label>First Name</label>
    <input {...register('firstName', {required:true})}/>
    {errors.firstName?.type === 'required'  && "First name is required"}<br/>
    <label>Last Name</label>
    <input {...register('lastName', {required:true})}/>
    {errors.lastName?.type === 'required' && "Last name is required"}<br/>
    <label>Organisation Name</label>
    <input {...register('orgName', {required:true})}/>
    {errors.orgName?.type === 'required' && "Organisation name is required"}<br/>
    <label>Email</label>
    <input {...register('email', {required:true})}/>
    {errors.email?.type === 'required' && "Email is required"}<br/>
    <label>Phone Number</label>
    <input {...register('phone', {required:true})}/>
    {errors.phone?.type === 'required' && "Phone Number is required"}<br/>
    <button className="buttons"  type="submit">Submit</button>
    </form>
   </div>
      
      

   
  );
}