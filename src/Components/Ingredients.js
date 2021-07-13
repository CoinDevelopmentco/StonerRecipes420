import React from 'react';
import './Ingredients.css';

function Ingredients(props) {

    return(
        <div className="alignIng">
            <div className="container0">
                <div className="left">
                <div>
                    Water
                </div>
                <div>
                    {props.ing0} Cups+
                </div>
                </div>
                <div className="right">
                    <img className="img" src="https://thumbs.dreamstime.com/b/measuring-cup-clear-water-isolated-white-176674362.jpg"/>
                </div>
            </div>
            <div className="container0">
                <div className="left">
                <div>
                    Butter
                </div>
                <div>
                    {props.ing1} Cups
                </div>
                </div>
                <div className="right">
                    <img className="img" src="https://res.cloudinary.com/nassau-candy/image/upload/c_fit,w_1000,h_1000,f_auto/992021.jpg"/>
                </div>
            </div>
            <div className="container0">
                <div className="left">
                <div>
                Cannabis
                </div>
                <div>
                    {props.ing2} Oz
                </div>
                </div>
                <div className="right">
                    <img className="img" src="https://seedstersunion.com/wp-content/uploads/2020/03/big-bud-seeds_a9fa544b-18bf-4b27-842e-961a363de3a0.jpg"/>
                </div>
            </div>
        </div>
    );
}

export default Ingredients;