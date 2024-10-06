import './header.css'

import { useEffect, useState } from 'react';
import { Languages, LucideCircleUserRound, Settings } from 'lucide-react';
import DepositWindow from '../deposit/deposit';
import SettingsMenu from '../settings-menu/settings-menu';
import centerlogo from '../../img/gold.png'

function Header() {

    const [IsDeposit, SetDeposit] = useState(false);
    const handleClose = () => SetDeposit(false);

    let [clock, SetClock] = useState("00:00:00");
    let [animation, SetAnimation] = useState(false);

    const [isMenuVisible, setIsMenuVisible] = useState(false);

    

    function clearZeros(num){
        if (num < 10){
            return `0${num}`;
        } else {
            return num;
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            let CrrDate = new Date();
            let [CrrHours, CrrMinutes, CrrSeconds] = [
                CrrDate.getHours(), 
                CrrDate.getMinutes(), 
                CrrDate.getSeconds()];
                
            SetClock(`${clearZeros(CrrHours)}:${clearZeros(CrrMinutes)}:${clearZeros(CrrSeconds)}`);

        }, 1000);

        return () => clearInterval(interval);
    })

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    }

    const toggleanimation = () => {
        SetAnimation(!animation);
    }

    const toggleMenuAndAnimation = () => {
        toggleMenu();
        toggleanimation();
    }


    return (
        <>
            <div className="header-block">
                <div className="header-left-block">
                    <div className="ddd">Dobry Dadya Diller</div>
                    <img src={centerlogo} alt="" className='centerlogo'/>
                </div>
                <div className="header-right-block">
                    <button type='button' className="yellow-color deposit-btn rblock" onClick={() => SetDeposit(true)}>Deposit</button>
                    <div className="balance-btn rblock">0.00$</div>
                    <div className="profile-btn rblock"><LucideCircleUserRound/></div>
                    <div className="language-btn rblock"><Languages/></div>
                    <div className="timer rblock">{clock}</div>
                    <div className={`settings`}><Settings onClick={toggleMenuAndAnimation} className={`${animation ? 'animation1': 'animation2'}`}/>
                    <SettingsMenu isMenuVisible={isMenuVisible}/></div>
                    
                </div>
                
            </div>
            <div className="header-divider"></div>
            {IsDeposit && <DepositWindow onClose={handleClose}></DepositWindow>}
        </>

     );
}

export default Header;