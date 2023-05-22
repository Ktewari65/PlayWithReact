import React, { useCallback, useEffect } from 'react';
import { useState } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';
import Form from './components/Movie/Form';

function App() {
  const [movie, setMovie] = useState([])
  const[loading,setloading]= useState(false)
  const[error,setError] = useState(null)


  const fetchMovie = useCallback( async() =>{
    console.log('callback running')
    setError(null)
    setloading(true)
    try{
      const respone = await fetch('https://react-http-36c63-default-rtdb.firebaseio.com/movies.json')
       if(!respone.ok){
         throw new Error('Something went wrong ....Retrying')
       }
      const data = await respone.json()
      const loadedMovies =[]
       for (const key in data){
        loadedMovies.push({
          id: key,
          title:data[key].title,
          OpeningText: data[key].openingText,
          ReleaseDate:data[key].releaseDate
        })
       }
           setMovie(loadedMovies)
          
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

  const comingDataHandler= async (movie) =>{
    const respone = await fetch('https://react-http-36c63-default-rtdb.firebaseio.com/movies.json',{
      method : 'POST',
      body: JSON.stringify(movie),
      Header:{
          'content': 'application/json'
      }
    })
    const data = respone.json
    console.log(data) 
  }

   

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
       <div>
          <Form  comingData={comingDataHandler}/>
          </div>  
      <section>    
        <button onClick={fetchMovie}>Fetch Movies</button>
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
