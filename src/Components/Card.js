import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import genre from "../config/genres"
import Tab from './Tab'

export default function Card({ movie }) {

    const con = useLocation().pathname.includes("/movie")
    return (
        <Link to={`/movie/${movie.id}`} onClick={() => {
            if (con) {
                setTimeout(() => {
                    window.location.reload()
                }, 100);
            }
        }} >
            <div style={{ backgroundImage: `url(${process.env.REACT_APP_IMAGE_URI}/original${movie.poster_path})` }}
                className='cursor-pointer transition-all ease-in-out 
                            delay-150 md:hover:scale-95 bg-blue-200 flex flex-col 
                            justify-end shadow-xl shadow-gray-700  dark:shadow-gray-700
                             dark:bg-gray-800  dark:text-gray-300 
                             w-screen bg-cover bg-no-repeat rounded-md md:w-96'>
                <div className='h-72 w-full'>
                    {/* just a stub */}
                </div>
                <div className='card-content bg-transparent backdrop-blur-3xl backdrop-brightness-[.8]'>
                    <p className='text-2xl mt-1 ml-1 font-semibold text-transparent  bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-rose-300 dark:from-white dark:via-fuchsia-500 dark:to-teal-500 '>{movie.title}</p>
                    <div className='flex p-1 gap-1 flex-wrap'>{
                        movie.genre_ids.map((ids) => {
                            const a = genre.find((g) => {
                                if (g.ids === ids) {
                                    // console.log(g, ids);
                                    return true
                                }
                                return false
                            })
                            return <Tab genre={a.genre} key={a.ids} />
                        }
                        )
                    }
                    </div>
                </div>
            </div>
        </Link>
    )
}
