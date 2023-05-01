import React from "react";

export default function Box(props) {
    return (
        <div className="box" onClick={() => {props.toggleIsHeld(props.id)}}>
            <h1 className="box--value">{props.value}</h1>
        </div>
    )
}

