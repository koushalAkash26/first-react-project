import React from 'react'
import Card from './card'
import styles from './appStyle.module.css'

function Cardgenerator({robots}) {
    if(robots.length!==0){
    return (
        
        <div className={styles.robotlist}>
           {robots.map((robot)=><Card key={robot.id} collection={robot}>{robot.id}</Card>)} 
        </div>
        
    )
    }
    else{
        return(
            <h1>robot not found</h1>
        )
    }
}

export default Cardgenerator
