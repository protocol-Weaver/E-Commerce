import React,{useState} from "react";
import Size from "./Size";
import Content from "./Content";
import Update from "./Update";
const Display = () => {
const[show,setShow] = useState(true);
const handleShow = () => {
    setShow(false);
}
const handleReverse = () => {
    setShow(true);
}
    return(
        <>
            <Update/>
        </>
    );
}

export default Display;