import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase/firebase_init";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState(" ");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    setErrorMessage(" ");
    setSuccess(false);

    // terms and conditions validate
    if (!terms) {
      setErrorMessage("Please Accept Our terms & Conditions");
      return;
    }
    // password Validate
    const passwordUpperCase = /(?=.*[A-Z])/;
    const passwordLowerCase = /(?=.*[a-z])/;
    const passwordDigit = /(?=.*\d)/;
    const passwordSpecial = /(?=.*[^A-Za-z0-9])/;
    const passwordLength = /.{8,}/;
    if (passwordLowerCase.test(password) === false) {
      setErrorMessage("Password must have at least one LowerCase letter.");
      return;
    } else if (passwordUpperCase.test(password) === false) {
      setErrorMessage("Password must have at least one UpperCase letter.");
      return;
    } else if (passwordDigit.test(password) === false) {
      setErrorMessage("Password must have at least one Digit.");
      return;
    } else if (passwordSpecial.test(password) === false) {
      setErrorMessage("Password must have at least one Special Character.");
      return;
    } else if (passwordLength.test(password) === false) {
      setErrorMessage("Password must have at least 8 Character.");
      return;
    }
    // create User
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        setSuccess(true);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSignUp}>
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="input"
              placeholder="Password"
            />
            <button
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              className="btn btn-xs absolute top-2 right-7"
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </button>
          </div>
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <label className="label mt-3">
            <input type="checkbox" name="terms" className="checkbox" />
            Accept terms & conditions
          </label>
          <br></br>
          <button className="btn btn-neutral mt-4">SignUp</button>
          <p className="mt-2">Already have an account? Please <Link to="/login2" className="text-blue-600 underline">Login</Link></p>
        </form>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {success && (
          <p className="text-green-500">User Created Successfully.</p>
        )}
      </div>
    </div>
  );
};

export default Register;
