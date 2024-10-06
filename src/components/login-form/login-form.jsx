import { useNavigate } from 'react-router-dom';
import './login-form.scss';
import lockIcon from '../../img/lock-icon.svg';
import userIcon from '../../img/user.svg';
import successIcon from '../../img/success.svg';

function LoginForm() {
    let flagLogin = true;
    const navigate = useNavigate();

    const switchSmth = (e) => {
        e.preventDefault();
        const front = document.querySelector('.front-card');
        const back = document.querySelector('.back-card');

        if (flagLogin) {
            front.style.display = 'none';
            back.style.display = 'block';
        } else {
            back.style.display = 'none';
            front.style.display = 'block';
        }
        flagLogin = !flagLogin; // переключаем флаг
    };

    const nickNames = (e) => {
        if (e.target.value === '1') {
            console.log('-');
        }
    };

    const Btn = () => {
        navigate('/home');
    };

    return (
        <div className="container-login">
            {/* Front Card */}
            <div className="front-card">
                <div className="login-text">Log In</div>
                <div className="inputs">
                    <div className="input-block">
                        <input type="text" placeholder="Your nickname" onChange={nickNames} />
                        <img src={userIcon} alt="User Icon" />
                    </div>
                    <div className="input-block">
                        <input type="password" placeholder="Your password" />
                        <img src={lockIcon} alt="Lock Icon" />
                    </div>
                </div>
                <button type="button" className="login-btn" onClick={Btn}>Submit</button>
                <a href="#" className="login-recovery small" onClick={switchSmth}>Sign In</a>
            </div>

            {/* Back Card */}
            <div className="back-card" style={{ display: 'none' }}>
                <div className="login-text">Sign In</div>
                <div className="inputs">
                    <div className="input-block">
                        <input type="text" placeholder="Your nickname" />
                        <img src={userIcon} alt="User Icon" />
                    </div>
                    <div className="input-block">
                        <input type="password" placeholder="Your password" />
                        <img src={lockIcon} alt="Lock Icon" />
                    </div>
                    <div className="input-block">
                        <input type="password" placeholder="Confirm password" />
                        <img src={lockIcon} alt="Lock Icon" />
                    </div>
                </div>
                <button type="button" className="login-btn" onClick={Btn}>Save Data</button>
                <a href="#" className="login-recovery small" onClick={switchSmth}>Log In</a>
            </div>

            {/* Back Card Success */}
            <div className="back-card-success" style={{ display: 'none' }}>
                <div className="success-text">
                    Your registration has been successfully accepted, please wait. 
                    During the approval period you will be able to enjoy the game.
                </div>
                <img src={successIcon} alt="Success Icon" />
                <button>Back</button>
            </div>
        </div>
    );
}

export default LoginForm;
