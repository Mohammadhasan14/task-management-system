import React from 'react'

export default function Modal({ isOpen, onClose, children, secondaryButtonTitle, }) {
    if (!isOpen) {
        return null;
    }

    return (
        <div>
            <div>
                {children}
                <button onClick={onClose}>{secondaryButtonTitle}</button>
            </div>
        </div>
    )
}
