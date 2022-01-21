import React from 'react'
import icon from "../../static/images/imdb_icon.png"


export default function IMDB({ id }) {
    return (
        <a href={`https://imdb.com/title/${id}`}>

            <div style={{ backgroundImage: `url(${icon})` }}
                className='h-12 w-12 rounded-md bg-cover cursor-pointer shadow-md shadow-orange-400'
            >
                {/* <img src={Icon} /> */}
            </div>
        </a>
    )
}
