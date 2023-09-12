import React from 'react'
import { useState, useEffect } from 'react';
import Card from './card';
import Path from "../components/API"


function featured({movies, genres}) {

  return (
    <div className='featured'>
        <div className='featured_heading'>
          <h2>
            Featured Movie
          </h2>
          <p>See More </p>
        </div>
        <div className='featured_movies'>
          {movies.map((movie)=>{
            return(
              <Card movie={movie} genres={genres}/>
            )
          })}
        </div>
    </div>
  )
}

export default featured
