import '../../index.css'
export const RatingList = ({ rating, handleFilteredMovies, ratings }) => {
    return (
        <ul className="flex gap-4">
            {ratings.map(rateGiven => <li key={rateGiven} className='cursor-pointer' onClick={() => handleFilteredMovies(rateGiven)}>{rateGiven}+</li>
            )}
            
        </ul>
    )
}