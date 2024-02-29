import React from 'react';
//함수 자체에서 export 하면 이 파일을 대표하지 않는다.
export function CoponentStudy({a, b}) {//컴포넌트의 경우 props 객체로 들여온다 보통 비구조 할당으로 원하는 키값을 사용한다. 이 경우 양방향에 자동완성이 뜬다
    /**
     * props{
     *  a: 10,
     *  b: 20
     * }
     * window: html dom에 대한 직접접근하기에 전체 렌더링이 발생하기에 지양한다. 
     **/
    //직접 root에 작성하지 않고 컴포넌트로 빼서 사용 App도 컴포넌트의 일종
    //기능의 집합: 재사용을 용이하게 하기위해 -> 매개변수와 리턴을 이해하는 것이 좋다.
    //기능별로 묶기 - 응집도를 높힌다.
    //결합도: 함수사이의 의존성에 관한 개념
    return (//컴포넌트는 jsx의 html 태그를 리턴한다.
        //상태관리 useState
        //마운트관리 useEffect -> useMemo, useCallBack
        <div>
            {a}///{b}
        </div>
    );
}

export default CoponentStudy; //이 함수가 이 파일을 대표한다. import 한 변수의 이름 변경이 가능하다.