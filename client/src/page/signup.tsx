import axios from "axios";
import Btn from "../components/common/btn"
import LogoImg from "../components/common/logoImg"
import Title from "../components/common/title"
import SignupInputBox from "../components/signup/signupInput"
import React, {useState} from "react";


const Signup = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [pw, setPw] = useState('');
    const [pwcheck, setPwcheck] = useState('');

    const [emailValid, setEmailValid] = useState(false);
    const [nameValid, setNameValid] = useState(false);
    const [nicknameValid, setNicknameValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [pwcheckValid, setPwcheckValid] = useState(false);

    const emailRegex = /\S+@\S+\.\S{2,3}$/;
    const nameRegex = /^[가-힣]{2,5}$/;
    const nicknameRegex = /^[a-zA-Z0-9가-힣]{3,10}$/;
    const pwRegex = /^(?=.*[A-Za-z])(?=.*[!@#$%^&*])(?=.{8,16})[A-Za-z\d!@#$%^&*]{8,16}$/;

    // useEffect(() => {
    //     console.log('이메일', email);
    //     console.log('이름', name);
    //     console.log('닉네임', nickname);
    //     console.log('비번', pw);
    //     console.log('비번확인', pwcheck);
    // }, [email, name, nickname, pw, pwcheck]);

    const handleSubmit = async (e:any) => {
        e.preventDefault();

        if (!emailValid || !nameValid || !nicknameValid || !pwValid || !pwcheckValid) {
            alert("입력한 정보를 다시 확인해 주세요.");
            return;
        }

        const formData = {
            email,
            name,
            nickname,
            pw
        };

        try {
            const response = await axios.post('http://localhost:5000/api/users', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            alert('회원가입 성공!');
            console.log(response.data);
        } catch (error) {
            console.error('회원가입 에러:', error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <LogoImg />
                <Title mainText="J O I N" subText="회원가입" />
                <SignupInputBox
                    type="email"
                    placeholder="myun@test.com"
                    title="이메일"
                    msg={emailValid ? "🟢" : "🔴"}
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                        setEmailValid(emailRegex.test(e.target.value));
                    }} />
                <SignupInputBox
                    type="text"
                    placeholder="문성준"
                    title="이름"
                    msg={nameValid ? "🟢" : "🔴"}
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                        setNameValid(nameRegex.test(e.target.value));
                    }} />
                <SignupInputBox
                    type="text"
                    placeholder="문미새"
                    title="닉네임"
                    msg={nicknameValid ? "🟢" : "🔴"}
                    value={nickname}
                    onChange={(e) => {
                        setNickname(e.target.value)
                        setNicknameValid(nicknameRegex.test(e.target.value));
                    }} />
                <SignupInputBox
                    type="password"
                    placeholder="비밀번호를 입력해주세요."
                    title="비밀번호"
                    msg={pwValid ? "🟢" :"🔴"}
                    value={pw}
                    onChange={(e) => {
                        setPw(e.target.value)
                        setPwValid(pwRegex.test(e.target.value));
                    }} />
                <SignupInputBox
                    type="password"
                    placeholder="비밀번호를 확인해주세요."
                    title="비밀번호 확인"
                    msg={pwcheckValid ? "🟢" :"🔴"}
                    value={pwcheck}
                    onChange={(e) => {
                        setPwcheck(e.target.value)
                        setPwcheckValid(pw === e.target.value);
                    }} />
                <Btn type="submit" color="black" fontColor="white" btnText="회원가입" />
            </form>
        </>
    )
}
export default Signup