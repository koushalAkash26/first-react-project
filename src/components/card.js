import React from 'react'
import styles from './appStyle.module.css'

function Card({collection}) {
    return (
        <div className={styles.robot}>
            <img alt="user" src={`https://robohash.org/${collection.id}?set=set1&size=200x200`}/>
    <h3 >{collection.name}</h3>
    <p>{collection.email}</p>
        </div>
    )
}

export default Card
