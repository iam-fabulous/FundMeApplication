import Header from "../components/navbar/Header";
import Footer from "../components/foote/Footer";
import {Outlet} from "react-router-dom"

import React from 'react'

function SignUpLayout () {
    return (
      <div>
          <Header/>
          <Outlet/>
          <Footer/>
      </div>
    )
  }
  
  export default SignUpLayout