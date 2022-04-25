import React, { useState } from 'react';
import styled from "styled-components";

const Toggle = () => {
    const [isToggle, setToggle] = useState(false);
    return (
          <ToggleContainer>
          <SlideItem isToggle={isToggle}></SlideItem>
          <ToogleItem onClick={()=>setToggle(false)} isToggle={isToggle}>기본</ToogleItem>
          <ToogleItem onClick={()=>setToggle(true)} isToggle={!isToggle}>상세</ToogleItem>
          </ToggleContainer>
    );
};

export default Toggle;

const ToggleContainer = styled.div`
    width: 400px;
    border-radius: 30px;
    margin: 0 auto;
    padding: 3px;
    display: flex;
    position: relative;
    background-color: #eee;
`;

const SlideItem = styled.div`
    width: 200px;
    height: 35px;
    border-radius: 25px;
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    transition: 0.2s;
    transform: ${props => props.isToggle ? "translatex(100%)" : "translatex(0%)"};
`;

const ToogleItem = styled.div`
    width: 200px;
    height: 35px;
    border-radius: 25px;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
    color: ${props => props.isToggle ? "#767676" : "#000000"};
`;

