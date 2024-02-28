import { useState } from "react";

export function useInput() {
    const [inputValue, setInputValue] = useState("");//함수안에서만 사용하는 경우 
    const onChange = (e) => {
        const {value} = e.target;
            //useEffect ->최적화: memo callback
        setInputValue(() => value)
        //if문 안에 set을 넣는 경우 / set안에 조건문을 넣는 경우 -> setstate 함수를 자주호출하지 않는 편이 좋다.
        //값을 직접 참조하는 것을 선호하지 않음 function을 사용, 매개변수로 사용하는 편이다. useState최적화
        
    }

    return [inputValue, onChange];
};
/**
 * 
 * @param {*} maxSize 입력을 허용할 최대 숫자
 * @returns 
*/
export function useMaxValueValidataInput(maxSize) {
    const [inputValue, setInputValue] = useState("");
    const onChange = (e) => {
        const {value} = e.target;
        if(value.length < maxSize) {
            setInputValue(() => value)
        }
    }
    return [inputValue, onChange];
}