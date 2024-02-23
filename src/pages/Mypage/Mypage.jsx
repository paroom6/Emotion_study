/** @jsxImportSource @emotion/react */
import * as S from"./style";
import React, { useRef, useState } from 'react';
import logo512 from "./logo512.png";

//이미지-클라우드
function Mypage(props) {
    const [preview, setpreview] = useState("");
    const imgFileRef = useRef();
    const handleImgfileChange = (e) => {
        if(e.target.files.length === 0) {
            return;
        }
        const fileReader = new FileReader();
        console.log(e.target.files);
        fileReader.onload = (e) => {//호출
            setpreview(e.target.result);
        };
        fileReader.readAsDataURL(e.target.files[0]);//호출시
        
    }
    return (
        <>
        <div css={S.layout}>
            <div css={S.profileHeader}>
                <h1 css={S.title}>마이페이지</h1>
                <div css={S.profileImg} onClick={() => imgFileRef.current.click()}>
                    <img src= {preview} alt="" />
                    <input type="file" style={{display: "none"}} ref={imgFileRef} onChange={handleImgfileChange}/>
                </div>
                <div css={S.nicknamelayout}>
                    <input css={S.nickname} type="text" maxLength={20} />
                </div>
            </div>
        <div css={S.profileInputLayout}>
            <div css={S.inputBox}>
                <input css={S.profileInput} id="name" type="text" placeholder=" "/>
                <label htmlFor="name">성명</label>
            </div>
            <div css={S.inputBox}>
                <input css={S.profileInput} id="birth" type="text" placeholder=" "/>
                <label htmlFor="birth">생년월일</label>
            </div>
            <div css={S.inputBox}>
                <input css={S.profileInput} id="phone" type="text" placeholder=" "/>
                <label htmlFor="phone">연락처</label>
            </div>
            <div css={S.inputBox}>
                <input css={S.profileInput} id="address" type="text" placeholder=" "/>
                <label htmlFor="address">주소</label>
            </div>
            
        </div>
        <div css={S.buttonLayout}>
            <button css={S.profileButton}>수정하기</button>
        </div>
        </div>
        </>
    );
}

export default Mypage;