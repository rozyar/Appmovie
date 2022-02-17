import React, { useState } from "react"
import { Link } from "react-router-dom";
//up
export function MoviePage(props){

    const [movieInfo , setMovieInfo] = useState("a")

    const id = props.id

    const getMovieInfo = async (id) => {
		const url = `https://api.themoviedb.org/3/find/${id}?api_key=4a6706e6c275ed719d172b6dc5f207f0&language=en-US&external_source=imdb_id`;        
		//quando o fetch acontecer ele vai guardar no var response, e responder um objeto que criamos com a busca
		const response = await fetch(url);
		//aqui ele converte o http para json 
		const responseJson = await response.json();

		//criamos a função if para não dar bug e chamar o useState só quando tiver um valor na searchBox
		//.Search é a array onde contem os filmes quando pesquisamos na API
	    
        setMovieInfo(responseJson.movie_results[0])         
	};

    getMovieInfo(id)

    return(
        <>
        <div class="return">
        <Link to="../Main"><a class="arrow"> </a> </Link>   
        </div>

            <div class="content">
            <img className="image" src={props.poster} alt='movie'/>
            <div classname="container-text">
            <h1 class="Titulo">{movieInfo.title}</h1>
            <h2 class="Subtitulo">{movieInfo.release_date}</h2>
            <h3 class="Sinopse">{movieInfo.overview}</h3>
            </div>
            </div>
            
        </>
    )
}