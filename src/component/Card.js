// rafce = atajo para crear:
import React from 'react'

const Card = (props) => {
    console.log(props.title);
    console.log(props.score);
    console.log(props.address);
    //JSX
    return (
        <div>
            <img src= {props.image} />
            <h1>{props.title}</h1>
            <h4>{props.score} estrellitas</h4>
            <p>{props.address}</p>
            {props.superhost ? <small>Superhost</small> : null }
        </div>
    )
}

export default Card
