import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([]);

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/AniketShewale266')
    //     .then((res)=> res.json())
    //     .then((data) => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])

  return (
    <div className='text-center m-4 bg-gray-600 text-white text-3xl py-4'>
        Github followers: {data.followers}
        <img className='m-auto' src={data.avatar_url} alt="Git Picture" width={300}/>
    </div>
  )
}

export default Github

export const GitHubInfoLoader = async () => {
    const responce = await fetch("https://api.github.com/users/AniketShewale266")
    return responce.json();
}