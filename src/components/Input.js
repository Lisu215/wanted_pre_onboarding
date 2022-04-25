import { useState } from "react";
import styled from "styled-components";
import {AiFillCheckCircle,AiFillEye,AiFillEyeInvisible} from 'react-icons/ai';

const Input = () => {
    const [email, setEmail] = useState("");
    const [isEmailValid, setEmailValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isPasswordHidden, setPasswordHidden] = useState(true);

    const emailChange = (e) => {
        setEmail(e.target.value);
        const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        emailRegex.test(email) ? setEmailValid(true) : setEmailValid(false);
    }

    const checkEmail = (e) => {
        const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        emailRegex.test(email) ? setErrorMessage("") : setErrorMessage("이메일 형식이 올바르지 않습니다.");
        if(email.length === 0) {
        setErrorMessage("이메일을 입력해주세요.")
        };
    }

    return (
        <InputContainer>
            <InputItem>
                <label>E-mail</label>
                <input type="email" placeholder="E-mail" value={email} onChange={emailChange} onBlur={checkEmail}></input>
                <i><AiFillCheckCircle size="20" color={ email.length === 0 ? "#D4D4D4" : (isEmailValid  ? "#22AFAF" : "#D4D4D4")}/></i>
                <ErrorCode>{errorMessage}</ErrorCode>
            </InputItem>
            <InputItem>
                <label>Password</label>
                <input type={isPasswordHidden ? "password" : "text"}  placeholder="Password"></input>
                <i onClick={() => setPasswordHidden(!isPasswordHidden)}>
                    {isPasswordHidden ? <AiFillEyeInvisible size="20" color="#767676"/> : <AiFillEye size="20" color="#22AFAF"/>}  
                </i>
            </InputItem>
        </InputContainer>
    );
};

export default Input;

const InputContainer = styled.div`
    width: 400px;
    margin: 0 auto;
    padding-left: 15px;
    background-color: #F9F9F9 ;
`;

const InputItem = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;

    label {
        margin: 5px;
        font-size: 12px;
        font-weight: bold;
    }
    
    input {
        width: 90%;
        height: 35px;
        padding-left: 13px;
        border-radius: 5px;
        border: 1px solid #DFDFDF;
        background-color: #F6F6F6;

        &::placeholder {
            padding: 5px;
            font-size: 14px;
            color: #B1B1B1;
        }
    }

    i {
        cursor: pointer;
        position: relative;
        left: 330px;
        bottom: 28px;
    }
    
`;

const ErrorCode = styled.div`
    color: #a60600;
    font-size: 13px;
    position: relative;
    bottom: 15px;
    left: 5px;
`;
