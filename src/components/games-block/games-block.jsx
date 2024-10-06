import './games-block.css'
import { useNavigate } from 'react-router-dom';


function GamesBlock({ color, title, games }) {

    const navigate = useNavigate();

    const Gamef = (item) => {
        navigate(`/${item}`);
    }

    return ( 
        <div className="games-block">
            <div className="games-block-titile ddd" 
            style={{
                color: `${color}`,
                fontSize: '36px'}}>{title}</div>

            <div className="games-block-wrapper">
                {games.imageGame.map((item, key) => {
                    return <div 
                    className="one-game-block" 
                    style={{
                        backgroundImage: `url(${item})`, 
                        backgroundSize: 'cover, 90%',
                        backgroundSize: '90%',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'}}
                    onClick={() => Gamef(games.link[key])}>
                    </div>
                })}
            </div>
        </div>
     );
}

export default GamesBlock;