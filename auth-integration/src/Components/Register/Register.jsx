import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className="card bg-base-100 border-2 border-black w-full mx-auto mt-10 max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-4xl text-center pl-5 pt-5 font-bold">Register now!</h1>
            <div className="card-body">
                <form className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" className="input" placeholder="Full Name" />
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />
                    <button className="btn btn-neutral mt-4">Sign Up</button>
                </form>
                <p>Already have an account?<Link to="/login" className="text-blue-600 hover:underline font-semibold"> Login</Link></p>
            </div>
        </div>
    );
};

export default Register;