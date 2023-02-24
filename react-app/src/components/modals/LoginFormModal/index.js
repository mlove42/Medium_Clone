import React, { useState } from "react";
import { Modal } from "../../../context/Modal";
import LoginForm from "../../auth/LoginForm";
import "./login.css";
const LoginFormModal = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div className="sign-in-button" onClick={() => setShowModal(true)}>
                Sign In
            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LoginForm />
                </Modal>
            )}
        </>
    );
};

export default LoginFormModal;
