import axios from "axios";
import { useState, useEffect } from "react";
import Content from "./Components/Content";
import Top from "./Components/Top";
import Theme from "./Components/Theme";

function App() {
	// Setting the title of the document
	document.title = "Watch n Chill";
	// state for changine theme
	const [theme, setTheme] = useState(
		window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
	);

	// State for saving the array of movies
	const [movies, setMovies] = useState(null);

	// setting defaults for every request
	axios.defaults.headers.common["Authorization"] = "Bearer ".concat(
		process.env.REACT_APP_API_KEY
	);
	axios.defaults.headers.get["Content-Type"] = "application/json;charset=utf-8";

	console.log(movies);
	// Fetching movies on the first render asynchronously
	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_BASE_URI}/discover/movie`)
			.then((data) => data.data)
			.then((data) => {
				console.log(data.results);
				setMovies(data.results);
			});
	}, []);

	// if movies state is not null then render the inside content, otherwise return null
	return movies ? (
		<div className={`App ${theme} font-sans`}>
			<div className="bg-gray-200 dark:bg-slate-900">
				<Top setMovies={setMovies} />
				<Content movies={movies} />
				<Theme theme={theme} setTheme={setTheme} />
			</div>
		</div>
	) : null;
}

export default App;
