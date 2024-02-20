import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './Random.css';
import { Spinner } from './Spinner';
import useGif from '../hooks/useGif.js';

// const API_KEY = process.env.REACT_API_GIPHY_KEY;
// const API_KEY = 'bl3xASZpveEiqzfXxzD0GkDe5JWdY1So';

export const Random = () => {
      
    const {gif, loading, fetchData} = useGif();
    function clickHandler()
    {
        fetchData()
    }
    
  return (
    <div>
        <div className='randombox' >
            <div className='mainbox1'>
            <h2>A RANDOM GIF</h2>
               {
                loading ? (<Spinner/>) : (<img src={gif}></img>)
               } 
            <button onClick={clickHandler} className='btn'>GENERATE</button>
            </div>
        </div>
    </div>
  )
}
