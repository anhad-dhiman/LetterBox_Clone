import './App.css'
import MovieCard from './Components/MovieCard'
function App() {
  return (
    <>
      <MovieCard movie={{ title: "DevD", releaseDate: "2010", url: "https://via.placeholder.com/150" }} />
    </>
  );
}

export default App;
