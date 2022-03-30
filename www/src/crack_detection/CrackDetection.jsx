import React, { useState } from "react";
import './crackdetection.less';

const CrackDetection = () => {
    const [count, setCount] = useState(0);
    
    function add() {
        setCount(count+2);
    }

    return (
        <div class="crackdetection__viewport">
            <div>
                <button onClick={add}>{count}</button>
            </div>
        </div>
    );
};

export default CrackDetection;