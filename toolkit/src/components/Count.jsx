import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { incCount, descCount, resetCount } from "../toolkit/CounterSlice";

function Count () {

    const count = useSelector((state) => state.count)
    console.log(count)
    const dispatch = useDispatch()

    return(
        <>
            <div>
                <button onClick={() => dispatch( incCount())}>+</button>
                    <h2>{count}</h2>
                <button  onClick={() => dispatch(descCount())}>-</button>

                <br />
                <br />
                


                <button  onClick={() => dispatch( resetCount())}>Reset</button>
            </div>
        </>
    )
}
export default Count