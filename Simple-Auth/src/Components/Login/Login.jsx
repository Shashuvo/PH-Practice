import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase/firebase_init";

const Login = () => {
  const [user, setUser] = useState(null);

  const provider = new GoogleAuthProvider();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out Completed");
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    console.log("Sign In completed");

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    

    // Google sign in
    <div className='flex flex-col gap-4 justify-center items-center'>
        <h1>Please Login</h1>

        {
            user ?
                <button onClick={handleSignOut} className='btn bg-black text-white hover:opacity-80 p-4 rounded-2xl'>Sign Out</button>
                : <button onClick={handleGoogleSignIn} className='btn bg-black text-white hover:opacity-80 p-4 rounded-2xl'>Sign in with Google</button>
        }
        {
            user && <div className='flex flex-col gap-4 justify-center items-center'>
                <h3>{user.displayName}</h3>
                <h3>{user.email}</h3>
                <img src={user.photoURL} alt="Profile Photo" />
            </div>
        }
    </div>
  );
};

export default Login;
