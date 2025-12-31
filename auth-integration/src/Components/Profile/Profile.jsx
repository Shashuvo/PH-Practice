import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Profile = () => {
    const { user } = use(AuthContext);
    return (
        <div className="card card-sm bg-base-200 max-w-60 mx-auto shadow mt-10">
            <div className="card-body">
                <p>{user.email}</p>
            </div>
        </div>
    );
};

export default Profile;