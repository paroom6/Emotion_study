/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useRef, useState } from "react";
import { storage } from "../../configs/firebase/FirebaseConfig";
import { Line } from "rc-progress";
import { v4 as uuid } from "uuid"

const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const imageLayout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    border: 1px solid #dbdbdb;
    border-radius: 50%;
    width: 300px;
    height: 300px;
    overflow: hidden;
    & > img {
        width: 100%;
    }
`;


function ImageEx3(props) {
    const imgRef = useRef();
    const [oldFiles, setOldFiles] = useState([]);
    const [newFiles, setNewFiles] = useState([]);
    const idRef = useRef(0);
    useEffect(() => {
        setOldFiles(JSON.parse(localStorage.getItem("img"))?.length !== 0 ? JSON.parse(localStorage.getItem("img")) : []);
    },[])
    const handleImageChange = (e) => {//로컬스토리지 저장 + 프리뷰 
        const loadfiles = Array.from(e.target.files);
        console.log(e.target.files);
        if(loadfiles.length === 0) {
            return;
        }
        const promises = loadfiles.map(file => {
            new Promise(resolve =>  {
                const obj = {
                    id: idRef.current + 1,
                    originFile: file,
                    percent: 0,
                    url: ""
                }
                resolve (obj);
            });
        })
        
        Promise.all(promises).then(obj => {
            obj.map((file, index) => {
                const fileReader = new FileReader(); 
                console.log(file);
                let dataURL ="";
                fileReader.onload = (e) => {
                    dataURL = e.target.result
                }
                fileReader.readAsDataURL(file.originFile);
                setOldFiles([...oldFiles, {
                    ...file[index],
                    preview: dataURL
                }])
            })
        })
        localStorage.setItem("img",JSON.stringify(oldFiles));
    }
    
    return (
        <>
            <div css = {layout}>
                    {oldFiles?.map(file=> {
                        <div css = {imageLayout} key={file.id}>
                            return(<img src={file.preview} alt="" />)
                        </div>        
                    })}
                <div css = {imageLayout}>
                    <img src="" alt="" />
                    <input type="file" style={{display : "none"}} multiple = {true} ref = {imgRef} onChange={handleImageChange}/>
                </div>        
                    <button onClick={() => imgRef.current.click()}>불러오기</button>
            </div>
        </>
    );
}

export default ImageEx3;