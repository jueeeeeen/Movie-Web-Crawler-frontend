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
    const [results, setResults] = useState<any[]>([]);
    
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const name = params.get("name") || "";
    const genre = params.get("genre") || "all";

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
        try {
            // const genreArray = genre ? genre.split(",") : [];
            // const genreQuery = genreArray.map(g => `genre=${encodeURIComponent(g)}`).join("&");
            // const url = `http://127.0.0.1:8080/movies?name=${encodeURIComponent(name)}&${genreQuery}`;

            // const res = await fetch(
            //     url
            // );
            // const data: any = await res.json();
            // console.log(data)
            // setMovies(data.movies)
            setMovies([
        {
            "index": 1,
            "rating": 97.0,
            "title": "The Godfather",
            "year": 1972,
            "link": "https://www.rottentomatoes.com/m/the_godfather",
            "genre": "crime,drama",
            "description": "Widely regarded as one of the greatest films of all time, this mob drama, based on Mario Puzo&#39;s novel of the same name, focuses on the powerful Italian-American crime family of Don Vito Corleone (Marlon Brando). When the don&#39;s youngest son, Michael (Al Pacino), reluctantly joins the Mafia, he becomes involved in the inevitable cycle of violence and betrayal. Although Michael tries to maintain a normal relationship with his wife, Kay (Diane Keaton), he is drawn deeper into the family business.",
            "poster_img": "https://resizing.flixster.com/aLKvx7GjWgFMOfboq5KNOX1kCCg=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p6326_p_v13_be.jpg",
            "cover_img": "https://statcdn.fandango.com/MPX/image/NBCU_Fandango/422/535/thumb_8DDE349D-3FE0-43FA-B851-B29436A6E7B7.jpg",
            "release_date": "Mar 15, 1972",
            "tomato_score": 97,
            "tomato_reviews": 153,
            "audience_score": 98,
            "audience_ratings": 250000,
            "cast_crew": [
                {
                    "name": "Francis Ford Coppola",
                    "role": "Director",
                    "img": "https://resizing.flixster.com/5Hj4cGEWuNjXbxyaFdynxJmTxWg=/100x120/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/359_v9_ba.jpg"
                },
                {
                    "name": "Marlon Brando",
                    "role": "Don Vito Corleone",
                    "img": "https://resizing.flixster.com/yWt_1OYY1w35WBOgbbEnBvJRFc8=/100x120/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/43494_v9_ba.jpg"
                },
                {
                    "name": "Al Pacino",
                    "role": "Michael Corleone",
                    "img": "https://resizing.flixster.com/CwoXI3Wv77d65yfJ21YaR3LZVhY=/100x120/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/2657_v9_bb.jpg"
                },
                {
                    "name": "James Caan",
                    "role": "Santino &quot;Sonny&quot; Corleone",
                    "img": "https://resizing.flixster.com/Wryln3YACSulHDe5jMemtAXK2K4=/100x120/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/29000_v9_bc.jpg"
                },
                {
                    "name": "Richard S. Castellano",
                    "role": "Pete Clemenza",
                    "img": "https://resizing.flixster.com/fMz9uzFhgTMuKadeUqvQtooFiKo=/100x120/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/113159_v9_ba.jpg"
                },
                {
                    "name": "Robert Duvall",
                    "role": "Tom Hagen",
                    "img": "https://resizing.flixster.com/AMlNYSUPanGGE1wvO6MiTGj9Id0=/100x120/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/481_v9_bb.jpg"
                }
            ]
        },
        {
            "index": 35,
            "rating": 96.0,
            "title": "The Godfather, Part II",
            "year": 1974,
            "link": "https://www.rottentomatoes.com/m/godfather_part_ii",
            "genre": "crime,drama",
            "description": "The compelling sequel to &quot;The Godfather,&quot; contrasting the life of Corleone father and son. Traces the problems of Michael Corleone (Al Pacino) in 1958 and that of a young immigrant Vito Corleone (Robert De Niro) in 1917&#39;s Hell&#39;s Kitchen. Michael survives many misfortunes and Vito is introduced to a life of crime.",
            "poster_img": "https://resizing.flixster.com/lQFJ7WL7yvGucQ89K7GtSlyPN24=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p6319_p_v8_bc.jpg",
            "cover_img": "https://statcdn.fandango.com/MPX/image/NBCU_Fandango/480/643/thumb_65B9B2EF-4085-47D0-8273-B343AFE875D0.jpg",
            "release_date": "Dec 12, 1974",
            "tomato_score": 96,
            "tomato_reviews": 129,
            "audience_score": 97,
            "audience_ratings": 250000,
            "cast_crew": [
                {
                    "name": "Francis Ford Coppola",
                    "role": "Director",
                    "img": "https://resizing.flixster.com/5Hj4cGEWuNjXbxyaFdynxJmTxWg=/100x120/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/359_v9_ba.jpg"
                },
                {
                    "name": "Al Pacino",
                    "role": "Michael Corleone",
                    "img": "https://resizing.flixster.com/CwoXI3Wv77d65yfJ21YaR3LZVhY=/100x120/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/2657_v9_bb.jpg"
                },
                {
                    "name": "Robert Duvall",
                    "role": "Tom Hagen",
                    "img": "https://resizing.flixster.com/AMlNYSUPanGGE1wvO6MiTGj9Id0=/100x120/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/481_v9_bb.jpg"
                },
                {
                    "name": "Diane Keaton",
                    "role": "Kay Corleone",
                    "img": "https://resizing.flixster.com/RaBg9MnZXVaHARr_ny4TlmF61nI=/100x120/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/895_v9_bb.jpg"
                },
                {
                    "name": "Robert De Niro",
                    "role": "Vito Corleone",
                    "img": "https://resizing.flixster.com/C7n6hOb1bGNvM-VU26qEbVSMSCY=/100x120/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/55052_v9_bc.jpg"
                },
                {
                    "name": "John Cazale",
                    "role": "Federico &quot;Fredo&quot; Corleone",
                    "img": "https://resizing.flixster.com/28UL1sEXI18v4A_xkjurIVR22Qw=/100x120/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/86198_v9_ba.jpg"
                }
            ]
        }
    ])
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
        };

        fetchData();
    });


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
