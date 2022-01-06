import React from 'react'
import tmdbIcon from "../static/images/tmdb_icon.svg"

export default function Footer() {
    return (
        <div className='bg-gray-200 text-center text-gray-800 dark:text-gray-200 dark:bg-slate-900'>
            <div>
                Made with 💙 by <a className="text-blue-600 dark:text-emerald-300 font-semibold" href="https://github.com/omkar787">

                    Omkar
                </a>
            </div>
            <div className=' flex justify-center gap-3'>
                Powered by
                <a href='https://www.themoviedb.org/' style={{ backgroundImage: `url(${tmdbIcon})` }} className='h-5 w-32 bg-no-repeat '>
                </a>
            </div>
        </div>
    )
}
