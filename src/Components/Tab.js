import React from 'react'

export default function Tab({ genre }) {
    return (
        <div className='border-[1.5px] bg-green-200 dark:bg-slate-900 font-mono border-sky-600 p-1 px-2 rounded-3xl'>
            {genre}
        </div>
    )
}
