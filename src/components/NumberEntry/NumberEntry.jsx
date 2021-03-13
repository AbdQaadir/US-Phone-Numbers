import React from 'react'

import "./NumberEntry.css"
const formatNumber = (number) => {
    const firstThree = number.slice(0,3)
    const secondThree = number.slice(3,6)
    const lastFour = number.slice(-4);

    return `(${firstThree}) ${secondThree}-${lastFour}`;
}
const NumberEntry = ({number, handleIndex, lastIndex, firstIndex}) =>{
    const formattedNumber = formatNumber(number.number);

    const switchIndex = (type) => {
        handleIndex({element: number, type});
    }
    return (
        <div className="entry-item">
            <h1>{formattedNumber}</h1>
            <button disabled={firstIndex.id === number.id ? true : false} onClick={() => switchIndex("up")}>Up</button>
            <button disabled={lastIndex.id === number.id ? true : false} onClick={() => switchIndex("down")}>Down</button>
        </div>
    )
}

export default NumberEntry
