import React, { useEffect, useMemo, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ReactQuill from "react-quill";
import { QUILL_MODULES } from '../../constants/quillModules';
import { useInput, useMaxValueValidataInput } from '../../Hooks/inputHook';
import { useQuillInput } from '../../Hooks/quillHook';
import { useNavigate } from 'react-router-dom';
import { useLoadList } from '../../Hooks/boardList';

const layout = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px 120px;
    border: 1px solid #dbdbdb;
    /* height: 800px; */
`
const headerTitle = css`
    margin: 30px;
    text-align: center;
    font-size: 40px;
    font-weight: 700;
`
const boardTitle = css`
    box-sizing: border-box;
    margin-bottom: 10px;
    outline: none;
    border: 1px solid #ccc;
    padding: 10px;
    width: 90%;
`

const submitButton = css`
    box-sizing: border-box;
    margin-top: 50px;
    margin-bottom: 30px;
    border: 1px solid #ccc;
    padding: 10px;
    width: 90%;
    background-color: white;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        background-color: #fafafa;
    }
    &:active {
        background-color: #eee;
    } 
`

function BoardWrite(props) {
    const boardIdRef = useRef(0);
    const navigate = useNavigate();
    const [board, setBoard] = useState({//use로 사용하는 경우 reacthook이다
        boardId: 0,
        boardTitle: "",
        boardContent: ""
    });
    const [inputValue, handleInputChange] = useMaxValueValidataInput(20); 
    const [quillValue, handleQuillValueChange] = useQuillInput();
    const {boardList, lastId} = useLoadList();
    useEffect(()=> {

    })
    

    const handleSubmitClick = () => {
        const board = ({
            boardId: lastId + 1,
            boardTitle: inputValue,
            boardContent: quillValue
        });
        const newBoardList = [...boardList, board];
        localStorage.setItem("boardList", JSON.stringify(newBoardList));
        alert("글 작성 완료")
        // window.location.replace() react 에서는 사용할 시 app부터 재랜더링 
        navigate("/board/list");
    }

    return (
        <div css={layout}>
            <h1 css={headerTitle}>글 작성하기</h1>
            <input type="text" css={boardTitle} placeholder='제목을 입력하세요' onChange={handleInputChange} value={inputValue}/>
            <ReactQuill style={{
                width:"90%",
                height:"400px"
            }} modules={QUILL_MODULES}
            onChange={handleQuillValueChange}
            />
            <button css={submitButton} onClick={handleSubmitClick}>작성하기</button>
        </div>
    );
}

export default BoardWrite;