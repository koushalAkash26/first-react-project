import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Cardgenerator from './cardgenerator'
import styles from './appStyle.module.css'



function Search() {
    const [state,setState]=useState("")
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users/')
        .then((res)=>{
            console.log(res)
            setData(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    const inputHandler=(e)=>{
        setState(e.target.value)
    }
    const robots=data.filter((robot)=>robot.name.toLowerCase().includes(state.toLowerCase()))
    
    return (
        <div>
            <input value={state} onChange={inputHandler} placeholder="search robots" className={styles.searchBox}></input>
            <Cardgenerator robots={robots}></Cardgenerator>
        </div>
    )
}

export default Search
