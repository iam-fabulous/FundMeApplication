import React, { useState } from 'react'
import appStore from "../../assets/images/appStore.svg"
import playStore from "../../assets/images/playStore.svg"
import menuIcon from "../../assets/images/menuIcon.png"
import index from "../navbar/header.module.css"
const Header = () => {

  // const dropbtn = addEventListener('click',(event)=>{
  //   event.preventDefault();
  //   navitem_dropdown.toggle('active')
  // })

    // const App = () => {
    // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    // const toggleDropdown = () => {
    //   setIsDropdownOpen((prev) => !prev);
    // }};

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsDropdownOpen((prev) => !prev);
    }
    const closeDropdown = (event) => {
      // Close dropdown if clicking outside
      if (!event.target.closest('.navitem_dropdown')) {
        setIsDropdownOpen(false);
      }
    };
  
    React.useEffect(() => {
      document.addEventListener('click', closeDropdown);
      return () => {
        document.removeEventListener('click', closeDropdown);
      };
    }, []);

  return (
    <div className= {index.header}>
      <div><p className = {index.logo}>FundMe</p></div>
      <div className = {index.wrap_download}>
      <div className={index.download}>
        <p>Download app</p>
        <img src={appStore} alt="" />
        <img src={playStore} alt="" />
      </div>
      
      <div className={index.navitem_dropdown}>
        <img onClick={toggleDropdown} className = {index.menu} src={menuIcon} alt="" />
        {/* <a href="#services" class="dropbtn">Services</a> */}
        {isDropdownOpen && (
            <ul className="dropdown_content">
              <li><a href="#web-design">Web Design</a></li>
              <li><a href="#seo">SEO</a></li>
              <li><a href="#marketing">Marketing</a></li>
            </ul>
          )}
      </div>
      </div>
    </div>
    
  )
}

export default Header