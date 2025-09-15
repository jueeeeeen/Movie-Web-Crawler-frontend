type NavbarProps = {
    crawled: boolean;
};

function Navbar({crawled}: NavbarProps) {
    return (
        <div className="w-full">
            <div className="px-16 bg-main-red w-full h-[120px] items-center justify-between flex">
                <div className="font-bold items-center flex gap-7">
                    <img className="" alt="movie icon" src="src/assets/movie-icon.svg"></img>
                    <span className="text-6xl text-floral-white">{crawled ? "Crawled Movie Results": "MOVIE CRAWLING"}</span>
                </div>
                {crawled && 
                    <button className="px-4 h-14 bg-floral-white text-main-red text-2xl rounded-full font-extrabold hover:cursor-pointer hover:bg-light-red group relative overflow-hidden">
                        <span className="inline-block transition-transform duration-300 group-hover:translate-y-1">
                            EXPORT CSV
                        </span>
                    </button>}
            </div>
            <div className="bg-[url('src/assets/curtain.png')] w-full h-[350px] top-10 bg-cover bg-center absolute z-[-100]"></div>
        </div>
    )
}

export default Navbar