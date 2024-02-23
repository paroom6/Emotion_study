/** @jsxImportSource @emotion/react */
import { FaCaretDown,FaCaretUp } from "react-icons/fa";
import * as S from "./style"
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
function TopSideBar(props) {
    const [isShow, setShow] = useState(false);
    const menus = useMemo(() => [
        {
            id:1,
            path:"/mypage",
            name:"마이페이지"
        },
        {
            id:2,
            path:"/board",
            name:"게시판"
        },
        {
            id:3,
            path:"/notice",
            name:"공지사항"
        },
    ])

    return (
        <aside css={S.layout(isShow)}>
            <ul css={S.itemContainer}>
                {menus.map(menu => <Link to={menu.path} key={menu.id} css={S.menuItem} onClick={() => setShow(!isShow)}><li>{menu.name}</li></Link>)}
            </ul>
            <button css={S.toggleButton} onClick={() => setShow(!isShow)}>
                    {isShow ? <FaCaretUp /> : < FaCaretDown/>}
            </button> 
        </aside>
    );

}

export default TopSideBar;