import { useState,useEffect } from "react";
import styled from "styled-components";
import {AiFillCaretDown,AiOutlineSearch} from 'react-icons/ai';

const symbols = [
    "All Symbols",
    "BTCUSD.PERP",
    "ETHUSD.PERP",
    "BCHUSD.PERP",
    "LTCUSD.PERP",
    "XRPUSD.PERP",
  ];

const Dropdown = () => {

    const [symbol, setSymbol] = useState(symbols[0]);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [filteredSymbols, setFilteredSymbols] = useState(symbols);

    const onClickBox = () => {
        setDropdownOpen(!isDropdownOpen);
        setSearchValue("");
        setFilteredSymbols(symbols);
    }
    
    useEffect(() => {
        setFilteredSymbols(symbols.filter(symbol => symbol.toLowerCase().includes(searchValue.toLowerCase())));
    }, [searchValue]);
    

    return (
        <div>
            <DropdownContainer>
                <DropdownBox onClick={onClickBox}>
                    <label>{symbol}</label>
                    <i><AiFillCaretDown/></i>
                </DropdownBox>
                {isDropdownOpen && (
                  <SymbolMenu>
                    <SearchBox>
                        <SearchIcon><AiOutlineSearch/></SearchIcon>
                        <SearchInput placeholder="Search Symbol" value={searchValue} 
                        onChange={(e) => {setSearchValue(e.target.value)}} autoFocus/>
                    </SearchBox>
                        {filteredSymbols.map((symbol, index) => (
                        <SymbolItem onClick={() => {setSymbol(symbol); setDropdownOpen(false); setSearchValue(""); 
                        setFilteredSymbols(symbols);}} key={index}>{symbol}</SymbolItem>
                        ))}
                  </SymbolMenu>
            )}
              </DropdownContainer>
        </div>
    );
};

export default Dropdown;

const DropdownContainer = styled.div`
    width: 300px;
    margin: 0 auto;
    padding: 8px;
    background-color: #F9F9F9 ;
`;

const DropdownBox = styled.div`
    width: 300px;
    height: 40px;
    border: 1px solid #d7d7d7;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    cursor: pointer;

    label {
        margin-left: 15px;
        font-size: 15px;
        font-weight: bold;
        color: #969696;
    }

    i {
        position: relative;
        top: 2px;
        right: 20px;
        color: #767676;
    }
`;

const SymbolMenu = styled.div`
  width: 300px;
  margin: 5px auto;
  border: 1px solid #d7d7d7;
  border-radius: 5px;
  background-color: #fff; 
`;

const SearchBox = styled.div`
    padding: 5px 10px;
    border-bottom: 1px solid #ddd;
    display: flex;
    align-items: center;
`;

const SearchInput = styled.input`
    display: block;
    width: 90%;
    border: 0;
    padding: 7px;
    outline: none;
    font-size: 15px;

    
        &::placeholder {
            font-size: 15px;
            color: #ababab;
        }
`;

const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ababab;
  font-size: 17px;
`;

const SymbolItem = styled.div`
  padding: 13px 25px;
  font-size: 15px;
  font-weight: bold;
  color: #969696;
  cursor: pointer;
  &:hover {
    background-color: #f3f3f3;
  }
`;