import React from 'react'
import hero_image from "../../assets/images/hero_image_12_mob.webp"
import index from "../subhead/subhead.module.css"
import CustomButton from '../../reuseables/CustomButton'
import { Link } from 'react-router-dom'



const SubHead = () => {
  return (
    <div className={index.hero_section}>
        <div className={index.hero_text}>
        <div><p className={index.hero_button_one}>Easy, fast & secure</p></div>
        <h1>Get access to instant loan with flexible interest rate!</h1>
        <h2>Disbursal in just 4 Hrs</h2>
        <div className={index.check}>
       
        <Link to="/signup"><CustomButton style={index.check_button} type="submit" textContent="Get Started"  /></Link>
        
       
        </div>
        </div>
        <img src={hero_image} className={index.heroImage} alt="" />
    </div>
  )
}

export default SubHead