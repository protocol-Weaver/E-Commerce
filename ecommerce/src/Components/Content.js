import React, { useState } from "react";
import cloth from "./cloth.jpg";
import red from "./redCloth.jpg";
const Content = ({zenHandle,shopped,value}) => {
    const [cart, setCart] = useState("");
    const clickCart = (products) => {
        setCart(products.id);
        console.log(products.id);

        zenHandle(products.id);
    };

    const products = [
        {
            id: 1,
            name : "cloth",
            image: cloth,
            price: 12.2,
            size: "S",
        },
        {
            id: 2,
            image: red,
            name : "Red Cloth" ,
            price: 14.2,
            size: "L",
        },
    ];


    return (
        <div className="container">
            <div className="col col-lg-12 bg-secondary mt-5">
                <div className="row row-cols-4">
                    {  (value === "A") ?       products.map((products) => {
                            return (
                                <div key={products.id} className="col card col-lg-6 bg-info">
                                    <div className="card-body p-5">
                                        <img className="img-fluid" src={products.image}/>
                                        <div className="mt-5 text-light">{products.price}</div>
                                        <button onClick = {() => {clickCart(products)}} className="btn mt-5 fs-4 btn-warning text-center text-light">
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            );
                        }
                    )
                        :   products.map((products) => {
                            if (products.size === value) {
                                return (
                                    <div key={products.id} className="col card col-lg-6 bg-info">
                                        <div className="card-body p-5">
                                            <img className="img-fluid" src={products.image} />
                                            <div className="mt-5 text-light">{products.price}</div>
                                            <button className="btn mt-5 fs-4 btn-warning text-center text-light">
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                );
                            }
                        } ) }
                </div>
            </div>
        </div>
    );
};

export default Content;
