import { FaInstagram, FaFacebookF } from "react-icons/fa6";
import './Icons.css';


export default function Icons() {
    return (
        <div className='icons'>
            <div className='iconContainer'>
                <FaFacebookF className='icon' />
            </div>
            <div className='iconContainer'>
                <FaInstagram className='icon' />
            </div>
        </div>
    );
}
