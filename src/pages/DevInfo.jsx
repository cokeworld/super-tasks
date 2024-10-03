const DevInfo = () => {
    return (
        <div style={{ padding: '40px 0px' }}>
            <section style={{ textAlign: 'center', padding: '20px 0px', borderBottom: '1px solid rgb(226, 226, 226)' }}>
                <p>안녕하세요?😊</p>
                <p>
                    TodoList 개발자 <b>김태경</b>입니다.
                </p>
                <p>TodoList를 이용해주셔서 대단히 감사드립니다.</p>
                <p>TodoList를 통해 여러분의 모든 목표를 이루시기를 기원합니다.</p>
                <p>문의사항은 아래 링크로 연락부탁드립니다.</p>
            </section>
            <section style={{ textAlign: 'center', padding: '20px 0px' }}>
                <p>
                    <a href="https://github.com/cokeworld" target="_blank" style={{ textDecoration: 'none' }}>
                        GitHub
                    </a>
                </p>
                <p>
                    <a href="https://cokeworld.tistory.com/" target="_blank" style={{ textDecoration: 'none' }}>
                        Blog
                    </a>
                </p>
                <p>
                    E-mail
                    <br />
                    xorud1350@naver.com
                </p>
            </section>
        </div>
    );
};

export default DevInfo;
