import React from 'react';
import { useForm } from 'react-hook-form';
function RegisterForm() {  
  const { register, handleSubmit, formState: { errors }, setFocus } = useForm();  
  const onSubmit = (data) => console.log('Form Data:', data);  
  return (    
    <div>      
      <h2>Register Form</h2>      
      <form onSubmit={handleSubmit(onSubmit)}>        
        <div>         
          <label>First Name</label>        
          <input 
            {...register('firstName', { required: 'First Name is required' })} />          
          {errors.firstName && <span>{errors.firstName.message}</span>}        
        </div>        
        <div>          
          <label>Email</label>          
          <input 
            {...register('email', { 
              required: 'Email is required',
              pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } 
            })} />          
          {errors.email && <span>{errors.email.message}</span>}        
        </div>        
        <button type="submit">Register</button>      
      </form>      
      {/* Use setFocus instead of manual ref */}
      <button onClick={() => setFocus("firstName")}>
        Focus First Name
      </button>   
    </div>  
  );
}
export default RegisterForm;
