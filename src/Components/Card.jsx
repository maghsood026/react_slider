import React from 'react'
import CardImage from './CardImage'
import CardItem from './CardItem'
import UnitStates from './UnitStates'

export default function Card({hero}) {
    return (
        <div className={`clash-card ${hero.name}`}>
            <CardImage name={hero.name} img={hero.img} />
            <CardItem type={`clash-card__level clash-card__level--${hero.name}`}>{hero.level}</CardItem>
            <CardItem type='clash-card__unit-name'>{hero.name}</CardItem>
            <CardItem type='clash-card__unit-description'> {hero.description}</CardItem>
            <UnitStates units={hero.units} name={hero.name}/>

        </div>
    )
}
