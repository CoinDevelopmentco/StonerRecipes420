import React,{useState} from "react";
import './Body.css';

import Ingredients from "./Ingredients";

function Body(props) {
    const [count, setCount]  = useState(0);
    const ing0 = count*6;
    const ing1 = count*2;
    const ing2 = count*1;

    return(
        <div className="body">
            <h1 className="title" >How to Make CannaButter</h1>
            <div className="ing" >Ingredients</div>
                        <div className="servigns" >
                            <div>
                                Servings: {count}  
                            </div>
                            <button onClick={() => setCount(count - 1)} >minusOne</button>
                            <button onClick={() => setCount(count + 1)} >addOne</button>
                        </div>
                    <Ingredients ing0={ing0} ing1={ing1} ing2={ing2} />
            </div>
    );
}

export default Body;