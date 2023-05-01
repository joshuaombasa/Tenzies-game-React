import React from "react";

export default function Box(props) {

    const styles = {backgroundColor: props.isHeld? "green" : ""}

    return (
        <div style={styles} className="box" onClick={() => {props.toggleIsHeld(props.id)}}>
            <h1 className="box--value">{props.value}</h1>
        </div>
    )
}

