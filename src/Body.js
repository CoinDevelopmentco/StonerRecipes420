import React,{useState} from "react";
import './Body.css';

function Body() {
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
                    <div className="column1">
                        <div>
                            <div className="alignIng">
                                <div>
                                    Water
                                </div>
                                <div>
                                    {ing0} Cups
                                </div>
                            </div>
                                <img className="img1" src="https://thumbs.dreamstime.com/b/measuring-cup-clear-water-isolated-white-176674362.jpg"/>
                            <div className="alignIng">
                                <div>
                                    Butter
                                </div>
                                <div>
                                    {ing1} Cups
                                </div>
                            </div>
                            <div>
                                    <img className="img1" src="https://res.cloudinary.com/nassau-candy/image/upload/c_fit,w_1000,h_1000,f_auto/992021.jpg"/>
                            </div>
                            <div className="alignIng">
                                <div>
                                    DeCarb'd Cannabis
                                </div>
                                <div>
                                    {ing2} OZ
                                </div>
                            </div>
                            <div>
                                    <img className="img1" src="https://seedstersunion.com/wp-content/uploads/2020/03/big-bud-seeds_a9fa544b-18bf-4b27-842e-961a363de3a0.jpg"/>
                            </div>
                        </div>

                    </div>
            </div>
    );
}

export default Body;