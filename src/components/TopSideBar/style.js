
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// css값만 호출되면 되기에 함수화 할 수 있다.

export const toggleButton = css`
    box-sizing: border-box;
    position: absolute;
    /* transform: translateY(100%);  */
    bottom: -14PX;
    right: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    padding: 0;
    width: 50px;
    height: 15px;
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
    margin-right: 20px;
    border: 1px solid #dbdbdb;
    width: 200px;
    height: 40px;
    color: black;
    font-weight: 600;
    text-decoration: none;
    &:hover {
        background-color: #eee;
    }
    &:active {
        background-color: #ccc; 
    }
`
export const itemContainer = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    width: 100%;
    height: 100%;
`

export const layout = (isShow) => css`
    z-index: 99;
    box-sizing: border-box;
    position: fixed;
    top: ${isShow ? "0px" : "-80px"};
    right: 0px;
    border-right: 1px solid #dbdbdb;
    width: 50%;
    height: 80px;
    transition: top 0.5s ease-in-out;
    background-color: white;
    box-shadow: -1px 1px 3px #00000022;
`

