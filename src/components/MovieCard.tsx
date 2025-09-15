import { useState } from 'react'

type MovieProps = {
    cover: string;
    name: string;
    year: string;
    genre: string
};

function MovieCard(movie: MovieProps) {
    return (
        <div className="w-[calc(20%-0.75rem)] aspect-3/4 flex flex-col bg-floral-white rounded-xl overflow-hidden">
            <div className={`w-full aspect-6/5 bg-cover bg-center bg-amber-200`}
                style={{ backgroundImage: `url(${movie.cover})` }}>
            </div>
            <div className='flex flex-1 flex-col justify-between p-2.5 font-bold'>
                <h2 className='text-base text-ellipsis line-clamp-2 leading-5'>{movie.name}</h2>
                <p className='text-sm text-grey '>{movie.year}</p>
                <Genre genre_name={movie.genre}/>
            </div>
        </div>
    )
}

type GenreProps = {
    genre_name: string
};

function Genre({genre_name}: GenreProps) {
    return (
    <span className="text-sm text-grey flex items-center w-auto h-6 self-start font-bold bg-light-red px-2 py-0.5 rounded-full">
        {genre_name}
    </span>
    )
}

export default MovieCard