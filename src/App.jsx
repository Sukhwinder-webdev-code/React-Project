import { Header } from "./assets/components/component1.jsx"
import { Component2 } from "./assets/components/component2.jsx"
import { useState, useEffect } from "react";
import { Component3 } from "./assets/components/component3.jsx";
function App() {

  const [movies, setMovies] = useState([]);//to manage state of original movies set
  const [filteredMovies, setFilteredMovies] = useState([]); // handle filtered movies
  const [ascending, setAscending] = useState(true);  
  const [rating, setRating] = useState(0);
  const [sortingCondition, setSortingCondition] = useState('Date');

  useEffect(() => {
    const movies = async () => {
      const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=2df5e62cde7b055e3878a169fec3c3d9');
      const data = await res.json();
      setMovies(data.results);
      setFilteredMovies(data.results);
    }

    movies();
  }, []);


  const handleFilteredMovies = (selectedRating) => {
    if (selectedRating === rating) {
      setRating(0);
      setFilteredMovies(filteredMovies);
    }
    else {
      setRating(selectedRating);
      const filterResult = movies.filter(movie => (movie.vote_average > selectedRating));
      setFilteredMovies(filterResult);

    }

  }

  //

  useEffect(() => {
    let sorted

    if (sortingCondition === 'Date') {
      sorted = [...movies].sort((a, b) => ascending ? new Date(a.release_date) - new Date(b.release_date) : new Date(b.release_date) - new Date(a.release_date));
    }
    else {
      sorted = [...movies].sort((a, b) => ascending ? Number(a.vote_average) - Number(b.vote_average) : Number(b.vote_average) - Number(a.vote_average))
    }
    setFilteredMovies(sorted);
  }, [movies, sortingCondition, ascending])

  // 
  const handleOrder = (e) => {
    setAscending(e.target.value === 'Decending' ? false : true);

  }





  return (
    <div>
      <Header />
      <Component2 handleFilteredMovies={handleFilteredMovies} setAscending={setAscending} handleOrder={handleOrder} rating={rating} setSortingCondition={setSortingCondition} />
      <div className="grid grid-cols-2 md:grid-cols-4  p-8 gap-4">
        {(filteredMovies.length > 0) ?
          filteredMovies.map((movie) => (<Component3 key={movie.id} movie={movie} />)) :
          (<p className="text-center text-white text-lg m-auto w-full">No Movies to Show</p>)}
      </div>
    </div>
  )
}

export default App
