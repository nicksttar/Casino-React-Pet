import HomeComponent from "../components/home/home";
import Header from "../components/header/header";
import '../media/home-page-media.css';

function Home() {
    return ( 
        <div className="home-container">
            <Header></Header>
            <HomeComponent></HomeComponent>
        </div>
     );
}

export default Home;