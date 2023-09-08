import React from "react";
import { NavLink } from "react-router-dom";

const KITKAT_IMG = 'https://images.heb.com/is/image/HEBGrocery/001962881-1'

const KitKat = () =>{
    return(
        <div>
            <h1>You chose Cheetos!</h1>
            <i>Here is your snack</i>
            <img src={`${KITKAT_IMG}`} alt="cheetos"/>
        </div>
    )
}

export default KitKat;