import React from 'react';
import styled from "styled-components";
import Toggle from './components/Toggle';
import Tab from './components/Tab';
import Slider from './components/Slider';
import Input from './components/Input';
import Dropdown from './components/Dropdown';

const App = () => {
  return (
    <div>
      <A/>
      <Toggle/>
      <A/>
      <Tab/>
      <A/>
      <Slider/>
      <A/>
      <Input/>
      <A/>
      <Dropdown/>
    </div>
  );
};

const A = styled.div`
  margin-top: 30px;
`;

export default App;