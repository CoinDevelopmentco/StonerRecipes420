import React from "react";
import './Navbar.css';
import WeedLeaf from './weedLeaf.png';

function Navbar() {
    return(
        <div className="Navbar">
            <div className="c1">
                    <h1>LOGO</h1>
            </div>
            <div className="c2">
                    <h1>StonerRecipes</h1>
            </div>
            <div className="c3">
                    <p>(Legalize-It)</p>
            </div>
        </div>
    );
}

export default Navbar;