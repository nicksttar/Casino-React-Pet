import HomeComponent from "../components/home/home";
import Header from "../components/header/header";

function Home() {
    return ( 
        <div className="home-container">
            <Header></Header>
            <HomeComponent></HomeComponent>
        </div>
     );
}

export default Home;