import { Route, Routes } from "react-router-dom";
import { Reset } from "styled-reset";
import SideBar from "./components/SideBar/SideBar";
import TopSideBar from "./components/TopSideBar/TopSideBar";
import RootLayout from "./components/RootLayout/RootLayout";
import Mypage from "./pages/Mypage/Mypage";


function App() {
  return (

    <>
    <Reset />
    <SideBar/>
    <TopSideBar/>
    <RootLayout>
     <Routes>
        <Route path="/mypage" element={<Mypage/>}/> 
        <Route path="/board" element={<>게시판</>}/>
        <Route path="/notice" element={<>공지사항</>}/>
      </Routes>
    </RootLayout>
  </>
)
}

export default App;
