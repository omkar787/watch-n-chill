import React from 'react'
import Card from './Card'

function Content({ movies }) {
    return (
        <div className="p-1 overflow-auto flex gap-5 flex-wrap  justify-center md:gap-10">
            {
                movies.length !== 0 ?
                    movies.map((m) => {
                        return <Card key={m.id} movie={m} />
                    }) : <div className='dark:text-white text-2xl'>No Results found</div>}
        </div>
    )
}

export default Content