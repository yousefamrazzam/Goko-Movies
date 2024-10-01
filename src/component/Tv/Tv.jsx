import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Tv() {
    const[tvapi,setTvApi]=useState([])

async function Tv() {
let x= await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=44ee5523e457e74020effc2bddc4592e`)
console.log(x.data.results);
setTvApi(x.data.results)
}

useEffect(()=>{
  Tv()
},[])


  return <>
  <h1 className=' mt-5 mb-3 text-center'>Ternd TV</h1>
  <div className="container">
    <div className="row">
    <div className="col-md-3 d-flex align-items-center">
      <div>
      <div className="border w-25 mb-3"></div>
      <h2 className=' h4'>Trending TV <br/> To Watch Right Now</h2>
      <p className=' py-2 '>Watched Tv To Watch Right Now</p>
      <div className=" w-100 mt-3 border "></div>
      </div>
    </div>

        {tvapi.slice(0,10).map((item,index)=><div className="col-md-3" key={index}>
        <Link to={`/detailstv/${item.id}`} className=' text-decoration-none'>

        <div className="tv position-relative">

<img src={'https://image.tmdb.org/t/p/w500/'+item.poster_path} className='w-100 rounded rounded-5' alt=''/>
<div className="imglayer">
 <div className="imginfo">
<h6>{item.name}</h6>
   </div>
  </div>

<h4 className='text-white'>{item.name}</h4>
{item.vote_average?
        <div className="vote p-2 text-white position-absolute top-0 end-0">
          {item.vote_average?.toFixed(1)}</div>:''}

</div>
</Link>
</div>
)}
    </div>
  </div>
  
  
  </>
}


