import MovieCard from '../components/MovieCard.tsx'
import { useEffect, useState } from "react";
import Loader from '../components/Loader.tsx';
import Navbar from '../components/Navbar.tsx'

import { useLocation } from "react-router-dom";
import { useRef } from 'react';


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

interface ExportCSVButtonProps {
  movies: MovieProps[];
}

const exportMoviesToCSV = async (movies: MovieProps[]) => {
    if (!movies || movies.length === 0) return;

    const maxCast = Math.max(...movies.map(m => m.cast_crew?.length || 0));

    const headers = [
        "Index","Rating","Title","Year","Link","Genre","Description",
        "Poster Image","Cover Image","Release Date","Tomato Score",
        "Tomato Reviews","Audience Score","Audience Ratings"
    ];
    for (let i = 1; i <= maxCast; i++) {
        headers.push(`Cast${i}_Name`, `Cast${i}_Role`, `Cast${i}_Img`);
    }

    const rows = movies.map(movie => {
        const row = [
            movie.index, movie.rating, movie.title, movie.year, movie.link,
            movie.genre, movie.description, movie.poster_img, movie.cover_img ?? "null",
            movie.release_date, movie.tomato_score, movie.tomato_reviews,
            movie.audience_score, movie.audience_ratings
        ];

        const castCrew = movie.cast_crew || [];

        for (let i = 0; i < maxCast; i++) {
            if (castCrew[i]) {
                row.push(castCrew[i].name || "null");
                row.push(castCrew[i].role || "null");
                row.push(castCrew[i].img ?? "null");
            } else {
                row.push("null", "null", "null");
            }
        }

        return row.map(v => `"${String(v).replace(/"/g,'""')}"`).join(",");
    });

    const csvContent = [headers.join(","), ...rows].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `movies.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};

function Result() {
    const [loading, setLoading] = useState<boolean>(false);
    const [movies, setMovies] = useState<MovieProps[]>([]);
    const location = useLocation();
    const effectCalled = useRef(false);

    useEffect(() => {
        if (effectCalled.current) return;
        effectCalled.current = true;

        setLoading(true)
        const fetchData = async () => {
        try {
            const params = new URLSearchParams(location.search);
            const name = params.get("name") || "";
            const genre = params.get("genre") || "";
            const newParams = new URLSearchParams();

            let url = "";

            if (name === "" && genre === "") {
                url = `http://129.150.62.182:9000/api/movies`;
            }
            else if (name !== "" && genre === "") {
                newParams.append("name", name);
                url = `http://129.150.62.182:9000/api/movies?${newParams.toString()}`;
            }
            else if (name === "" && genre !== "") {
                const genreArray = genre.split(",").map(g => g.trim()).filter(g => g !== "");
                genreArray.forEach(g => newParams.append("genre", g));
                url = `http://129.150.62.182:9000/api/movies?${newParams.toString()}`;
            }
            else {
                newParams.append("name", name);
                const genreArray = genre.split(",").map(g => g.trim()).filter(g => g !== "");
                genreArray.forEach(g => newParams.append("genre", g));
                url = `http://129.150.62.182:9000/api/movies?${newParams.toString()}`;
            }

            const res = await fetch(
                url
            );
            const data: any = await res.json();
            console.log(data)
            setMovies(data.movies)
            if ("detail" in data) {
                alert("No movies match your filter, Please try again.");
                window.location.href = "/";
            } 
            else {
                setMovies(data.movies);
            }
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
        <div className='w-screen min-h-screen p-15 gap-6 pt-36'>
            <div className='flex flex-1 flex-col items-center gap-10'>                    
                    {loading && <Loader/>}
                    {!loading && <button
                    onClick={() => exportMoviesToCSV(movies)}
                    className="px-4 h-14 self-end bg-sunglox text-main-red text-2xl rounded-full font-extrabold hover:cursor-pointer group relative overflow-hidden active:scale-[98%]"
                    >
                        <span className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5">
                            EXPORT CSV
                        </span>
                    </button>}
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
