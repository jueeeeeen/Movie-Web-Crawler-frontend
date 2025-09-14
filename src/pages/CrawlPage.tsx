import MovieCard from '../components/MovieCard.tsx'
import { useEffect, useState } from "react";
import Loader from '../components/loader.tsx';
import Navbar from '../components/Navbar.tsx'

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

function CrawlPage() {
    const [loading, setLoading] = useState<boolean>(false);
    const [movies, setMovies] = useState<MovieProps[]>([]);
    const data_mock = [movie_mock, movie_mock2, movie_mock, movie_mock2, movie_mock];

    const handleCrawl = () => {
        // mock data
        setLoading(true);
        setTimeout(() => {
            setMovies(data_mock);
            setLoading(false);
        }, 2000);

        // fetch("/api/movies")
        // .then((res) => res.json())
        // .then((data) => setMovies(data));
    }

    return (
        <>
        <Navbar crawled={movies.length > 0}/>
        <div className='w-screen grid grid-cols-[20%_1fr] p-15 gap-6'>
            <div className='flex flex-col gap-10 pr-6 border-r border-floral-white'>
                <div className='bg-white w-full h-75'></div>
                <div className='bg-white w-full h-64'></div>
            </div>
            <div className='flex flex-1 flex-col items-center gap-10'>
                <div className='bg-white w-full h-18 self-start'></div>
                
                {!movies.length && !loading && 
                    <button 
                        className="relative bg-main-red rounded-3xl w-[290px] h-[148px] top-1/4 hover:cursor-pointer"
                        onClick={handleCrawl}
                    >
                        <span className='text-4xl font-bold text-floral-white'>Start Crawling!!</span>
                        <img
                            className="absolute top-0 scale-[102%]"
                            src="src/assets/crawl-button-border.svg"
                        />
                    </button>}
                    
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

export default CrawlPage
