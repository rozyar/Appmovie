import React from "react";
import { Main } from "./pages/Main";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import { useState } from 'react';
import { MoviePage } from "./pages/MoviePage";


const App = () => {

	const [id, setId] = useState("bode");
	const [poster, setPoster] = useState("");

	var routeMoviePage = `/Main/${id}`

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Navigate to="/Main"/>}/>
				<Route path="/Main" element={<Main setId={setId} setPoster={setPoster} />} />
				<Route path={routeMoviePage} element={<MoviePage id={id} poster={poster} />}/>
			</Routes>
    	</Router>
	);
};

export default App;
