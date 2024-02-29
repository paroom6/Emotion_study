import { useMemo } from "react";

export function useLoadList() {
    const boardList = useMemo(() => {
        const lsBoardList = localStorage.getItem("boardList");
        return !lsBoardList ? [] : JSON.parse(lsBoardList);
    },[]);
    const lastIndex = boardList.length - 1;
    const firstId = lastIndex < 0 ? 0 :boardList[0].boardId;
    const lastId = lastIndex < 0 ? 0 :boardList[lastIndex].boardId;
    const size = boardList.length;
    return {boardList,size,firstId,lastId}
}

export function useLoadListByPageNumber(page) {
    const pageNumber = parseInt(page);
    console.log(page);
    const loadBoardList = useMemo(() => {
        let lsBoardList = localStorage.getItem("boardList");
        return lsBoardList = !lsBoardList ? [] : JSON.parse(lsBoardList);
         
    },[page]);//검색시 계속 렌더링되기에 pageNumber를 기준으로만 렌더링
    const boardList = loadBoardList.filter((board, index)=>  pageNumber * 10 - 11 < index && index < pageNumber * 10);
    const lastIndex = boardList.length - 1;
    const size = loadBoardList.length; 
    const totalPageCount = Math.floor(size % 10 === 0 ? size / 10 : size / 10 + 1);
    const startPageNumber1 = ((pageNumber - 1) / 5) * 5 + 1;
    const startPageNumber = pageNumber % 5 === 0 ? pageNumber - 4 : (pageNumber - (pageNumber % 5)) + 1; 
    const endPageNumber = startPageNumber + 4 <= totalPageCount ? startPageNumber + 4 : totalPageCount;
    let pageNumbers = useMemo(() => {
        let newPageNumbers = [];
        for (let i = startPageNumber; i <= endPageNumber; i++) {
            newPageNumbers = [...newPageNumbers, i]; 
        }  
        return newPageNumbers;
    }, [startPageNumber]);
    return {boardList,size,pageNumbers, totalPageCount,startPageNumber, endPageNumber}
}