import './App.css';
import NavBar from './components/NavBar/NavBar';
import BoxMovie from './components/Box/BoxMovie';
import movies from './db';
import HomeContainer from './containers/HomeContainer';
import DetailMovieContainer from './containers/DetailMovieContainer';

function App() {
    return (
        <div className="App">
            <NavBar />
            <HomeContainer />
            {/* <DetailMovieContainer /> */}
        </div>
    );
}

export default App;
