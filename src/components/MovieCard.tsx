import { useState } from 'react'
import MovieDetails from './MovieDetail';

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

function MovieCard(movie: MovieProps) {
    const [openDetail, setOpenDetail] = useState<boolean>(false);
    
    return (
        <>
        <button 
            className="w-[calc(20%-0.75rem)] aspect-5/8 flex flex-col bg-floral-white rounded-xl overflow-hidden hover:cursor-pointer hover:scale-102 transition-transform"
            onClick={() => setOpenDetail(!openDetail)}
        >
            <div className={`w-full aspect-6/5 bg-cover bg-center bg-amber-200`}
                style={{ backgroundImage: `url(${movie.poster_img})` }}>
            </div>
            <div className='grid grid-cols-2 grid-rows-[auto_auto_auto_auto] h-full p-2.5 font-bold gap-1'>
                <h2 className='text-lg font-black text-ellipsis line-clamp-2 leading-5 col-span-2 text-left'>{movie.title}</h2>
                <p className='text-base font-extrabold text-grey text-left'>{movie.year}</p>
                <span className='text-xs font-black flex gap-1 col-start-2 rounded-full items-center justify-self-end bg-light-red h-5.5 px-1.5'>
                    <img src='/assets/noto_popcorn.svg' />
                    <span className='text-main-red'>SCORE</span>
                    <span className='text-[#FFB91F]'>{movie.audience_score} %</span>
                </span>
                <span className='text-xs font-black flex gap-1 col-start-2 rounded-full items-center justify-self-end bg-light-red h-5.5 px-1.5'>
                    <img src='/assets/twemoji_tomato.svg' />
                    <span className='text-main-red'>SCORE</span>
                    <span className='text-[#77B255]'>{movie.tomato_score} %</span>
                </span>
                <Genre genre_name={movie.genre}/>
            </div>
        </button>
        {openDetail && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/50 p-6 font-extrabold">
            <div className="bg-floral-white rounded-xl w-full relative">
            <MovieDetails onClose={() => setOpenDetail(false)} {...movie} />
            </div>
        </div>
        )}
        </>
    )
}

type GenreProps = {
    genre_name: string
};

function Genre({ genre_name }: GenreProps) {
    const genres = (genre_name || "").split(",");

    return (
        <div className="flex flex-wrap gap-1 col-span-2">
        {genres.map((genre, idx) => (
            <span
            key={idx}
            className="text-sm text-grey flex items-center w-auto h-6 self-start font-bold bg-light-red px-2 py-0.5 rounded-full"
            >
            {genre}
            </span>
        ))}
        </div>
    );
}

export default MovieCard