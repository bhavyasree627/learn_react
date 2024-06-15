import React from 'react';

const Hello = (props) => {
    console.log(props);
    return (
        <div>
            <h1>
                Hello {props.name} with girlfriend {props.girlfriend}
            </h1>
            {props.children}
        </div>
    )
}

export default Hello;