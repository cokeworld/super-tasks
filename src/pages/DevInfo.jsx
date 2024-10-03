import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Header from '../components/Header';

const DevInfo = () => {
    const nav = useNavigate();
    return (
        <div style={{ textAlign: 'center' }}>
            <Header title={'개발자 정보'} />
            <section style={{ padding: '20px 0px', borderBottom: '1px solid rgb(226, 226, 226)' }}>
                <p>안녕하세요?😊</p>
                <p>
                    TodoList 개발자 <b>김태경</b>입니다.
                </p>
                <p>TodoList를 이용해주셔서 대단히 감사드립니다.</p>
                <p>TodoList를 통해 여러분의 모든 목표를 이루시기를 기원합니다.</p>
                <p>문의사항은 아래 링크로 연락부탁드립니다.</p>
            </section>
            <section style={{ padding: '20px 0px', borderBottom: '1px solid rgb(226, 226, 226)' }}>
                <p>
                    <Button
                        text={'Github'}
                        onClick={() => window.open('https://github.com/cokeworld', '_blank')}
                        type={'POSITIVE'}
                    />
                </p>
                <p>
                    <Button
                        text={'Blog'}
                        onClick={() => window.open('https://cokeworld.tistory.com', '_blank')}
                        type={'POSITIVE'}
                    />
                </p>
                <p>
                    E-mail
                    <br />
                    xorud1350@naver.com
                </p>
            </section>
            <section style={{ padding: '20px 0px' }}>
                <Button text={'돌아가기'} onClick={() => nav('/')} />
            </section>
        </div>
    );
};

export default DevInfo;
