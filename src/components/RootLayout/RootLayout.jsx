/** @jsxImportSource @emotion/react */
import * as S from"./style";
import React from 'react';
//시도 피드백 계속해보기
function RootLayout({children}) {
    return (
        <>
        <div css ={S.backGroundlayout}></div>
        <div css ={S.layout}>
            {children}
        </div>
        </>
    );

    
}

export default RootLayout;