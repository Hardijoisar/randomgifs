import React, { useEffect, useState } from 'react';
import './Random.css';
import { Spinner } from './Spinner';
import useGif from '../hooks/useGif';

export const Tag = () => {

    const [tag, setTag] = useState("")
    const {gif, loading, fetchData} = useGif(tag);

    function clickHandler()
    {
        fetchData()
        console.log(tag) 
    }


    function changeHandler(event)
    {
        setTag(event.target.value);
    }
    
  return (
    <div>
        <div className='randombox' >
            <div className='mainbox2'>
            <h2>RANDOM {tag } GIF</h2>
               {
                loading ? (<Spinner/>) : (<img src={gif}></img>)
               } 
            <input className='btn' onChange={changeHandler} value={tag}></input>
            <button onClick={clickHandler} className='btn'>GENERATE</button>
            </div>
        </div>
    </div>
  )
}
