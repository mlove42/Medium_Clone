import React, { useState } from "react";
import { Modal } from "../../../context/Modal";
import LoginForm from "../../auth/LoginForm";

const LoginFormModal = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div onClick={() => setShowModal(true)}>Log in</div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LoginForm />
                </Modal>
            )}
        </>
    );
};

export default LoginFormModal;