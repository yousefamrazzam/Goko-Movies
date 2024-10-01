import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Login({savaLoginData}) {
  let navigate= useNavigate()

  async function login(values) {
    console.log(values);
    let {data}=await axios.post(`https://note-sigma-black.vercel.app/api/v1/users/signIn`,values)
console.log(data);
localStorage.setItem('token',data.token);
savaLoginData()
navigate("/home")
  }

  let VaildationSchema=Yup.object({
    email:Yup.string().email('Invalid email address').required('email is Required'),
    password:Yup.string().matches(/^[A-z][a-z0-9]{5,8}$/,"Password should start with capital").required('Password is Required'),
  
  })

  let formik=useFormik({
    initialValues:{
     email:"",
     password:"",
    } ,
    validationSchema: VaildationSchema,
    onSubmit:(values)=>login(values)
   })
  
 
 
  return <>
   <div className="container my-5">
   <h2 className=' mb-3 text-center'>Login Now </h2>

  <form onSubmit={formik.handleSubmit}>
  <div className="form-group mb-3">
    <label htmlFor="email " className="mb-3 fw-bolder fs-5">Email</label> 
    <input type="email" id="email"
     name='email' 
     value={formik.values.email}
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}
      className=" form-control" />
   {formik.errors.email&&formik.touched.email?<div className=' alert alert-danger'>{formik.errors.email}</div>:""}

  </div>
  <div className="form-group mb-3">
    <label htmlFor="password" className="mb-3 fw-bolder fs-5">Password</label>
    <input type="password" id="password" name='password'
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
    
    className=" form-control" />
       {formik.errors.password&&formik.touched.password?<div className=' alert alert-danger'>{formik.errors.password}</div>:""}

  </div>

  <button type="submit" className=" btn btn-outline-info">Login</button>

  </form>
  </div>

  </>
}
