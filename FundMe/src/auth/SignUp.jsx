import React, { useState } from "react";
import Style from "../styles/signup.module.css";
import CustomButton from "../reuseables/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import style from "../styles/signup.module.css";

const SignUp = () => {
  const navigate = useNavigate();

  const userDetails = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    nin: "",
    password: "",
  };

  const [data, setData] = useState(userDetails);

  function handleChange(event) {
    const { name, value } = event.target;
    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
  }

  const handleSubmit = () => {
    navigate("/login");
  };

  return (
    <div className={style.main_wrapper}>
      {/* <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="firstname"
            placeholder="Enter your firstname"
            className={Style.input}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="lastname"
            placeholder="Enter your Lastname"
            className={Style.input}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            className={Style.input}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            className={Style.input}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="hidden"
            name="nin"
            placeholder="Enter your NIN"
            className={Style.input}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className= "input"
            onChange={handleChange}
            required
          />
        </div>
        <CustomButton style={Style.btn} type="submit" textContent="submit"/>
      </form>
      <div>
            <span>Alreadyhave an account?</span>
            <span><Link to = {"/login"}>Login</Link></span>
      </div> */}
      <div className={style.wrapper}>
        <h2>Registration</h2>
        <form action="#">
          <div className={style.input_box}>
            <input type="text" name="firstname" placeholder="Enter your First Name" onChange={handleChange} required />
          </div>
          <div className={style.input_box}>
            <input type="text" name="lastname" placeholder="Enter your Last Name" onChange={handleChange} required />
          </div>
          <div className={style.input_box}>
            <input type="text" name="email" placeholder="Enter your email" onChange={handleChange} required />
          </div>
          <div className={Style.input_box}>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"

              onChange={handleChange}
              required
            />
          </div>
          {/* <div className={style.input_box}>
            <input type="text" name="nin" placeholder="Enter your NIN" onChange={handleChange} required />
          </div> */}
          <div className={style.input_box}>
            <input type="password" placeholder="Create password" onChange={handleChange} required />
          </div>
          <div className={style.input_box}>
            <input type="password" placeholder="Confirm password" onChange={handleChange} required />
          </div>
          <div className={style.input_box}>
          <label for="dropdown">Choose an option:</label>
            <select id="dropdown" name="options" >
              <option value="" disabled selected>What would you like to do?</option>
              <option value="lender">Lend</option>
              <option value="borrower">Borrow</option>
            </select>
          </div>
          <div className={style.policy}>
            <input type="checkbox" />
            <h3>I accept all terms & condition</h3>
          </div>
          <div className={style.input_box}>
            <input type="Submit" value="Register Now" />
          </div>
          <div className={style.text}>
            <h3>
              Already have an account? <Link to="/login">Login now</Link>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
