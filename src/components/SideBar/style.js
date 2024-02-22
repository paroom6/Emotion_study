
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// css값만 호출되면 되기에 함수화 할 수 있다.
export const layout = (isShow) => css`
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: ${isShow ? "0px" : "-300px"};
    border-right: 1px solid #dbdbdb;
    width: 300px;
    height: 100%;
    transition: left 0.5s ease-in-out;
    background-color: white;
    box-shadow: 1px 0px 3px #00000022;
`; 

export const toggleButton = css`
    box-sizing: border-box;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    right: -15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    padding: 0;
    width: 15px;
    height: 50px;
    background-color: white;
    cursor: pointer;
    &:hover {
        background-color: #eee;
    }
    &:active {
        background-color: #ccc; 
    }
`
export const menuItem = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    width: 100%;
    height: 50px;
    color: black;
    font-weight: 600;
    text-decoration: none;
    &:nth-of-type(1) {
        border-top: 1px solid #dbdbdb;
    }
    &:hover {
        background-color: #eee;
    }
    &:active {
        background-color: #ccc; 
    }

`