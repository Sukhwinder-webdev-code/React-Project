import { RatingList } from "./RatingList"

export const Component2 = ({ handleFilteredMovies, rating,setSortingCondition, handleOrder,setAscending}) => {

    return (
        <header className="flex items-center justify-between ml-10 text-white">
            <h1 className="text-xl">Popular</h1>
            <div className="flex gap-6 px-4">
                <RatingList rating={rating} ratings={[8, 7, 6]} handleFilteredMovies={handleFilteredMovies} />
                <select onChange={(e)=>setSortingCondition(e.target.value)} name="category" id="Category" className="text-black">
                    <option>Sort By</option>
                    <option >Date</option>
                    <option>Rating</option>
                </select>
                <select onChange={handleOrder} name="sorted" className="text-black">
                    <option>Ascending</option>
                    <option>Decending</option>
                </select>
            </div>
        </header>
    )
}