import React from 'react'
import {createPortal} from "react-dom"
const ModalContainer = (props) => {
    return createPortal(props.children, document.getElementById('portal'));
}
export default ModalContainer;
