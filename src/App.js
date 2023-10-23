import Movies from "./components/Movies";
import React, { useState, useEffect } from 'react'
import { getMovies } from "./services/fakeMovieService";
function App() {
  const [totalCount, setTotalCount] = useState(0)
  const [movies, setMovies] = useState(getMovies())

  useEffect(() => {
    setMovies(getMovies())
    setTotalCount(movies.length)
  }, [movies, totalCount])

  function deleteMovie(id) {
    let movieInDb = movies.find(m => m._id === id);
    (movies.splice(movies.indexOf(movieInDb), 1));
    setTotalCount(movies.length)
  }
  return (
    <main className="container">
      <h3 className="mt-5">{totalCount > 0 ? ('Table contains ' + totalCount + ' in list') : ('Table has no data')} </h3>
      {/* <Table movies={movies} deleteMovie={deleteMovie} /> */}
      <Movies movies={movies} setTotalCount={setTotalCount}/>
    </main>
  );
}

export default App;
