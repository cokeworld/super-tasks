import { useNavigate } from 'react-router-dom';
import Button from './Button';
import './Footer.css';

const Footer = () => {
    const nav = useNavigate();
    return (
        <footer className='Footer'>
            <Button text={'개발자 정보'} onClick={() => nav('/info')} />
        </footer>
    );
};
export default Footer;
