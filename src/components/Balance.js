import React from 'react';

function Balance(props) {
    return (
    <div>
        <h4>Current Balance</h4>
        <h1 id="balance">${props.value}</h1>
    </div>
    )
}

export default Balance;