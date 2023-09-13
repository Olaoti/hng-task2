import { useState} from 'react';

import Image from 'next/image'
import Item from "../public/item.svg"
import Favourite from "../public/heart.svg"
import Idmblogo from "../public/idmblogo.svg"
import Link from 'next/link';
import { toast } from 'sonner';

function card({movie, genres}) {
  const [faved, setFaved] = useState(false)
  const showtoast =(message)=>{
    if(faved){
    (toast.error(`${message} has been removed from your favourites.`))
    }else{
      (toast.success(`${message} has been added to your favourites. Enjoy!`))
    }
  }
  return (
    <div className='card' href={`/movies/${movie.id}`} key={movie.id} data-testid='movie-card'>
    <div className='image' style={{width:'100%', height:'100', position:'relative'}}>
      <Image data-testid='movie-poster' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} layout='fill' objectFit='cover' alt={movie?.title} unoptimized/>
      <div className='faved' style={{width:'3rem', height:'3rem', borderRadius:'50%', display:'grid', placeItems:'center',position:'absolute',zIndex:'12', right:'2rem', top:'2rem', backgroundColor:'rgba(255,255,255,0.3)'}} onClick={()=>showtoast(movie?.title)}>
        <Favourite fill={faved?'red':'white'} onClick={()=>setFaved(!faved)} style={{ height:'2rem', width:'2rem'}}/>         
      </div>
    </div>
    <Link href={`/movies/${movie.id}`}>
    <p className='date' data-testid='movie-release-date'>{movie?.release_date}</p>
    <h4 className='title' data-testid='movie-title'>{movie?.title}</h4>
    <div className='info'>
          <Idmblogo className='idmb'/>
          <p>{Math.floor(movie?.popularity)}.0/100</p>
          <Item className='item'/>
          <p>{movie?.vote_average*10}%</p>
    </div>
    <div className='genres'>
      {genres?.map(genre=>{
          if (movie?.genre_ids.includes(genre.id)){
            return(<span key={genre.id}>{genre.name}, </span>)
          }
    })}</div>
    </Link>
  </div>
  )
}

export default card
