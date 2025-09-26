import React from 'react';
import useInputField from '../Hooks/useInputField';

const SimpleForm = () => {

    const [name, nameOnChange]=useInputField('');

    const [email,emailOnChange]=useInputField('');

    const [password,passwordOnChange]=useInputField('');

    const handleForm = (e) =>{
        e.preventDefault();
        console.log("Form submitted", name, email, password);
    }


    return (
        <div>
            <form onSubmit={handleForm}>
                <input defaultValue={name} onChange={nameOnChange} type="text" placeholder='Your Name' />
                <br />
                <input defaultValue={email} onChange={emailOnChange} type='email' placeholder='Your Email' required></input>
                <br />
                <input defaultValue={password} onChange={passwordOnChange} type="password" placeholder='Type Password' required />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;