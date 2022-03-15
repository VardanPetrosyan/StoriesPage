import { Link } from "react-router-dom";
import './style.css'

const Home = () => {
    return (
        <div className='home-page'>
            <div className='home-page__get-start-btn get-start-btn'>
                <Link to="stories">
                    <button className='get-start-btn__btn'>GetStarted</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
