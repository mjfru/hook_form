import { useState } from 'react';

const Form = () => {    //! got ride of props as an argument, wasn't being used?
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")

    const createUser = (e) => {     //! Since we're not storing this info, I suppose it's not needed yet?
        e.preventDefault();
    }
    //     const userInfo = { firstName, lastName, email, password, confirmPassword };
    //     setFirstName("");
    //     setLastName("");
    //     setEmail("");
    //     setPassword("");
    //     setConfirmPassword("");
    // };

    return (
    <>
        <h2>Create User</h2>
        <form>
            <div>
                <label>First Name: </label>
                <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div>
                <label>Email: </label>
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value)} />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
            <hr />
        </form>
        <div>
            <h4>Confirm User Input:</h4>
            <div>
                <label>First Name: {firstName}</label>
            </div>
            <div>
                <label>Last Name: {lastName}</label>
            </div>
            <div>
                <label>Email: {email}</label>
            </div>
            <div>
                <label>Password: {password}</label>
            </div>
            <div>
                <label>(Hopefully) Matching Password: {confirmPassword}</label>
            </div>
        </div>
    </>
    );
}

export default Form