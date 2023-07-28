import React, {useState} from "react";
import Content from "./Content";
const Size = ({shopped,zenHandle}) => {

    const[value,setValue] = useState("A");
    const  handleSmall = () => {
        setValue("S");
    }
    const handleLarge = () => {
        setValue("L");
    }
 const handleAll = () => {
        setValue("A");

 }
    return(
        <div className="row row-cols-2">
        <div className="card border-light  col-lg-3  mt-5 bg-white">
            <div className="card-title">
                <h2 className="text-dark  text-center ">Sizes :</h2>
            </div>
            <div className="card-body ">
                <div className="row row-cols-4 ">
                    <button onClick={handleLarge} className="btn col rounded-circle p-4 text-dark btn-outline-light">L</button>
                    <button onClick = {handleSmall} className="btn col rounded-circle p-4 text-dark btn-outline-light">S</button>
                    <button className="btn col rounded-circle p-3 text-dark btn-outline-light">M</button>
                    <button onClick = {handleAll} className="btn col rounded-circle p-4 text-dark btn-outline-light">All</button>

                </div>
            </div>
            </div>
            <Content value = {value} shopped = {shopped} zenHandle = {zenHandle} />

        </div>
    );
}
export default Size;