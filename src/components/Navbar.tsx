import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

type NavbarProps = {
    page?: string;
    crawled: boolean;
};

function Navbar({page, crawled}: NavbarProps) {
    return (
        <div className="w-full">
            <nav className="px-16 bg-main-red w-full h-[120px] items-center justify-between flex">
                <Link 
                    className="font-bold items-center flex gap-7"
                    to="/">
                    <img className="" alt="movie icon" src="src/assets/movie-icon.svg"></img>
                    <span className="text-6xl text-floral-white">{crawled ? "Crawled Movie": "MOVIE CRAWLING"}</span>
                </Link>
                <div className="flex gap-12">
                    <Link
                        className={`text-4xl font-bold px-4 py-2 rounded-xl ${page === 'home' ? 'bg-floral-white': 'text-floral-white'}`}
                        to="/">
                        HOME
                    </Link>
                    <Link
                        className={`text-4xl font-bold px-4 py-2 rounded-xl ${page === 'aboutus' ? 'bg-floral-white': 'text-floral-white'}`}
                        to="/about-us">
                        ABOUT US
                    </Link>
                </div>
            </nav>
            <div className="bg-[url('src/assets/curtain.png')] w-full h-[350px] top-10 bg-cover bg-center absolute z-[-100]"></div>
        </div>
    )
}

export default Navbar