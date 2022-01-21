import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Content from './Content'
import Top from './Mov/Top'


export default function Movie() {
    const [movieData, setMovieData] = useState(null);
    const [recommend, setRecommend] = useState(null);


    const params = useParams()

    useEffect(() => {

        axios
            .get(`${process.env.REACT_APP_BASE_URI}/movie/${params.id}`)
            .then(data => {
                document.documentElement.scrollTop = 0
                setMovieData(data.data)
            })
        axios
            .get(`${process.env.REACT_APP_BASE_URI}/movie/${params.id}/recommendations`)
            .then(data => {
                setRecommend(data.data.results)
            })
    }, [useParams().id])

    return movieData ? (
        <div className='bg-gray-200 dark:bg-slate-900 scroll-smooth'>
            <Top data={movieData} />
            {
                recommend ?
                    <div className='p-1'>
                        <div className='dark:text-white text-3xl ml-1 mt-6 mb-4 text-center'>
                            You might like
                        </div>
                        <Content movies={recommend} />
                    </div>
                    : null
            }
        </div>
    ) : (
        <div>
            <h1>Loading...</h1>
        </div>
    )
}
