import { useEffect, useRef, useCallback } from "react";
import useOutsideClick from "./useOutsideClick";


function Modal({show, notShowing, onClose, text}) {
    const ref = useRef();

    useOutsideClick(ref, () => {
        outsideClickClose()
    });

      const outsideClickClose = useCallback(event => {
        notShowing(false)
      }, [notShowing])

    return (
        <div id="myModal" className="modal" style={ show ? {display:'block'} : {display:'none'} }  >
            <div ref={ref} className="modal-content">
                <span className="close"><button onClick={onClose} >&times;</button></span>
                <span className="text"><h2>{text}</h2></span>
            </div>
            
        </div>
    )
}

export default Modal;