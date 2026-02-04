export const Header = () => {
    return (
        <nav className="flex justify-between mx-10 mt-8 mb-8 text-white">
            <h1 className="text-2xl italic">Movie Revie Show</h1>
            <div className="flex gap-4">
                <a href="#">Most Famous</a>
                <a href="#">Highly Rated</a>
                <a href="#">Coming Soon</a>
            </div>
        </nav>

    )
}