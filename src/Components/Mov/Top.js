import React from 'react'
import Tab from '../Tab'
import IMDB from './IMDB'

export default function Top({ data }) {

    return (
        <div className='dark:text-white p-2 flex flex-wrap md:flex-nowrap gap-5 md:gap-10 shadow-sm shadow-slate-400 dark:shadow-gray-700'>
            <div className="h-96 w-screen flex justify-center md:w-64 p-1">
                <div style={{ backgroundImage: `url(${process.env.REACT_APP_IMAGE_URI}/original${data.poster_path})` }}
                    className='w-64 h-full bg-cover bg-no-repeat rounded-md shadow-lg relative shadow-slate-700 dark:shadow-gray-800'
                >
                    <div className='absolute bottom-0 right-0 shadow-lg  bg-emerald-400 shadow-emerald-600   
                                p-5 text-xl rounded-full font-semibold m-1 text-rose-700'>
                        {data.vote_average}
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                <div className=' text-4xl md:text-5xl'>
                    {data.title}
                </div>
                <div className='text-lg text-gray-600 dark:text-gray-400'>
                    {data.tagline}
                </div>
                <div className='text-md mt-3'>
                    <div className='text-xl'>
                        Overview
                    </div>
                    {data.overview}
                </div>
                <div className='flex flex-wrap gap-2 mt-2'>
                    {
                        data.genres.map((gen) => {
                            return <Tab key={gen.id} genre={gen.name} />
                        })
                    }
                </div>
                <div className='mt-2'>
                    <IMDB id={data.imdb_id} />
                </div>

            </div>
        </div>
    )
}
