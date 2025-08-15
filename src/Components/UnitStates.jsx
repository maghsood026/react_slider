import React from 'react'
import State from './State'

export default function UnitStates({name, units}) {

    const states = units.map((unit)=>{
        return <State state={unit.state} value={`${unit.value}`}/>
    })
    
    return (
        <div className={`clash-card__unit-stats clash-card__unit-stats--${name} clearfix`}>
            {
                states
            }
        </div>
    )
}
