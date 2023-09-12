import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react';
import Header from '../components/header'
import Path from "../components/API"
import Featured from '../components/featured';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [genres, setGenres] = useState([])

  
  useEffect(() => {
    async function fetchData() {
      try{
        const response = await fetch(Path);
        if(!response.ok){
          throw `Error! Status: ${response.status}`
        }
        const result = await response.json()
        setMovies(
          result.results
        );
        console.log(result.results)
      }
      catch(error){
        setError(error)
      }
      finally{
        setLoading(false)

      }
      }
    fetchData();
    async function fetchGenre(){
      try{
        const resp= await fetch ('https://api.themoviedb.org/3/genre/movie/list?api_key=920c139c0c206685b9eefd32717d5220')
        if(!resp.ok){
          throw `Error! Status: ${resp.status}`
        }
        const genre = await resp.json()
        setGenres(genre.genres)
      }catch(error){
        setError(error)
      }finally{
        setLoading(false)
      }
    }
    fetchGenre()
  }, []);
  const randommovie = (movies[(Math.floor(Math.random() * movies?.length - 1))])

  if(loading){
    return(
      <div>Loading...</div>
    )
  }
  if(error){
    return(
      <div>error, {error.message}</div>
    )
  }
  return (
    < div className='homepage'>
      <Header randommovie={movies&& randommovie}/>
      <Featured movies = {movies} genres={genres}/>
    </div>
  )
}
