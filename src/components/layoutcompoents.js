import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function Toasts(title, msg, pos=null) {
    const positions = [
        'top-start',
        'top-center',
        'top-end',
        'middle-start',
        'middle-center',
        'middle-end',
        'bottom-start',
        'bottom-center',
        'bottom-end',
    ];
    if(pos){
        if (!positions.find(pos))
            pos = null;
    }
    const defaultPosition = 'bottom-end';
    return(
        <>
            <div
                aria-live="polite"
                aria-atomic="true"
                className="bg-lihgt position-relative"
                >
                <ToastContainer
                    className="p-3"
                    position={pos ? pos : defaultPosition}
                    style={{ zIndex: 1 }}
                    >
                    <Toast>
                        <Toast.Header closeButton={false}>
                            <img
                                src="~"
                                className="rounded me-2 bg-danger"
                                alt=""
                            />
                            <strong className="me-auto">{title}</strong>
                        </Toast.Header>
                        <Toast.Body>{msg}</Toast.Body>
                    </Toast>
                </ToastContainer>
            </div>
        </>
    )
}

export default Toasts;