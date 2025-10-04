"use client"

import { useState } from "react"
import { ChevronLeft, ChevronDown } from "lucide-react"
import Navbar from "./Navbar.tsx"

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

interface MovieDetailsProps extends MovieProps {
  onClose: () => void;
}

export default function MovieDetails({onClose, ...movie}: MovieDetailsProps) {

  const [isOverviewExpanded, setIsOverviewExpanded] = useState(false)

  return (
  <div className="min-h-screen bg-[#1a1a1a] text-white">
  <div className="w-full min-h-screen py-16 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a]">
    <div className="w-full px-8 md:px-12 lg:px-16 flex flex-col gap-20 md:gap-10">
      
      <div className="flex flex-col lg:flex-row gap-8 items-start justify-between w-full">
        <div className="flex items-start gap-4">
          <button 
            className="rounded-full bg-white text-black hover:bg-gray-200 h-10 w-10 flex items-center justify-center cursor-pointer"
            onClick={onClose}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold">{movie.title}</h2>
            <p className="text-white-400 font-bold">{`Released ${movie.release_date}`}</p>
            <div className="flex gap-2 flex-wrap">
              {/* {movie.genres.map((genre) => (
                <span key={genre} className="px-3 py-1 text-yellow-500 text-sm font-bold rounded"
                style={{ backgroundColor: "#414141ff" }}
                >
                  {genre}
                </span>
              ))} */}
            </div>
          </div>
        </div>

            <div className="bg-[#1a1a1a] border-2 border-yellow-600 rounded-lg overflow-hidden flex items-stretch shadow-xl">
              <div className="p-4 flex items-center gap-3 min-w-[200px]">
                <div className="flex-shrink-0">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Rotten_Tomatoes.svg/2019px-Rotten_Tomatoes.svg.png"
                    alt="Tomatometer"
                    className="w-10 h-10"
                    />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-400 uppercase tracking-wider mb-0.5 font-semibold">Tomatometer</div>
                  <div className="text-3xl font-bold text-white">{movie.tomato_score}%</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">
                    {movie.tomato_reviews} Reviews
                  </div>
                </div>
              </div>

              <div className="w-px bg-gray-700 self-stretch" />

              <div className="p-4 flex items-center gap-3 min-w-[200px]">
                <div className="flex-shrink-0">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Rotten_Tomatoes_positive_audience.svg/1551px-Rotten_Tomatoes_positive_audience.svg.png"
                    alt="Popcornmeter"
                    className="w-10 h-10"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-400 uppercase tracking-wider mb-0.5 font-semibold">
                    Popcornmeter
                  </div>
                  <div className="text-3xl font-bold text-white">{movie.audience_score}%</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">
                    {movie.audience_ratings} Reviews
                  </div>
                </div>
              </div>
            </div>
          </div>

      <div className="flex flex-col gap-16 md:gap-10">
        <div className="flex flex-col md:flex-row gap-6 items-start w-full">
          <div className="flex-shrink-0">
            <img
              src={movie.poster_img || "/placeholder.svg"}
              alt={movie.title}
              className="rounded-lg object-cover w-full md:w-[280px] h-[400px] shadow-xl"
            />
          </div>
          <div className="flex-1 rounded-lg overflow-hidden shadow-2xl shadow-black/70">
            <img
              src={movie.cover_img || "/placeholder.svg"}
              alt={`${movie.title} scene`}
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="space-y-6 w-full">
          <h3 className="text-3xl font-bold text-yellow-500 uppercase">Overview</h3>
          <div className="relative bg-[#252525] rounded-lg p-8 shadow-lg overflow-hidden">
            <button
              onClick={() => setIsOverviewExpanded(!isOverviewExpanded)}
              className="w-full flex items-center justify-between text-left"
            >
              <p
                className={`text-white-800 text-lg leading-relaxed flex-1 font-bold ${
                  isOverviewExpanded ? "line-clamp-none" : "line-clamp-4"
                }`}
              >
                {movie.description}
              </p>
              <ChevronDown
                className={`h-6 w-6 text-gray-400 flex-shrink-0 ml-4 transition-transform ${
                  isOverviewExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-600 rounded-b-lg"></span>
          </div>
        </div>
      </div>

      {/* <div className="space-y-6 w-full">
        <h3 className="text-3xl font-bold text-yellow-500 uppercase">Top Cast</h3>
        <div className="relative bg-[#252525] rounded-lg p-8 shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {movie.cast_crew.map((member, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
                  {member.img ? (
                    <img
                      src={member.img || "/placeholder.svg"}
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <span className="text-white font-bold">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  )}
                </div>
                <div>
                  <div className="font-bold text-white">{member.name}</div>
                  <div className="text-gray-400 text-sm">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-600 rounded-b-lg"></span>
        </div>
      </div> */}
    </div>
  </div>
</div>

  )
}
