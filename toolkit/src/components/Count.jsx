import React from "react";

function Count () {

    return(
        <>
            <div>
                <button onClick={() => incCount()}>+</button>

                <button  onClick={() => descCount()}>-</button>

                <br />
                <br />
                


                <button  onClick={() => resetCount()}>Reset</button>
            </div>
        </>
    )
}
export default Count