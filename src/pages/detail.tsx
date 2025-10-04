"use client"

import { useState } from "react"
import { ChevronLeft, ChevronDown } from "lucide-react"
import Navbar from "../components/Navbar.tsx"

interface Movie {
  id: number
  title: string
  releaseDate: string
  genres: string[]
  posterImage: string
  heroImage: string
  tomatometer: { score: number; reviewCount: string }
  popcornmeter: { score: number; reviewCount: string }
  overview: string
  cast: { id: number; actorName: string; characterName: string; profileImage: string }[]
}

export default function MovieDetails() {
  const [movie] = useState<Movie>({
    id: 1,
    title: "Mock Movie Title",
    releaseDate: "2025-10-01",
    genres: ["Action", "Adventure"],
    posterImage: "https://f.ptcdn.info/394/032/000/1434188806-JurassicWo-o.jpg",
    heroImage:
      "https://scontent.fbkk5-4.fna.fbcdn.net/v/t39.30808-6/513567331_1025096203170923_3530679689945242652_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=TlT68Kf8MVUQ7kNvwEdln7X&_nc_oc=AdnXEJj1ntxoVHE90VC-dr6uW0B-iaKtMzOhtKd4INfMXvvKf2VJCUKqfvcTr_h4XQ0&_nc_zt=23&_nc_ht=scontent.fbkk5-4.fna&_nc_gid=rh_sA3Xv7IrUW34quF4FgA&oh=00_AfaDmWNzyVoXDDPaCxHFLf11u5AsLkayQVcjbpUCRh07kg&oe=68E3693B",
    tomatometer: { score: 85, reviewCount: "120" },
    popcornmeter: { score: 90, reviewCount: "300" },
    overview:
      "This is a mock overview of the movie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et mi a nulla convallis blandit.",
    cast: [
      { id: 1, actorName: "Ananx", characterName: "Hero", profileImage: "https://jurassicworldexperience.com/th/wp-content/uploads/sites/3/2025/07/JWE-ASIATIQUE-Bangkok-Featured.jpg" },
      { id: 2, actorName: "TeamBigboy", characterName: "Villain", profileImage: "https://jurassicworldexperience.com/th/wp-content/uploads/sites/3/2025/07/JWE-ASIATIQUE-Bangkok-Featured.jpg" },
      { id: 3, actorName: "Leekongkuy", characterName: "Sidekick", profileImage: "https://jurassicworldexperience.com/th/wp-content/uploads/sites/3/2025/07/JWE-ASIATIQUE-Bangkok-Featured.jpg" },
    ],
  })

  const [isOverviewExpanded, setIsOverviewExpanded] = useState(false)

  return (
  <div className="min-h-screen bg-[#1a1a1a] text-white">
  <Navbar crawled={false} page="detail" />

  <div className="w-full min-h-screen py-16 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a]">
    <div className="w-full px-8 md:px-12 lg:px-16 flex flex-col gap-20 md:gap-10">
      
      <div className="flex flex-col lg:flex-row gap-8 items-start justify-between w-full">
        <div className="flex items-start gap-4">
          <a href="/">
            <div className="rounded-full bg-white text-black hover:bg-gray-200 h-10 w-10 flex items-center justify-center cursor-pointer">
              <ChevronLeft className="h-6 w-6" />
            </div>
          </a>
          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold">{movie.title}</h2>
            <p className="text-white-400 font-bold">{`Released ${movie.releaseDate}`}</p>
            <div className="flex gap-2 flex-wrap">
              {movie.genres.map((genre) => (
                <span key={genre} className="px-3 py-1 text-yellow-500 text-sm font-bold rounded"
                style={{ backgroundColor: "#414141ff" }}
                >
                  {genre}
                </span>
              ))}
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
                  <div className="text-3xl font-bold text-white">{movie.tomatometer.score}%</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">
                    {movie.tomatometer.reviewCount} Reviews
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
                  <div className="text-3xl font-bold text-white">{movie.popcornmeter.score}%</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">
                    {movie.popcornmeter.reviewCount} Reviews
                  </div>
                </div>
              </div>
            </div>
          </div>

      <div className="flex flex-col gap-16 md:gap-10">
        <div className="flex flex-col md:flex-row gap-6 items-start w-full">
          <div className="flex-shrink-0">
            <img
              src={movie.posterImage || "/placeholder.svg"}
              alt={movie.title}
              className="rounded-lg object-cover w-full md:w-[280px] h-[400px] shadow-xl"
            />
          </div>
          <div className="flex-1 rounded-lg overflow-hidden shadow-2xl shadow-black/70">
            <img
              src={movie.heroImage || "/placeholder.svg"}
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
                {movie.overview}
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

      <div className="space-y-6 w-full">
        <h3 className="text-3xl font-bold text-yellow-500 uppercase">Top Cast</h3>
        <div className="relative bg-[#252525] rounded-lg p-8 shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {movie.cast.map((member) => (
              <div key={member.id} className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
                  {member.profileImage ? (
                    <img
                      src={member.profileImage || "/placeholder.svg"}
                      alt={member.actorName}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <span className="text-white font-bold">
                      {member.actorName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  )}
                </div>
                <div>
                  <div className="font-bold text-white">{member.actorName}</div>
                  <div className="text-gray-400 text-sm">{member.characterName}</div>
                </div>
              </div>
            ))}
          </div>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-600 rounded-b-lg"></span>
        </div>
      </div>

    </div>
  </div>
</div>

  )
}
