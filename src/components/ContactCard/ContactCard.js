import { IoCloseOutline } from "react-icons/io5";
import './ContactCard.css';


export default function ContactCard() {
    return (
        <div className='contactCard'>
            <div className='flexWrapper'>
                <div className='closeIconDiv'>
                    <IoCloseOutline className='closeIcon' />
                </div>
            </div>
        </div>
    );
}
