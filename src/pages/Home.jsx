import MovieCard from "../components/MovieCard";
import { useState } from 'react';
//Whenever state changes the entire component i.e. Home() will run again or re-rendered.
function Home() {

    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "John Wick", releaseDate: "2020" },
        { id: 2, title: "DevD", releaseDate: "2010" },
        { id: 3, title: "Endgame", releaseDate: "2019" }
    ];

    const handleSearch = (e) => {
        e.preventDefault(); //so the search doesnt refresh ot display nothing
        alert(searchQuery);
    };

    return (
        <div className="home">

            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-btn">Search</button>
            </form>

            <div className="movie-grid">
                {movies.map((currentMovie) =>
                    currentMovie.title.toLowerCase().startsWith(searchQuery) &&
                    (
                        <MovieCard movie={currentMovie} key={currentMovie.id} />
                    ))}
            </div>
        </div>
    );
}
export default Home;