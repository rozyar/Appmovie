import React, { useState , useEffect } from "react"
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function MoviePage(props){



    const [movieInfo , setMovieInfo] = useState({});
    const [arrComentario , setArr] = useState([]);
    const [comment , setComment] = useState("");
    const [user , setUser] = useState("");
    const [posted , setPosted] = useState(false);

    const navigate = useNavigate();

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
                comentarios.push(responseJson[i])
                console.log(comentarios)
            }
        }

        setArr(comentarios)
	};



    useEffect(() => {
		getMovieInfo(id)
        getCommentaryInfo()
        setPosted(false)
	}, [posted]);   


    async function handleSubmit(event){
        event.preventDefault()
        await axios.post("https://ironrest.herokuapp.com/apiDICKvigarista",{
           "filme": `${id}`,
           "comentario":comment,
           "userName":user
        })
        setPosted(true)
        navigate(`/Main/${id}`)
        
    }
    
    function handleChange(event){
        setComment(event.target.value)
    }
    function handleChange2(event){
        setUser(event.target.value)
    }

    

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
                           <li key="index">O usuário {current.userName} comentou:{current.comentario}</li>
                        )
                    }
                    )
                }
            </ul>
            <form>
                <label htmlFor="user">Nome de Usuário:</label>
                <input id="user" value={user} onChange={handleChange2} name="comment"/>
                <br/>
                <label htmlFor="comment">Inserir Comentário:</label>
                <input id="comment" value={comment} onChange={handleChange} name="comment"/>
                <button type="submit" onClick={handleSubmit}>Enviar</button>
            </form>
            <Link to="../Main"><button type="button"> VOLTAR PARA MAIN</button></Link>
        </>
    )
}