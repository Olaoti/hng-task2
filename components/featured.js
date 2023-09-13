import React from 'react'
import { useState, useEffect } from 'react';
import Card from './card';
import Path from "../components/API"
import Link from 'next/link';


function featured({movies, genres}) {

  return (
    <div className='featured'>
        <div className='featured_heading'>
          <h2>
            Featured Movie
          </h2>
          <Link href={'/movies/'}>
          <p>See More </p>
          </Link>
        </div>
        <div className='featured_movies'>
          {movies.filter(movie=>movies.indexOf(movie)<10).map(movie=>{
            return(
              <Card movie={movie} genres={genres}/>
            )
          })}
        </div>
    </div>
  )
}

export default featured
