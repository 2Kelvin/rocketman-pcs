import { IoCloseOutline, IoCallOutline } from "react-icons/io5";
import { BiMessageSquareDetail } from "react-icons/bi";
import { PiWhatsappLogoLight } from "react-icons/pi";
import './ContactCard.css';


export default function ContactCard({ showContact, setShowContact }) {
    return (
        <div className='contactCard'>
            <div className='flexWrapper'>
                <div className='closeIconDiv' onClick={() => setShowContact(false)}>
                    <IoCloseOutline className='closeIcon' />
                </div>
            </div>

            <p>Call, text or whatsapp me using the number below.</p>

            <div className='iconsContactDiv'>
                <IoCallOutline className='iconContactBuyer phoneIcon' />
                <BiMessageSquareDetail className='iconContactBuyer msgIcon' />
                <PiWhatsappLogoLight className='iconContactBuyer whatsappIcon' />
            </div>

            <h3>0772775311</h3>
            <p>Thank you for visting my shop.</p>
        </div>
    );
}
