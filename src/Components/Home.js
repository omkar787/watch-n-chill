import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import Content from "./Content";
import Top from "./Top";
import Theme from "./Theme";

export default function Home() {
    // Setting the title of the document
    document.title = "Watch n Chill";
    // state for changine theme

    // State for saving the array of movies
    const [movies, setMovies] = useState(null);


    console.log(movies);
    // Fetching movies on the first render asynchronously
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_BASE_URI}/movie/popular`)
            .then((data) => data.data)
            .then((data) => {
                console.log(data.results);
                setMovies(data.results);
            });
    }, []);

    return movies ? (
        <div className="font-sans">
            <div className="bg-gray-200 dark:bg-slate-900">
                <Top setMovies={setMovies} />
                <Content movies={movies} />
            </div>
        </div>
    ) : <div>Loading</div>
}
