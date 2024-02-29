import BoardEX from "../pages/BoardEx/BoardEX";
import BoardList from "../pages/BoardList/BoardList";
import BoardWrite from "../pages/BoardWrite/BoardWrite";
import ImageEx from "../pages/ImageEx/ImageEx";
import ImageEx2 from "../pages/ImageEx2/ImageEx2";
import ImageEx3 from "../pages/ImageEx3/ImageEx4";
import Mypage from "../pages/Mypage/Mypage";

export const MENUS = [
    {
        id:1,
        path:"/mypage",
        name:"마이페이지",
        element: <Mypage/>
    },
    {
        id:2,
        path:"/board/ex",
        name:"게시글",
        element: <BoardEX/>
    },
    {
        id:3,
        path:"/notice",
        name:"공지사항",
        element: <>공지사항</>
    },
    {
        id:4,
        path:"/image/ex",
        name:"이미지 불러오기",
        element: <ImageEx/>
    },
    {
        id:5,
        path:"/image/ex2",
        name:"다중 업로드",
        element: <ImageEx2/>
    },
    {
        id:6,
        path:"/image/ex3",
        name:"다중 업로드 연습",
        element: <ImageEx3/>
    },
    {
        id:7,
        path:"/board/write/:title",
        name:"게시글 작성",
        params: {
            title: "테스트 글입니다."
        },
        element: <BoardWrite/>
    },
    {
        id:8,
        path:"/board/list/:page",
        params: {
            page: 1
        },
        name:"게시글 목록",
        element: <BoardList/>
    },
]
