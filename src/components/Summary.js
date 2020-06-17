import React from 'react';

function Summary(props) {
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">
                    {props.inc}
                </p>
            </div>
            <div>
                <h4>Expenses</h4>
                <p className="money minus">
                    {props.exp}
                </p>
            </div>
        </div>
    )
}

export default Summary;