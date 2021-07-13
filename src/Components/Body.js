import React,{useState} from "react";
import './Body.css';

import Ingredients from "./Ingredients";
import Instructions from "./Instructions";

function Body(props) {
    const [count, setCount]  = useState(0);
    const ing0 = count*6;
    const ing1 = count*2;
    const ing2 = count*1;

    return(
        <div className="body">
            <div className="topSpan" />
            <div className="howTwoTitle" >How to Make CannaButter</div>
            <div className="titleSpan" />
            <div className="ingredientTitle" >Ingredients</div>
                        <div className="servigns" >
                            <div>
                                Servings: {count}  
                            </div>
                            <button onClick={() => setCount(count - 1)} >-One</button>
                            <button onClick={() => setCount(count + 1)} >+One</button>
                        </div>
                    <Ingredients ing0={ing0} ing1={ing1} ing2={ing2} />
                    <Instructions ing0={ing0} ing1={ing1} ing2={ing2} />
            </div>
    );
}

export default Body;