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
            className="w-[calc(20%-0.75rem)] aspect-3/4 flex flex-col bg-floral-white rounded-xl overflow-hidden hover:cursor-pointer hover:scale-102 transition-transform"
            onClick={() => setOpenDetail(!openDetail)}
        >
            <div className={`w-full aspect-6/5 bg-cover bg-center bg-amber-200`}
                style={{ backgroundImage: `url(${movie.poster_img})` }}>
            </div>
            <div className='flex flex-1 flex-col justify-between p-2.5 font-bold'>
                <h2 className='text-base text-ellipsis line-clamp-2 leading-5'>{movie.title}</h2>
                <p className='text-sm text-grey '>{movie.year}</p>
                <Genre genre_name={movie.genre}/>
            </div>
        </button>
        {openDetail && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/50 p-6">
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
        <div className="flex flex-wrap gap-1">
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