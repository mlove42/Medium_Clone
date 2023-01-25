import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";

const SignUpForm = () => {
    const [errors, setErrors] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const user = useSelector((state) => state.session.user);
    const dispatch = useDispatch();

    const onSignUp = async (e) => {
        e.preventDefault();
        if (password === repeatPassword) {
            const data = await dispatch(
                signUp(firstName, lastName, username, email, password)
            );
            if (data) {
                setErrors(data);
            }
        }
    };

    const updateFirstName = (e) => {
        setFirstName(e.target.value);
    };
    const updateLastName = (e) => {
        setLastName(e.target.value);
    };
    const updateUsername = (e) => {
        setUsername(e.target.value);
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    const updateRepeatPassword = (e) => {
        setRepeatPassword(e.target.value);
    };

    if (user) {
        return <Redirect to="/" />;
    }

    return (
        <div
            className="signup-form-height modal-content login-signup-page-container"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="login-signup-form-container">
                <header className="login-signup-header">Sign Up</header>
                <form className="login-signup-form" onSubmit={onSignUp}>
                    <div>
                        {errors.map((error, ind) => (
                            <div key={ind}>{error}</div>
                        ))}
                    </div>
                    <div className="login-signup-input-fields">
                        <label>First Name</label>
                        <input
                            type="text"
                            name="First Name"
                            onChange={updateFirstName}
                            required
                            value={firstName}
                        ></input>
                    </div>
                    <div className="login-signup-input-fields">
                        <label>Last Name</label>
                        <input
                            type="text"
                            name="Last Name"
                            onChange={updateLastName}
                            required
                            value={lastName}
                        ></input>
                    </div>
                    <div className="login-signup-input-fields">
                        <label>User Name</label>
                        <input
                            type="text"
                            name="username"
                            onChange={updateUsername}
                            required
                            value={username}
                        ></input>
                    </div>
                    <div className="login-signup-input-fields">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            onChange={updateEmail}
                            required
                            value={email}
                        ></input>
                    </div>
                    <div className="login-signup-input-fields">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            onChange={updatePassword}
                            required
                            value={password}
                        ></input>
                    </div>
                    <div className="login-signup-input-fields">
                        <label>Repeat Password</label>
                        <input
                            type="password"
                            name="repeat_password"
                            onChange={updateRepeatPassword}
                            value={repeatPassword}
                            required={true}
                        ></input>
                    </div>
                    <button className="Sign-up-login-submit" type="submit">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;
