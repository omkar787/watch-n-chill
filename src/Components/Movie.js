import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Content from './Content'
import Top from './Mov/Top'

export default function Movie() {
    const [id, setId] = useState(useParams().id)
    const [movieData, setMovieData] = useState(null);
    const [recommend, setRecommend] = useState(null);

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_BASE_URI}/movie/${id}`)
            .then(data => {
                console.log(data.data);
                setMovieData(data.data)
            })
        axios
            .get(`${process.env.REACT_APP_BASE_URI}/movie/${id}/recommendations`)
            .then(data => {
                console.log(data.data.results);
                setRecommend(data.data.results)
            })
    }, [])
    return movieData ? (
        <div className='bg-gray-200 dark:bg-slate-900'>
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
