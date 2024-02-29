/** @jsxImportSource @emotion/react */
import { FaCaretRight, FaCaretLeft} from "react-icons/fa";
import * as S from "./style";
import {  useState } from "react";
import { Link } from "react-router-dom";
import { MENUS } from "../../constants/menu";


function SideBar(props) {
    const [isShow, setShow] = useState(false);


    return (
        <aside css={S.layout(isShow)}>
            <button css={S.toggleButton} onClick={() => setShow(!isShow)}>
                {isShow ? <FaCaretLeft /> : <FaCaretRight />}
            </button> 
            <ul>
                {MENUS.map(menu => <Link to={`${menu.path}${!menu.params ? "" :"?" + Object.entries(menu.params).map(([key,value]) => key + "=" +value).join("&")}`} key={menu.id} css={S.menuItem} onClick={() => setShow(!isShow)}><li>{menu.name}</li></Link>)}
            </ul>
        </aside>
    );

}

export default SideBar;