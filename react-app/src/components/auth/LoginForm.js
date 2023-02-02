import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import "./form.css";
const LoginForm = () => {
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const user = useSelector((state) => state.session.user);
    const dispatch = useDispatch();

    const onLogin = async (e) => {
        e.preventDefault();
        const data = await dispatch(login(email, password));
        if (data) {
            setErrors(data);
            // console.log(data, "CAN I SEE THIS");
        }
    };
    // console.log(errors, "errors");
    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    if (user) {
        return <Redirect to="/" />;
    }

    return (
        <div
            className="modal-content login-signup-page-container"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="login-signup-form-container">
                <header className="login-signup-header">Sign in</header>
                <form className="login-signup-form" onSubmit={onLogin}>
                    <div>
                        {errors.map((error, ind) => (
                            <div key={ind}>{error}</div>
                        ))}
                    </div>
                    <div className="play">
                        <div>
                            <label htmlFor="email">Email: </label>
                            <input
                                name="email"
                                type="text"
                                className="email-input-field input-field"
                                placeholder="Email"
                                value={email}
                                onChange={updateEmail}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password: </label>
                            <input
                                name="password"
                                type="password"
                                className="password-input-field input-field"
                                placeholder="Password"
                                value={password}
                                onChange={updatePassword}
                            />
                        </div>
                    </div>
                    <button className="login-submit" type="submit">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
