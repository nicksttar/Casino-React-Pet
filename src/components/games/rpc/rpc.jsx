import './rpc.css';
import Header from '../../header/header';
import { useState } from 'react';

function RPGame() {

    const [play_flag, SetPlayFlag] = useState(false);
    const [card_pos, SetCardPos] = useState(0);


    function TestClick(){
        SetCardPos(1);
    }

    const numbers_items = [100, 5, 2]

    return ( 
        <div className="home-container">
            <Header/>
            <div className="rpc-wrapper">
                <div className="rpc-numbers">
                    <div className="front-card9 type1"></div>
                    <div className="back-card-play"></div>
                    <div className="front-card9 type2" style={{transform: `translateX(-${card_pos * 230}px)`}}></div>
                    <div className="front-card9 type3" style={{transform: `translateX(-${card_pos * 230}%)`}}></div>
                </div>
                    {/* {play_flag && '123'} */}
                <input type="text" className="bet-input" />
                <div className="play-btn" onClick={TestClick}>play</div>
            </div>
        </div>
     );
}

export default RPGame;