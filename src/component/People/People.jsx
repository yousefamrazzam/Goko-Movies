import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function People() {
    const[peopleapi,setPeopleApi]=useState([])

async function People() {
let x= await axios.get(`https://api.themoviedb.org/3/trending/person/day?api_key=44ee5523e457e74020effc2bddc4592e`)
console.log(x.data.results);
setPeopleApi(x.data.results)
}

useEffect(()=>{
  People()
},[])


  return <>
  <h1 className=' mt-5 mb-3 text-center '>Ternd People</h1>
  <div className="container">
    <div className="row">
    <div className="col-md-3 d-flex align-items-center">
      <div>
      <div className="border w-25 mb-3"></div>
      <h2 className=' h4'>Trending People </h2>
      <div className=" w-100 mt-3 border "></div>
      </div>
    </div>

        
      {peopleapi.slice(0,10).map((item,index)=><div className="col-md-3" key={index}>;
<img src={'https://image.tmdb.org/t/p/w500/'+item.profile_path} className='w-100 rounded rounded-5' alt=''/>
  
<h4 className=' text-white'>{item.name}</h4>
</div>
)}
    </div>
  </div>
  
  
  </>
}



