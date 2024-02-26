/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useRef, useState } from 'react';
import { storage } from "../../configs/firebase/FirebaseConfig";
import { Line } from "rc-progress";
import { v4 as uuid } from "uuid";
const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const imageLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    border: 1px solid #dbdbdb;
    width: 300px;
    height: 300px;
    overflow: hidden;
    & > img {
        width: 100%;
    }
`
function ImageEx(props) {
    const [ uploadFiles,setUploadFiles ] = useState([]);
    const [urls, setUrls] = useState([]);
    const imgFileRef = useRef();
    const [preview, setPreview] = useState([]);
    const [progressPercent, setProgressPercent] = useState([]);
    useEffect(() => {
        setUrls(!localStorage.getItem("url") ? [] : JSON.parse(localStorage.getItem("url")));
    },[urls]);
    const imageChange = (e) => {
        const files = Array.from(e.target.files);//fileList는 일반적인 list 함수가 없기에 배열로 바꿔서 사용해야한다.
        if(e.target.files.length === 0) {
            imgFileRef.current.value ="";
            return;
        }
        setUploadFiles(files);
        let promises = [];
        promises = files.map(file => new Promise((resolve) => {//비동기 처리
            const fileReader = new FileReader();
            fileReader.onload = (e) => {//호출
                resolve(e.target.result);
            };
            fileReader.readAsDataURL(file);//호출시 
            }));
        console.log(e.target.files);
        // while(fileReader.readyState !== 2) {}//계속 1 onload 시 상태가 변경된다
        Promise.all(promises)//동기형태로 작동
        .then(result => {
            console.log(result);
            setPreview(result)
        })
        
    }
    const hadleImageUpload = () => {
        const files = uploadFiles; 
        console.log(files);
        let promises = [];
        promises = files.map(file => new Promise((resolve) => {//비동기 처리
            const storageRef = ref(storage, `files/test/${uuid()}_${file.name}`);
            const uploadTask =uploadBytesResumable(storageRef, file);
            uploadTask.on(
                "state_changed",
                (snapshot)=> {
                    setProgressPercent([...progressPercent, Math.round((snapshot.bytesTransferred / snapshot.totalBytes)*100)])
                }, 
                (error)=> {
                }, 
               resolve(storageRef)
            )
            
        }));
        Promise.all(promises)//동기형태로 작동
        .then(result => {
            getDownloadURL(result).then(url => {
                setUrls([...urls, url]);
                localStorage.setItem(JSON.stringify(urls));
                setPreview([]);
            })
            alert("업로드 완료")  
        })
        

        
    }
    return (
        <div css={layout}>
            {urls.map (url =>
                <div css={imageLayout}>
                    <img src={url} alt="" />
                </div>
            )}
            {preview.map((preview, index) => 
                <>
                    <div key={index} css={imageLayout}>
                        <img src={preview} alt="" />
                    </div>
                    <Line percent={progressPercent} strokeWidth={4} strokeColor={"#22222"}/>
                </>
            )}
            <input type="file" style={{display: "none"}} ref={imgFileRef} onChange={imageChange} multiple={true}/>
            <button onClick={() => imgFileRef.current.click()}>이미지 불러오기</button>
            <button onClick={hadleImageUpload}>이미지 업로드</button>
        </div>
    );
}

export default ImageEx;