import React from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	//Dentro da lista de filmes nos estamos usando o map para mostrar cada filme da array, cada filme possui uma div e uma imagem
	//Movies.poster pois o link da imagem do filme estpá localizada no poster então aqui ele renderiza a imagem
	//d-flex é uma classe para "flexbox container" e o m-3 dá um espaçamento entre os filmes para nós
	
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} alt='movie'></img>
					<div
						onClick={() => props.handleFavouritesClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
					>
						<FavouriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;
