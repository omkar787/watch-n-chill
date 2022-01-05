import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function Top({ setMovies }) {
    const [search, setSearch] = useState(null)

    function handleOnChange(e) {
        let temp = e.target.value
        if (temp.trim().length !== 0) {
            setSearch(temp)
        }
    }

    useEffect(() => {
        console.log(search)
        const timeOurId = setTimeout(() => {
            if (search !== null) {
                axios.get(`${process.env.REACT_APP_BASE_URI}/search/movie?query=${search}`)
                    .then(data => {
                        console.log(data)
                        return data.data.results
                    })
                    .then(data => {
                        console.log(data);
                        setMovies(data)
                    })
            }
        }, 500);

        return () => clearTimeout(timeOurId)

    }, [search])
    return (
        <div className='flex justify-center pt-3 px-5 md:px-10 lg:px-40 xl:px-60'>
            <input
                className='text-lg p-3 text-center rounded-sm font-mono text-black placeholder:text-slate-600 outline-none w-full bg-green-300 dark:text-white dark:bg-slate-700 '
                type="text"
                name="Search Box"
                placeholder="Search a movie"
                onChange={handleOnChange} />
        </div>
    )
}