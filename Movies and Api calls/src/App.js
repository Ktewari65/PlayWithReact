import React from 'react';
import { useState } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movie, setMovie] = useState([])
  const[loading,setloading]= useState(false)

   async function  fetchMovie() {
   setloading(true)
     const respone = await fetch('https://swapi.dev/api/films/')
     setloading('loaded')   
     const data = await respone.json()
    
        const transformedMovie = data.results.map((item) =>{
               // console.log(item)
         return {
          id:item.episode_id,
          title:item.title,
          releaseDate:item.release_date,
          openingText:item.opening_crawl
         }
        
        
     })
          setMovie(transformedMovie)
          setloading(false)
        
     
   }
 
    return (
    <React.Fragment>
      <section>      
        <button onClick={fetchMovie}>Fetch Movies</button>
      
      </section>
      <section>
        {!loading &&  movie.length===0 && <p>No Movies found</p>}
        {!loading  && <MoviesList movies={movie} />}
        {loading && <p>Loading.....</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
