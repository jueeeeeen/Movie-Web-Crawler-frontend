import MovieCard from '../components/MovieCard.tsx'
import { useEffect, useState } from "react";
import Loader from '../components/loader.tsx';
import Navbar from '../components/Navbar.tsx'
import { useNavigate } from "react-router-dom";

import { useLocation } from "react-router-dom";


type MovieProps = {
    cover: string;
    name: string;
    year: string;
    genre: string
};

const movie_mock: MovieProps = {
    cover: "https://external-preview.redd.it/new-poster-for-jurassic-world-rebirth-v0-BDZwvR_pd4CFD7x6WlSWmgBZ-F4kfctilsBLYAN_qvU.jpg?auto=webp&s=827b9c6dbafd45318868b9768b27a106799dc0aa",
    name: "Jurassic World OOOOOOOOOOOOOOOOO",
    year: "2025",
    genre: "action"
}

const movie_mock2: MovieProps = {
    cover: "https://external-preview.redd.it/new-poster-for-jurassic-world-rebirth-v0-BDZwvR_pd4CFD7x6WlSWmgBZ-F4kfctilsBLYAN_qvU.jpg?auto=webp&s=827b9c6dbafd45318868b9768b27a106799dc0aa",
    name: "Jurassic World",
    year: "2025",
    genre: "Romantic"
}

function Result() {
    const [loading, setLoading] = useState<boolean>(false);
    const [movies, setMovies] = useState<MovieProps[]>([]);
    const data_mock = [movie_mock, movie_mock2, movie_mock, movie_mock2, movie_mock];
    const [results, setResults] = useState<any[]>([]);
    
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const search = params.get("q") || "";
    const filter = params.get("filter") || "all";

    useEffect(() => {
        setLoading(true)
        setMovies(data_mock)
        setLoading(false);
        // const fetchData = async () => {
        // try {
        //     const res = await fetch(
        //         `http://127.0.0.1:8080/movies/update`
        //     );
        //     const data = await res.json();
        //     setResults(data);
        // } catch (err) {
        //     console.error(err);
        // } finally {
        //     setLoading(false);
        // }
        // };

        // fetchData();
    }, [search, filter]);


    return (
        <>
        <Navbar crawled/>
        <div className='w-screen min-h-screen p-15 gap-6'>
            <div className='flex flex-1 flex-col items-center gap-10'>                    
                    {loading && <Loader/>}
                
                    <div className="flex justify-between flex-wrap gap-3 w-full">
                        {movies.length > 0 && !loading ? 
                        (
                            movies.map((movie) => <MovieCard key={movie.name} {...movie} />)
                        ) : 
                            null}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Result
