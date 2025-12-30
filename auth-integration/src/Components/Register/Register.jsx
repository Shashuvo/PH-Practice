import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';

const Register = () => {
    const { createUser } = use(AuthContext);
    const handleSignUp = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="card bg-base-100 border-2 border-black w-full mx-auto mt-10 max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-4xl text-center pl-5 pt-5 font-bold">Register now!</h1>
            <div className="card-body">
                <form onSubmit={handleSignUp} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Full Name" />
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <button className="btn btn-neutral mt-4">Sign Up</button>
                </form>
                <p>Already have an account?<Link to="/login" className="text-blue-600 hover:underline font-semibold"> Login</Link></p>
            </div>
        </div>
    );
};

export default Register;