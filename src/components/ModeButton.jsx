import React, { useState } from "react";
import styled from "styled-components";

const ModeButton = ({ size =1.5, setDarkMode, darkMode }) => {
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    // document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <Wrapper size={size}>
      <Label size={size}>
        <Input type="checkbox" onChange={toggleTheme} checked={darkMode} />
        <Slider size={size} />
        <Icons size={size}>
          <SunIcon size={size}>☀️</SunIcon>
          <MoonIcon size={size}>🌙</MoonIcon>
        </Icons>
      </Label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  
`;

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: ${(props) => props.size * 3}em;
  height: ${(props) => props.size * 1.5}em;
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: ${(props) => props.size * 2}em;
  transition: 0.4s;
  
  &::before {
    position: absolute;
    content: "";
    height: ${(props) => props.size * 1.2}em;
    width: ${(props) => props.size * 1.2}em;
    left: ${(props) => props.size * 0.15}em;
    bottom: ${(props) => props.size * 0.15}em;
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: ${(props) => props.size * 0.2}em;
  pointer-events: none;
`;

const SunIcon = styled.div`
  color: #f39c12;
  font-size: ${(props) => props.size * 0.8}em;
`;

const MoonIcon = styled.div`
  color: #f1c40f;
  font-size: ${(props) => props.size * 0.8}em;
  transform: rotate(30deg);
`;

// CSS for dark-mode
document.body.classList.add("light-mode");
document.body.style.transition = "background-color 0.5s ease";

export default ModeButton;
