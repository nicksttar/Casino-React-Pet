import './deposit.css'
import { X } from 'lucide-react';

function DepositWindow({onClose}) {
    return ( 
        <div className="overlay">
            <div className="deposit-window">
                <div className="deposit-window-title">Deposit</div>
                <div className="deposit-exit-btn" onClick={onClose}><X color='white'></X></div>
                <div className="deposit-form">
                    <input type="text" placeholder='1234 4567 8901 2345' className="card-input" />
                    <input type="text" placeholder='John Smith' className="card-holder" />
                    <input type="text" placeholder='01/25' className="card-expiry-date" />
                    <input type="text" className='sum-input' placeholder='100$'/>
                    <input type="text" placeholder='***' className="security-code" />
                    
                    <button type='submit' className='submit-deposit'>Submit</button>
                </div> 
            </div>
        </div>

     );
}

export default DepositWindow;