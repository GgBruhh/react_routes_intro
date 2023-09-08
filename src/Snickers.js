import React from "react";
import { NavLink } from "react-router-dom";

const SNICKER_IMG = 'https://images.heb.com/is/image/HEBGrocery/001962881-1'

const Snickers = () =>{
    return(
        <div>
            <h1>You chose Cheetos!</h1>
            <i>Here is your snack</i>
            <img src={`${SNICKER_IMG}`} alt="cheetos"/>
        </div>
    )
}

export default Snickers;