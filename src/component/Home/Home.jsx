import React from 'react'
import Movie from '../Movie/Movie'
import Tv from '../Tv/Tv'
import People from '../People/People'

export default function Home() {
  return <>
    <h1 className=' mt-5 text-center  border-bottom container'>Trending (Movie&Tv&People)</h1>

 <div className="container">
  <div className="row">

    <Movie/>

    <Tv/>

    <People/>

  </div>
 </div>
  </>
}
