import React from "react";
import styles from "./modal.module.scss";

const Modal = ({ children, onSuccess, isOpen, onClose }) => {


    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.modal} id="modal">
            <div className={styles.content}>{children}</div>
            <div className={styles.actions}>
                <button className="btn btn-primary btn-sm" style={{ marginLeft: '2rem' }} onClick={onClose}>
                    close
                </button>
                <button className="btn btn-primary btn-sm" onClick={onSuccess}>
                    Yes
                </button>
            </div>
        </div>
    );
}

export default Modal;
