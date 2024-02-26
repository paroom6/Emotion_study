import { Route, Routes } from "react-router-dom";
import { Reset } from "styled-reset";
import SideBar from "./components/SideBar/SideBar";
import TopSideBar from "./components/TopSideBar/TopSideBar";
import RootLayout from "./components/RootLayout/RootLayout";
import Mypage from "./pages/Mypage/Mypage";
import { MENUS } from "./constants/menu";


function App() {
  return (

    <>
    <Reset />
    <SideBar/>
    <TopSideBar/>
    <RootLayout>
     <Routes>
        {MENUS.map(menu => <Route path={menu.path} element={menu.element} key={menu.id}/>)}
      </Routes>
    </RootLayout>
  </>
)
}

export default App;
