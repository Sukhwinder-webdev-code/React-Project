import PropTypes from "prop-types";
export const Component3 = ({ movie }) => {
    return (
        <div className="w-[250px] h-[300px] relative m-8 shadow-lg border border-1">
            <a href={`https://www.themoviedb.org/movie/${movie.id} `} target="_blank">
                <img className="h-full w-full object-cover transition-transform duration-200 ease-in hover:scale-105" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie poster" />
            </a>
            <div className="w-full absolute bottom-0 p-2 flex flex-col text-yellow-500">
                <h1 className="m-auto text-white">{movie.original_title}</h1>
                <section className="flex justify-between w-full">
                    <p>{movie.release_date}</p>
                    <p className="flex justify-end gap-1">{movie.vote_average} <img className="w-[24px] h-[24px]" src="./src/assets/images/star.webp" alt="rating icon" /></p>
                </section>
            </div>
        </div>
    )
    {movie.PropTypes}{
        movie:PropTypes.shape({
            id:PropTypes.number.isRequired,
            poster_path:PropTypes.string,
            original_title:PropTypes.string,
            release_date:PropTypes.string,
            vote_average:PropTypes.number
        })
    }
}