import axios from 'axios'
import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'

export default function ItemDetails() {
    let {id} = useParams();
    const [itemDetails , setitemDetails]= useState({})
    
    async function getItemDetails(id ) 
    {
    let {data} = await  axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=bd7de1002d5d536889f2190d815dc7ec`)
   setitemDetails(data);
   console.log(data);
}
useEffect(()=>{
    getItemDetails(id)
},[])
  return <>
 
            
  <div className="row">
    <div className="col-3" key={itemDetails.id}>
    {itemDetails.poster_path?<img src={'https://image.tmdb.org/t/p/w500/'+itemDetails.poster_path} className='w-100' alt=""/>:<img src={'https://image.tmdb.org/t/p/w500/'+itemDetails.profile_path} className='w-100' alt=""/>}
        </div>
        <div className="col-9" key={itemDetails.id}>
        <h3 className=' h6  my-2'>{itemDetails.name}</h3>
        <p className=' py-2 '>{itemDetails.tagline}</p>
        <ul className=' list-unstyled d-flex'>{itemDetails.genres?.map(genres=> <div className=' bg-info p-3 mx-2 rounded-2'>{genres.name}</div>)} </ul>
        <p className=' py-2'> vote : {itemDetails?.vote_average?.toFixed(1)}</p>
        <p className=' py-2' > vote count : {itemDetails?.vote_count?.toFixed(1)} </p>
        <p className=' py-2'> popularity :{itemDetails?.popularity?.toFixed(1)} </p>
        <p className=' py-2'> release date :{itemDetails?.release_date} </p>      
          <p className=' py-2 '>{itemDetails.overview}</p>

    </div>
  </div>
  </>
}
