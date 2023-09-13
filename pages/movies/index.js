import React,{useState, useEffect} from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import Path from "../../components/API"
import Loading from '../../components/loading';
import Error from '../../components/error';
import Card from '../../components/card';
import { useRouter } from 'next/router';
import Link from 'next/link';

function movies() {
const router = useRouter()
const {name} = router?.query;
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [genres, setGenres] = useState([])

  const filt = {name}.name
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
  const len = (movies?.filter(movie=>(movie?.title||movie?.original_title).includes(filt))).length
  console.log(typeof(len))
  if(loading){
    return(
      <Loading/>
    )
  }
  if(error){
    return(
      <div><Error message ={error.message}/></div>
    )
  }
  if(len>0){
    return (
      <div className='movies' color='red'>
        <Navbar/>
        <div className='movies-sect'>
          {(movies?.filter(movie=>(movie?.title||movie?.original_title).includes(filt))).map((movie)=>{
            return(
            <Card movie={movie} genres={genres}/>
            )
          })}
        </div>
        <Footer/>
      </div>
    )
  }
  if(len==0){
    return (
      <div className='movies' color='red'>
        <Navbar/>
        <div className='nothere' style={{paddingTop:'20px'}}>
          <h4>Search not found, enter a valid value</h4>
          <h5>Check featured movies on homepage</h5>
          <Link href='/'>
          <button>Go to home page</button>

          </Link>
        </div>
        <Footer/>
      </div>
    )
  }
  return (
    <div className='movies' color='red'>
      <Navbar/>
      <div className='movies-sect'>
        {movies.map((movie)=>{
          return(
          <Card movie={movie} genres={genres}/>
          )
        })}
      </div>
      <Footer/>
    </div>
  )
}

export default movies
