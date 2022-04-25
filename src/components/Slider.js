import React, { useState } from 'react';
import styled from "styled-components";

const Slider = () => {
    const items = [1, 25, 50, 75, 100];
    const [isPercent, setPercent] = useState(0);
    const changePercent = (e) => setPercent(e.target.value);
    
    return (
        <SliderContainer>
            <PercentBox>
                <PercentNum>{isPercent}</PercentNum>%
            </PercentBox>
            <SliderBar type="range" min="0" max="100" value={isPercent} onChange={changePercent}/>
            <ButtonBox>
                {items.map((item, index) => {
                      return (
                        <ButtonItem key={index} value={item} onClick={changePercent}>{item}%</ButtonItem>
                    )
                })}
            </ButtonBox>   
        </SliderContainer>
    );
};

export default Slider;

const SliderContainer = styled.div`
    width: 400px;
    margin: 0 auto;
`;

const PercentBox = styled.div`
    height: 35px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #F9F9F9;
    padding: 10px 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #767676;
    font-size: 17px;
`;

const PercentNum = styled.div`
    color: black;
    font-weight: bold;
    padding-right: 25px;
`;

const SliderBar = styled.input`
    width: 100%;
    margin: 30px 0 15px auto;
    -webkit-appearance: none;
    cursor: pointer;
    
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 23px;
        width: 23px;
        margin-top: -8px;
        background: #22AFAF;
        border: solid 3px white;
        border-radius: 100%;
        box-shadow: 0 0 2px 0 #000000;
    }

    &::-webkit-slider-runnable-track {
        width: 100%;
        height: 6px;
        border-radius: 25px;
        background: linear-gradient(
        to right,
        #22AFAF 0%,
        #22AFAF ${(props) => props.value}%,
        #EBEBEB ${(props) => props.value}%,
        #EBEBEB 100%
    );
    
    }    
`;

const ButtonBox = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ButtonItem = styled.button`
    width: 40px;
    height: 20px;
    border: none;
    border-radius: 10px;
    font-size: 12px;
    font-weight: bold;
    color: #B1B1B1;
    &:hover{
        background-color: #22AFAF;
        color: #FFFFFF;
    }
`;