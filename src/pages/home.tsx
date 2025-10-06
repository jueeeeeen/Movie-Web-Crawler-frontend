import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.tsx';
import { useNavigate } from "react-router-dom";

interface FilterBoxProps {
    categories: string[];
}

function Home() {
    const navigate = useNavigate();
    const [categoryFilter, setCategoryFilter] = useState<string[]>([]);
    const [namefilter, setNamefilter] = useState<string>("");

    const categories = ["action", "adventure", "anime", "animation", "biography", "comedy", "crime", "drama", "fantasy", "history", "holiday", "horror", "kids & family", "lgbtq+", "music", "musical", "mystery & thriller", "romance", "sci-fi", "sports", "war", "western"];

    const addCategory = (cat: string) => {
        setCategoryFilter((prev) => {
        const newSelected = prev.includes(cat)
            ? prev.filter((item) => item !== cat)
            : [...prev, cat];
        return newSelected;
        });
    };

    const clearCategory = () => {
        setCategoryFilter([]);
    };

    const handleNamefilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNamefilter(e.target.value);
    };

    const handleCrawl = () => {
    const filterString = Array.isArray(categoryFilter)
        ? categoryFilter.join(",")
        : categoryFilter;

    navigate(`/result?name=${encodeURIComponent(namefilter)}&genre=${encodeURIComponent(filterString)}`);
    };

    return (
        <>
        <Navbar crawled={false} page='home'/>
        <div className='w-screen min-h-screen grid grid-cols-[20%_1fr] p-15 pt-40'>
            <div className='flex flex-col gap-10 pr-6 border-r border-floral-white'>
                <div className='relative rounded-lg bg-floral-white w-[260px] h-[590px] py-3 px-4'>
                    <img
                        className="absolute inset-0 scale-[104%] z-0"
                        src="public/assets/filter-border.svg"
                    />
                    <div className='flex justify-between items-center'>
                        <span className='relative block text-2xl font-bold text-black pb-3'>Category Filter</span>
                        <button 
                            className='relative block text-md font-bold text-red-500 pb-3 hover:cursor-pointer'
                            onClick={clearCategory}
                        >
                            Clear
                        </button>
                    </div>
                    <div className="relative flex flex-col space-y-2 font-serif font-bold text-lg text-black overflow-auto h-[500px]">
                        {categories.map((cat, index) => (
                            <label key={index} className="flex items-center gap-2 cursor-pointer mb-2">
                                <input
                                    type="checkbox"
                                    className="accent-black mt-1"
                                    checked={categoryFilter.includes(cat)}
                                    onChange={() => addCategory(cat)}
                                />
                                <span>{cat}</span>
                            </label>
                        ))}
                    </div>            
                </div>
            </div>
            <div className='flex flex-1 flex-col items-center'>
                <div className="relative rounded-lg w-[1080px] h-[75px] bg-floral-white flex justify-center items-center p-4">
                    <img
                        className="absolute scale-[101%] z-0"
                        src="public/assets/search-bar-border.svg"
                        draggable="false"
                    />
                    <img
                        className="scale-[90%] pr-2 pb-2"
                        src="public/assets/search-icon.svg"
                        draggable="false"
                    />
                    <input
                        type="text"
                        placeholder="NAME FILTER"
                        onChange={handleNamefilterChange}
                        className="focus:outline-none w-full text-3xl font-bold text-black z-10"
                    />
                </div>
                    <button 
                        className="relative bg-main-red rounded-3xl w-[290px] h-[148px] top-1/4 hover:cursor-pointer"
                        onClick={handleCrawl}
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
