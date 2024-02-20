import React from 'react'
import { useState, useEffect} from 'react';
import axios from 'axios';

const API_KEY = 'bl3xASZpveEiqzfXxzD0GkDe5JWdY1So';
function useGif(tag){

    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState(false);
    let api_url;
    
    async function fetchData()
    {
        setLoading(true)
    
        tag ? 
        (api_url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`)
        :
        (api_url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)
    
        const  {data} = await axios.get(api_url);

        const imgurl = data.data.images.downsized_large.url;

        setGif(imgurl)
        setLoading(false);
    }

    useEffect(()=>{
       fetchData();
    },[])

    return {gif, loading, fetchData};
}

export default useGif;