import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import CrackDetection from "./crack_detection/CrackDetection.jsx";

ReactDOM.render(
    <Suspense fallback="Loading...">
        <CrackDetection />
    </Suspense>, document.body
);