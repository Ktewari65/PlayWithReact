import React, { useCallback, useEffect } from 'react';
import { useState } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movie, setMovie] = useState([])
  const[loading,setloading]= useState(false)
  const[error,setError] = useState(null)


  const fetchMovie = useCallback( async() =>{
    console.log('callback running')
    setError(null)
    setloading(true)
    try{
      const respone = await fetch('https://swapi.dev/api/films/')
       if(!respone.ok){
         throw new Error('Something went wrong ....Retrying')
       }
      const data = await respone.json()
      const transformedMovie = data.results.map((item) =>{
             
          return {
           id:item.episode_id,
           title:item.title,
           releaseDate:item.release_date,
           openingText:item.opening_crawl
          }
          })
           setMovie(transformedMovie)
           // setloading(false)
         }
         catch(error){
             setError(error.message)
         }
          setloading(false)
    
  },[])

  useEffect(()=>{
    console.log("Loading")
      fetchMovie()
  },[fetchMovie])

   

      //  let content = <p>No Movies found...</p>

      //  if(movie.length ===0){
      //   content = <MoviesList movies={movie} />
      //  }

      //  if(error){
      //   content=<p>Something went wrong </p>
      //  }

      //  if(loading){
      //   content = <p>Loading</p>
      //  }
 
    return (
    <React.Fragment>
      <section>      
        <button onClick={fetchMovie}>Fetch Movies</button>
         {/* <button onClick={cancelRetry}>Cancel</button> */}
      </section>
      <section>
         {!loading &&  movie.length===0   && !error && <p>No Movies found</p>}
        {!loading  && <MoviesList movies={movie} />}
        {!loading && error && <p>{error}</p>}
    {loading && <p>Loading.....</p>} 
   
      </section>
    </React.Fragment>
  );
}

export default App;
