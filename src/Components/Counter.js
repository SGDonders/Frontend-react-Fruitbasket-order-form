import React from 'react';

const Counter = ({buttonClass, type, bowlName, increment, decrement, isDisabled, className, countValue}) => {

    return (
        <div className={className}>
            <h2 className>{bowlName}</h2>
            <div className={buttonClass}>
                <button
                    className="btn"
                    type={type}
                    onClick={decrement}
                    disabled={isDisabled}
                >-
                </button>
                <div id="count-value">{countValue}</div>
                <button
                    className="btn"
                    type={type}
                    onClick={increment}
                >+
                </button>
            </div>
        </div>
    );
}

export default Counter;