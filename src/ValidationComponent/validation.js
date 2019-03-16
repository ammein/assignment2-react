import React from 'react';

const validation = props => {

    return (
        <div>
            <p>Text Length : {(props.text.length > 5) ? (props.text.length > 50) ? "Text long enough" : props.text.length : "Text too short"}</p>
        </div>
    );
}

export default validation;