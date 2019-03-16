import React from 'react';

const Char = props =>{

    var style = {
        display : "inline-block",
        padding : "16px",
        textAlign : "center",
        border : "1px solid black"
    };

    return (
        <div>
            {
                props.list.map((list , index) => {
                    return <li style={style} key={index} onClick={(event) => props.click(event , index)}>{list}</li>
                })
            }
        </div>
    )
}   

export default Char;