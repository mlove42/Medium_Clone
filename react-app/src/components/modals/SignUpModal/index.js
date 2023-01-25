import React, { useState } from "react";
import { Modal } from "../../../context/Modal";
import SignUpForm from "../../auth/SignUpForm";

const LoginFormModal = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div className="accentedButton" onClick={() => setShowModal(true)}>
                Get Started
            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SignUpForm />
                </Modal>
            )}
        </>
    );
};

export default LoginFormModal;
