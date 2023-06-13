import Banner from "../components/Banner/Banner"
import BoxMovie from "../components/Box/BoxMovie"
import movies from "../db"

const HomeContainer = () => {
    return (
        <div className="container-home">
            {/* <h1>Home</h1> */}
            <Banner movie={movies[1]} />
            <h3 className="subTitle">This week</h3>
            <div style={{ display: "flex", paddingLeft: "150px", paddingRight: "150px" }}>
                <BoxMovie movie={movies[0]} />
                <BoxMovie movie={movies[1]} />
            </div>
        </div>
    )
}

export default HomeContainer