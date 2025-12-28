import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { Link } from "react-router";
import { auth } from "../../firebase/firebase_init";

const Login2 = () => {
  const [errorMessage, setErrorMessage] = useState(" ");
  const [success, setSuccessMessage] = useState(false);
  const emailRef = useRef();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // reset
    setErrorMessage(" ");
    setSuccessMessage(false);
    // handlelogin
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        if (!result.user.emailVerified) {
          alert("Please verify your Email.");
        } else {
          setSuccessMessage(true);
        }
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    // send Password reset
    sendPasswordResetEmail(auth, email)
    .then(()=>{
        alert("Password Reset mail send to your Email.")
    })
    .catch(error=>{
        setErrorMessage(error.message);
    })
  };
  return (
    // Email Sign in

    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            ref={emailRef}
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          <div onClick={handleForgetPassword}>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
          <p>
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 underline">
              Register
            </Link>
          </p>
        </form>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {success && (
          <p className="text-green-500">User Logged in Successfully.</p>
        )}
      </div>
    </div>
  );
};

export default Login2;
