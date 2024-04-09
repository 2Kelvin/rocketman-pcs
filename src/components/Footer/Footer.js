import Icons from '../SocialIcons/Icons';
import './Footer.css';

export default function Footer() {
    return (
        <footer>
            <Icons />
            <small>Contact: 0772775311 </small>
            <small>Email: rocketmancodes02@gmail.com</small>
            <small>Website built by <a href='https://2kelvin.github.io/portfolio/' target='blank'>Rocketman</a></small>
            <small>{new Date().getFullYear()}</small>
        </footer>
    );
}
