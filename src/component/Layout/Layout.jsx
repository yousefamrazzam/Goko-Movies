import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import {Outlet, useNavigate} from 'react-router-dom';

export default function Layout({loginData,setLoginData}) {
  let navigate=useNavigate()

  function Logout() {
    localStorage.removeItem("token")
    setLoginData(null)
    navigate("/login")
  }
  return <>
  <Navbar loginData={loginData} Logout={Logout}/>
  <Outlet/>
  <Footer/>
  
  </>
}
