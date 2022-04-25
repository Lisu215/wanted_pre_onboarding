import React, { useState } from 'react';
import styled from "styled-components";

const Tab = () => {

    const items = ["감자", "고구마", "카레라이스"];
    const [isTab, setTab] = useState(items[0]);

    return (
        <TabContainer>
            {items.map((item, index) => {
                return (
                    <TabItem key={index} onClick={() => setTab(item)} isTab={isTab === item}>{item}</TabItem>
                )
            })}
            <ActiveBar isTab={isTab}/>
        </TabContainer>
    );
};

export default Tab;

const TabContainer = styled.div`
    width: 450px;
    display: flex;
    margin: 0 auto;
    padding: 3px;
`;

const TabItem = styled.div`
    width: 200px;
    height: 35px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    border-bottom: 2px solid #eee;
    color: ${props => props.isTab ? "" : "#767676"};
    cursor: pointer;
`;

const ActiveBar = styled.div`
    width: 150px;
    height: 2px;
    margin: 35px 0;
    position: absolute;
    background-color: #22AFAF;
    transition: 0.2s;
    transform: ${props => props.isTab === '감자' ? "" : (props.isTab === '고구마' ? "translatex(150px)" : "translatex(300px)")};
`;