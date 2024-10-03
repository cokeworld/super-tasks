import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const NotFound = () => {
    const nav = useNavigate();
    return (
        <div style={{ textAlign: 'center', padding: '50px 0px' }}>
            <p>없는 페이지입니다.</p>
            <p>다시 확인 후 접속해주세요.😉</p>
            <Button text={'돌아가기'} onClick={() => nav('/', { replace: true })} type={'POSITIVE'} />
        </div>
    );
};

export default NotFound;
