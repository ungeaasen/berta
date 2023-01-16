import { useState } from "react";

const Modal = props => {
    if (!props.show) {
        return
    }
    return (
        <div id="myModal" className="modal" style={ props.show ? { display:'block'} : {display : 'none'} }  >
            <div className="modal-content">
                <button onClick={props.onClose} className="close">&times;</button>
                <p>Please gjør robot testen!</p>
            </div>
        </div>
    )
}

export default Modal;