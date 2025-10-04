import MovieCard from '../components/MovieCard.tsx'
import { useEffect, useState } from "react";
import Loader from '../components/Loader.tsx';
import Navbar from '../components/Navbar.tsx'

import { useLocation } from "react-router-dom";


interface CastCrew {
    name: string;
    role: string;
    img: string;
}

interface MovieProps {
    index: number;
    rating: number;
    title: string;
    year: number;
    link: string;
    genre: string;
    description: string;
    poster_img: string;
    cover_img: string;
    release_date: string;
    tomato_score: number;
    tomato_reviews: number;
    audience_score: number;
    audience_ratings: number;
    cast_crew: CastCrew[];
}

function Result() {
    const [loading, setLoading] = useState<boolean>(false);
    const [movies, setMovies] = useState<MovieProps[]>([]);
    const location = useLocation();

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
        try {
            const params = new URLSearchParams(location.search);
            const name = params.get("name") || "";
            const genre = params.get("genre") || "";
            console.log(name)
            console.log(genre)
            const newParams = new URLSearchParams();

            let url = "";

            if (name === "" && genre === "") {
                url = `http://127.0.0.1:8080/movies`;
            }
            else if (name !== "" && genre === "") {
                newParams.append("name", name);
                url = `http://127.0.0.1:8080/movies?${newParams.toString()}`;
            }
            else if (name === "" && genre !== "") {
                const genreArray = genre.split(",").map(g => g.trim()).filter(g => g !== "");
                genreArray.forEach(g => newParams.append("genre", g));
                url = `http://127.0.0.1:8080/movies?${newParams.toString()}`;
            }
            else {
                newParams.append("name", name);
                const genreArray = genre.split(",").map(g => g.trim()).filter(g => g !== "");
                genreArray.forEach(g => newParams.append("genre", g));
                url = `http://127.0.0.1:8080/movies?${newParams.toString()}`;
            }

            console.log(url)
            const res = await fetch(
                url
            );
            const data: any = await res.json();
            console.log(data)
            setMovies(data.movies)
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
        };

        fetchData();
    }, [location]);


    return (
        <>
        <Navbar crawled/>
        <div className='w-screen min-h-screen p-15 gap-6'>
            <div className='flex flex-1 flex-col items-center gap-10'>                    
                    {loading && <Loader/>}
                    <div className="flex flex-wrap gap-3 w-full">
                        {movies.length > 0 && !loading ? 
                        (
                            movies.map((movie) => <MovieCard key={movie.index} {...movie}/>)
                        ) : 
                            null}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Result
