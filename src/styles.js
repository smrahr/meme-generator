import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #282a36;
  padding: 30px;
  display: flex;
  flex-direction: column;
  color: #8be9fd;
  margin: 0;
  font-family: sans-serif;
`;

export const Header = styled.h1`
  width: 100%;
  color: #8be9fd;
  margin: 0;
  padding: 0;
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

export const ImageContainer = styled.div`
  width: 48%;
  /* background-color: #bd93f9; */
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
export const ImageLabel = styled.label`
  font-size: 30px;
  color: #282a36;
  text-align: center;
  background-color: #bd93f9;
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ImgBox = styled.div`
  position: relative;
`;

export const Img = styled.img`
  width: 100%;
  object-fit: cover;
  &.outer {
    margin: 30px 0;
  }
`;

export const ImageInput = styled.input`
  opacity: 0;
  cursor: pointer;
`;

export const TopTitle = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  color: white;
  font-weight: bold;
  font-size: 20px;
`;

export const BottomTitle = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  color: white;
  font-weight: bold;
  font-size: 20px;
`;

export const ImageInfo = styled.div`
  color: #50fa7b;
  margin-top: 15px;
`;
export const ImageName = styled.div`
  padding: 5px 0;
  & > span {
    color: white;
  }
`;
export const ImageSize = styled.div`
  & > span {
    color: white;
  }
`;

export const InformationContainer = styled.div`
  width: 48%;
`;

export const InformationTitle = styled.h3`
  color: #ff79c6;
  font-size: 20px;
`;

export const TextInclude = styled.div`
  position: relative;
`;

export const IncludeInput = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  &:checked + label::after {
    background-color: #8be9fd;
    left: 20px;
  }

  &:disabled + label::after,
  &:disabled + label::before {
    cursor: not-allowed;
    opacity: 0.2;
  }
`;

export const IncludeLabel = styled.label`
  position: relative;
  padding-left: 60px;

  &:before {
    content: "";
    width: 40px;
    height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: white;
    border-radius: 20px;
  }
  &:after {
    content: "";
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #bbbabc;
    border-radius: 20px;
    transition: all 500ms;
  }
`;

export const Footer = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
`;
export const NewMemeButton = styled.button`
  color: #282a36;
  background-color: #8be9fd;
  margin-right: 10px;
  padding: 15px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 50px;
  height: 50px;
  transition: all 500ms;
  border: none;

  &:hover {
    color: white;
    background-color: #282a36;
    border: none;
    outline: none;
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background-color: #f1fa8c;
    color: #282a36;
  }
`;

export const ResetMemeButton = styled.button`
  color: #282a36;
  background-color: #f1fa8c;
  margin-left: 10px;
  padding: 15px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 50px;
  height: 50px;
  transition: all 500ms;
  border: none;

  &:hover {
    color: white;
    background-color: #282a36;
    border: none;
    outline: none;
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background-color: #f1fa8c;
    color: #282a36;
  }
`;
