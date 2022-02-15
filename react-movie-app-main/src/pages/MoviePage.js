import React, { useState , useEffect } from "react"
import { Link } from "react-router-dom";

export function MoviePage(props){

    const [movieInfo , setMovieInfo] = useState("a");
    const [arrComentario , setArr] = useState("");

    const id = props.id;

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



    const getCommentaryInfo  = async () => {
		const url = `https://ironrest.herokuapp.com/apiDICKvigarista/`;        
		//quando o fetch acontecer ele vai guardar no var response
		const response = await fetch(url);
        const responseJson = await response.json();
		//aqui ele converte o http para json
        
        var comentarios = []

        for(let i =0; i<responseJson.length ; i++){
            if(responseJson[i].filme === id){
                comentarios.push(`${responseJson[i].comentario}`)
            }
        }

        setArr(comentarios)
	};

    useEffect(() => {
		getMovieInfo(id)
        getCommentaryInfo()
	}, []);   

    console.log(arrComentario)

    
    return(
        <>
            <h1>{movieInfo.title}</h1>
            <img src={props.poster} alt='movie'/>
            <h2>{movieInfo.release_date}</h2>
            <h3> {movieInfo.overview} </h3>
            <ul>
                {   
                    arrComentario.map((current,index) => {
                        return(
                           <li>{current}</li> 
                        )
                    }
                    )
                }
            </ul>
            <Link to="../Main"><button type="button"> VOLTAR PARA MAIN</button></Link>
        </>
    )
}