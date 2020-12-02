import React from 'react'

const Card = ({confirmed, recovered, deaths}) =>{
    return (
        <div className="card-container">
            <p>{confirmed}</p>
            <p>{recovered}</p>
            <p>{deaths}</p>
        </div>
    )
}

export default Card;