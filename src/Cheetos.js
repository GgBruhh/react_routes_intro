import React from "react";
import { NavLink } from "react-router-dom";

const CHEETO_IMG = 'https://images.heb.com/is/image/HEBGrocery/001962881-1'

const Cheetos = () =>{
    return(
        <div>
            <h1>You chose Cheetos!</h1>
            <i>Here is your snack</i>
            <img src={`${CHEETO_IMG}`} alt="cheetos"/>
        </div>
    )
}

export default Cheetos;