const Banner = ({movie}) => {
    return(
        <div className="banner-home">
            <img src={movie.banner} alt="banner" />
            <div className="banner-home-title">
                <h1>{movie.title}</h1>
            </div>
        </div>
    )
}

export default Banner;