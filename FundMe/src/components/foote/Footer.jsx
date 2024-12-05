import React from 'react'
import twitter from '../../../src/assets/images/twitter.svg'
import instagram from '../../../src/assets/images/instagram.svg'
import linkedin from '../../../src/assets/images/linkedin.svg'
import footer from '../foote/footer.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className={footer.footer_container}>
      <div className={footer.footer_menu}> 
        <p>FundMe</p>
        <div>
          <ul>
          <Link to="/"><li>Home</li></Link>
            <li>Contact us</li>
            <li>About us</li>
            <li>Lending Partners</li>
          </ul>
        </div>
      </div>
      <div className={footer.footer_follow}>
        <p>Follow us</p>
        <img src={twitter} alt="" />
        <img src={instagram} alt="" />
        <img src={linkedin} alt="" />
      </div>
      <div className={footer.footer_rights}>
        <hr />
        <span>@2024 MR. fABULOUS AND MR JOHNDAN PRIVATE | Terms of use | privacy</span>
        <hr />
      </div>
    </div>
  )
}

export default Footer