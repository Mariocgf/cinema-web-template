import movies from "../db";

const DetailMovieContainer = () => {

    return (
        <div className='container-movie-view'>
            <h1>{movies[1].title}</h1>
            <img src={movies[1].img} alt="" />
            <div className="container-movie-view-info">
                <p>Qualification: {movies[1].info.qualification} </p>
                <p>Duration: {movies[1].info.duration} </p>
                <p>Gender: {movies[1].info.gender} </p>
            </div>
            <div className="container-movie-view-option">
                <h3>Days available</h3>
                <div className="container-movie-view-option-radio">
                    <div>
                        <label htmlFor="value1">12/06 - 21H</label>
                        <input type="radio" name="" id="value1" />
                    </div>
                    <div>
                        <label htmlFor="value1">13/06 - 15H</label>
                        <input type="radio" name="" id="value1" />
                    </div>
                    <div>
                        <label htmlFor="value1">17/06 - 17H</label>
                        <input type="radio" name="" id="value1" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DetailMovieContainer;