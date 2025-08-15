import React from 'react'

export default function Arrrow({direction, handleClick}) {
    return (
        <div className="arrow-wrapper">
            <div className="round">
                <div id="cta">
                    
                    <span className={`arrow ${direction}`} onClick={handleClick}></span>
                </div>
            </div>
        </div>
    )
}
