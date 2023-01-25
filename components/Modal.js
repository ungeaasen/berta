import { useEffect, useRef, useCallback } from "react";
import useOutsideClick from "./useOutsideClick";


function Modal({show, notShowing, onClose}) {
    const ref = useRef();
    console.log(notShowing)

    useOutsideClick(ref, () => {
        outsideClickClose()
    });

      const outsideClickClose = useCallback(event => {
        console.log('You clicked outside')
        notShowing(false)
      }, [notShowing])

    return (
        <div id="myModal" className="modal" style={ show ? {display:'block'} : {display:'none'} }  >
            <div ref={ref} className="modal-content">
                <button onClick={onClose} className="close">&times;</button>
                <p>Vennligst gjør robot-testen!</p>
            </div>
        </div>
    )
}

export default Modal;