import './settings-menu.css'
import { Bell, KeySquare, LucideLogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function SettingsMenu({isMenuVisible}) {


    const navigate = useNavigate();

    const btnLogOut = () => {
        navigate('/login');
    }




    return ( 
        <div className="settings-back" style={{display: isMenuVisible? 'block': 'none'}}>
            <div className="settings-item"><Bell/></div>
            <div className="settings-item"><KeySquare/></div>
            <div className="settings-item" onClick={btnLogOut}><LucideLogOut/></div>
        </div>
     );
}

export default SettingsMenu;