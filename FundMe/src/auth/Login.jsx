import React, { useState } from "react";
import {Link} from "react-router-dom";
import CustomButton from "../reuseables/CustomButton";
import style from "../styles/login.module.css"

const Login = () => {

    const userLoginDetails = {
        email: "",
        password: "",
    }; 

const [data, setData] = useState(userLoginDetails)// takes the content of UserDetails as an object and gives to a function to be mutated

  function handleChange(event) {
    const {name, value} = event.target
    //setData((prevData) => ({...prevData, [name]:value})) 
    setData((prevData)=>{
      return {...prevData, [name]:value}
    })
  } // this is the function that takes the object gotten from the useState function and inputs the value from the browser

  console.log(data);

    return(
        <div className={style.main_wrapper}>
        <div className={style.wrapper}>
            <h2>Login Account</h2>
        <form action="">
            <div className={style.input_box}>
                <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                onChange={handleChange}
                required
                />
            </div>
            <div className={style.input_box}>
                <input
                type="password"
                name="password"
                placeholder="Enter password"
                className={style.input}
                onChange={handleChange}
                required
                />
            </div>
        {/* <CustomButton className={style.input_box} type="submit" textContent="Login"/> */}
            <div className={style.input_box}>
                <input type="Submit" value="Login" />
            </div>
        </form>
                <div className={style.text}>
                    <span>I don't have an account?</span>
                    <span><Link to = {'/SignUp'}>SignUp</Link></span>
                </div>
            </div>
        </div>
    )
}

export default Login