import { useState } from "react";

export function useQuillInput() {
    const [quillValue, setQuillValue] = useState("");//함수안에서만 사용하는 경우 
    const onChange = (value) => {
        setQuillValue(() => value)
    }

    return [quillValue, onChange];
};

