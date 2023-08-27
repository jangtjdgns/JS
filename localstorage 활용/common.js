
function isEmpty(val) {         // 공백 검사를 위한 isEmpty 함수 선언

    // null, undefined
    if(val === null || val === undefined){              // 만약 매개변수 val의 값과 타입이 null 이거나, undefined 일 시
        return true;                                    // true 리턴
    }

    // String (문자열)
    if (typeof val === "string" && val.length == 0) {     // 만약 val type이 String 이면서 val 값의 길이가 0 일 시
        return true;                                    // true 리턴
    }

    // array (배열)
    if(typeof val === "object" && val.length == 0){     // 만약 val type이 Object 이면서 배열의 길이가 0 일 시
        return true;                                    // true 리턴
    }

    // object (객체)
    if (typeof val === "object" && Object.keys(val).length == 0) {   // 만약 val type이 Object 이면서 객체 속성의 길이가 0일 시
        return true;                                                 // true 리턴
    }

    return false;                                        // 전부 아닐 시 false 리턴
}
