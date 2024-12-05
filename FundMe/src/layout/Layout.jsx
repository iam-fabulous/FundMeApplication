import Header from "../components/navbar/Header";
import Footer from "../components/foote/Footer";
import {Outlet} from "react-router-dom"

import React from 'react'
import SubHead from "../components/subhead/SubHead";

function Layout () {
  return (
    <div>
        <Header/>
        <SubHead/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout