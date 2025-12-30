import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
    const { signInUser } = use(AuthContext);
    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        // sign in
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="card bg-base-100 border-2 border-black w-full mx-auto mt-10 max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-4xl text-center pl-5 pt-5 font-bold">Login now!</h1>
            <div className="card-body">
                <form onSubmit={handleSignIn} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" name="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name="password" className="input" placeholder="Password" />
                    <div>
                        <a className="link link-hover">Forgot password?</a>
                    </div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
                <p>Don't have an account?<Link to="/register" className="text-blue-600 hover:underline font-semibold"> Register</Link></p>
            </div>
        </div>
    );
};

export default Login;
