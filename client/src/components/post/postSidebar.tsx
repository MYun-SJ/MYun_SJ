import "../../style/post/postSidebar.scss"
import write from "../../img/write.png"
import setting from "../../img/gear.png"
import cube from "../../img/cube.png"
import logout from "../../img/logout.png"
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import ScrollArrow from "../common/scrollArrow"

const PostSidebar = () => {
    const navigate = useNavigate();

    const logoutFunc = () => {
        // 클라이언트 측 인증 정보 삭제
        localStorage.removeItem('userToken'); // 토큰 삭제
        sessionStorage.clear(); // 세션 스토리지 클리어 (필요한 경우)

        // 사용자를 로그인 페이지로 리디렉션
        navigate('/login');
    };

    return (
        <>
            <div className="postSidebar-box">
                <div className="postSidebar-inner">
                    <p className="postSidebar-inner-nickname">Navigator</p>
                    <div className="postSidebar-icon">
                        <a href="/write">
                            <img src={write} alt="" />
                            <p>write</p>
                        </a>
                        <a href="#">
                            <img src={setting} alt="" />
                            <p>settings</p>
                        </a>
                    </div>
                    <div className="postSidebar-icon">
                        <a href="#" onClick={logoutFunc}>
                            <img src={logout} alt="" />
                            <p>logout</p>
                        </a>
                        <a href="#">
                            <img src={cube} alt="" />
                            <p>cube</p>
                        </a>
                    </div>
                    <ScrollArrow />
                </div>
            </div>
        </>
    );
}

export default PostSidebar;
