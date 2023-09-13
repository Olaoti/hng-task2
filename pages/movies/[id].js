import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router';
import Sidebar from '../../components/sidebar';
import Star from "../../public/star.svg"
import Image from 'next/image';
import Play from "../../public/bigplay.svg"
import Loading from '../../components/loading';
import Error from '../../components/error';

function about_movie() {
  var id = null
  const router = useRouter();
  
const [sidebarShow, setSidebarShow] = useState(false)
useEffect(() => {
}, [router.query]);
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const API_KEY = "920c139c0c206685b9eefd32717d5220";
  useEffect(() => {
    async function fetchData() {
  const { query } = router;
   id = query.id;
  if(id){
      try{
          const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
      
        if(!response.ok){
          throw `Error! Status: ${response.status}`
        }
        const result = await response.json()
        setMovie(
          result
        );
        console.log(result)
      }
      catch(error){
        setError(error)
      }
      finally{
        setLoading(false)
      }
      }
  }

    fetchData();
  }, [router.query]);
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
  return (
    <div className='movie-info'>
      <div className={`hamburger ${sidebarShow?('cancel'):('show')}`} onClick={()=>{setSidebarShow(!sidebarShow)}}>
              <span></span>
              <span></span>
            </div>
      {sidebarShow&&
      (<Sidebar/>)}
      <div className='mainbar'>
            <div className='movieinfo' key={movie.id}>
              <div className='image-sect' style={{width:'100%', height:'100', position:'relative' }}>
              <Image src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} layout='fill' objectFit='cover' alt={movie?.title} unoptimized/>
              <div className='centerit' >
              <div className='playbutton' style={{width:'5rem', height:'5rem', borderRadius:'50%', display:'grid', placeItems:'center',backgroundColor:'rgba(255,255,255,0.3)'}}>
                <Play style={{ height:'9rem', width:'9rem'}}/>
                </div>
              <h1 style={{marginTop:'20px', color:'white'}}>Watch Trailer</h1>
              </div>
              </div>
              <div className='heading'>
                <h5 className='title' data-testid='movie-title'>{movie?.title}</h5>
                <span className='circ'></span>
                <h5 data-test-id='movie-release-date'>{movie?.release_date}</h5>
                <span className='circ none'></span>
                <h5 className='pg'>PG-13</h5>
                <span className='circ none'></span>
                <h5 className='time' data-testid='movie-runtime'>{movie?.runtime}</h5>
                <div className='genres'>
                  {movie?.genres?.map(genre=>{
                  return(
                    <span key={genre.id}>{genre.name}</span>
                  )}
                )}</div>
                <Star style={{width:'3rem', height:'3rem'}} className='star'/>
                <h5 className='star'><span>{(movie?.vote_average)}</span>/350k</h5>
              </div>
              <div className='movie_body'>
                <div className='movie_body_left'>
                  <h3 data-testid='movie-overview'>{movie?.overview}</h3>
                  <h4>Director:<span>Joseph Kosinski</span></h4>
                  <h4>Writers:<span>Jim Cash, Jack Epps Jr,  Peter Craig</span></h4>
                  <h4>Stars:<span>Tom Cruise, Jennifer Connelly, Miles Teller</span></h4>
                  <div className='movie_links'>
                  <button>Top rated movie #{id}
                  </button>
                  Award 9 nominations
                  </div>
                </div>
                <div className='movie_body_right'>
                  <button>See Showtimes</button>
                  <button className='light'>More watch options</button>
                  <div className='moreimage'>
                    <Image src='/images/moreimg.png' alt='check out more' objectFit='cover' layout='fill'/>
                  </div>
                </div>
              </div>
              
            </div>
      </div>
    </div>
  )
}

export default about_movie
