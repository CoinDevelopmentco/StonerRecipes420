import React from "react";
import './Navbar.css';
import WeedLeaf from './weedLeaf.png';

function Navbar() {
    return(
        <div className="Navbar">
            <div className="c1">
                    <p>LOGO</p>
            </div>
            <div className="c2">
                    <p>StonerRecipes</p>
            </div>
            <div className="c3">
                    <p>(Legalize-It)</p>
            </div>
        </div>
    );
}

export default Navbar;