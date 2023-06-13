const BoxMovie = ({ movie }) => {
    const styleMovieImg = {
        backgroundImage: `url(${movie.img})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat"
    }
    return <div className="component-box-movie" >
        <img src={movie.img} />
        <div>
            <h3>{movie.title}</h3>
            <button className="btn-primary">Details</button>
        </div>
    </div>
}

export default BoxMovie