import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Movie from "./Components/Movie";
import Theme from "./Components/Theme";
import Footer from "./Components/Footer";
import axios from "axios";

function App() {
	const [theme, setTheme] = useState(
		window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
	);

	// setting defaults for every request
	axios.defaults.headers.common["Authorization"] = "Bearer ".concat(
		process.env.REACT_APP_API_KEY
	);
	axios.defaults.headers.get["Content-Type"] = "application/json;charset=utf-8";

	return (
		<div className={`App scroll-smooth ${theme}`}>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/movie/:id" element={<Movie />} />
				<Route element={<NotFound />} />
			</Routes>
			<Theme theme={theme} setTheme={setTheme} />
			<Footer />
		</div>
	);
}

function NotFound() {
	return <div>404 Not Found</div>;
}

export default App;
