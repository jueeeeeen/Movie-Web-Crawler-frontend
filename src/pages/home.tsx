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
                <div className='bg-white w-full h-75'></div>
                <div className='bg-white w-full h-64'></div>
                <button className="px-4 h-14 bg-floral-white text-main-red text-2xl rounded-full font-extrabold hover:cursor-pointer hover:bg-light-red group relative overflow-hidden">
                    <span className="inline-block transition-transform duration-300 group-hover:translate-y-1">
                        EXPORT CSV
                    </span>
                </button>
            </div>
            <div className='flex flex-1 flex-col items-center gap-10'>
                <div className='bg-white w-full h-18 self-start'></div>
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
