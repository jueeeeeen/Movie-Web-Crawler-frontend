import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.tsx';
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const [filter, setFilter] = useState([]);
    const [searchString, setSearchString] = useState('');
    


    const handleCLick = () => {
        navigate(`/result?q=${encodeURIComponent(searchString)}&filter=${filter}`);
    }



    return (
        <>
        <Navbar crawled={false} page='home'/>
        <div className='w-screen min-h-screen grid grid-cols-[20%_1fr] p-15 gap-6'>
            <div className='flex flex-col gap-10 pr-6 border-r border-floral-white'>
                <div className='relative rounded-lg bg-floral-white w-[211px] h-[279px] py-3 px-4'>
                    <img
                        className="absolute inset-0 scale-[104%] z-0"
                        src="public/assets/filter-border.svg"
                    />
                    <span className='relative block text-3xl font-bold text-black pb-3'>Filter</span>
                    <div className="relative flex flex-col space-y-2 font-serif font-bold text-lg text-black">
                        <label className="flex items-center space-x-2 text-2xl gap-2 ">
                            <input type="checkbox" className="accent-black" />
                            <span>Action</span>
                        </label>
                    </div>                
                </div>
                <div className='relative rounded-lg bg-floral-white w-[211px] h-[226px] py-3 px-4'>
                    <img
                        className="absolute inset-0 scale-[104%]"
                        src="public/assets/preset-border.svg"
                    />
                    <span className='relative block text-3xl font-bold text-black pb-3'>Movie Site Presets</span>
                    <div className="relative flex flex-col space-y-2 font-serif font-bold text-lg text-black">
                        <label className="flex items-center space-x-2 text-2xl gap-2 ">
                            <input type="checkbox" className="accent-black" />
                            <span>Wikipedia</span>
                        </label>
                    </div>     
                </div>
            </div>
            <div className='flex flex-1 flex-col items-center gap-10'>
                <div className="relative self-center rounded-lg w-[1003PX] h-[75px] bg-floral-white flex justify-center items-center p-4">
                    <img
                        className="scale-[90%] pr-2 pb-2"
                        src="public/assets/search-icon.svg"
                    />
                    <input
                            type="text"
                            placeholder="MOVIE SEARCH"
                            className="focus:outline-none w-full text-3xl font-bold text-black z-10 "
                    />
                    <img
                        className="absolute scale-[101%] z-0"
                        src="public/assets/search-bar-border.svg"
                    />
                </div>
                    <button 
                        className="relative bg-main-red rounded-3xl w-[290px] h-[148px] top-1/4 hover:cursor-pointer"
                        onClick={handleCLick}
                    >
                        <span className='text-4xl font-bold text-floral-white'>Start Crawling!!</span>
                        <img
                            className="absolute top-0 scale-[102%]"
                            src="public/assets/crawl-button-border.svg"
                        />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Home
