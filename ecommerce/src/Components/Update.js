import React, {useState} from "react";
import cloth from "./cloth.jpg";
import red from "./redCloth.jpg";
import Size from "./Size";
const Update = (props) => {
    const[show,setShow] = useState(true);
    const handleShow = () => {
        setShow(false);
    }
    const handleReverse = () => {
        setShow(true);
    }
    const[checked,setChecked] = useState([]);

    const shopped =[{
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
        }];

    const zenHandle = (id) => {
        if (!checked.includes(id)) {
            const newChecked = [...checked, id];
            setChecked(newChecked);
            console.log(checked);
        }
        }
    let summation = 0;
 let sum = (shopped) => {

        summation = summation + shopped.price;
 }
    return(
        <>
            {   show ? (
                    <> <nav className="navbar nav ">
                        <button onClick={handleShow} className="btn btn-outline-dark fs-1 ms-auto">
                            <i className="fa-solid fa-cart-shopping"></i>
                        </button>
                    </nav>

                    </> ) : (
                        <>
        <div className="row position-relative row g-0  ms-auto">
            <div className="col col-lg-5 ms-auto">

                <div className="card bg-black ms-auto">
                    <div className="card-title text-light">
                        <button onClick = {handleReverse} className="btn btn-dark text-light fs-1 ">
                            X
                        </button>

                        <h2 className="text-center">
                            <i className="fa-solid fa-cart-shopping"></i> Cart
                        </h2>
                    </div>

                    <div className="card-body bg-black">
                        <div className="row row-cols-1">
                            {shopped.map((shopped) => {
                                if (checked.some((c) => c === shopped.id))  {
                                sum(shopped);
                                 return(   <div className="col card bg-black">
                                        <div className="card-body ">
                                            <div className="row row-cols-3">
                                                <div>
                                                    <img className="img-fluid" src={shopped.image}/>
                                                </div>
                                                <div className="text-light">
                                                    {shopped.name}
                                                </div>
                                                <div className="text-warning">
                                                    {shopped.price}
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                 ); }
                                }
                            )
                            }
                                    <div className="bg-dark text-light">
                                        <div className="row row-cols-2">
                                            <h2 className="col">SubTotal</h2>
                                            <h3 className="col text-warning ps-5">{summation}</h3>
                                        </div>
                                        <div className="text-center">
                                            <button className="btn btn-dark text-light text-center">
                                                CHECK OUT
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


       </>
)  }
<Size zenHandle = {zenHandle} shopped = {shopped} />
          </>  );
}

export default Update;