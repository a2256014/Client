import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './style.css'

export const _Modal = () => {
    const [modalMode, setmodalMode] = useState(true)
    const onclickWindow = (e) => {
        if (e.target.closest("#modal")) return;
        setmodalMode(false)
    }

    const onclickButton = (e) => {
        setmodalMode(false)
    }

    useEffect(() => {
        window.addEventListener('click', onclickWindow);
    }, []
    );
    console.dir(Modal)
    return (
        <Modal id="modal" isOpen={modalMode}>
            Modal
            <button id="d" onClick={onclickButton}>x</button>
        </Modal>

    );
}