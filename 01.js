// 코딩테스트 입문 //

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 1. 두 수의 차

function solution(num1, num2) {
    answer = num1 - num2;
    return answer;
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 2. 두 수의 곱

function solution(num1, num2) {
    return num1 * num2;
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 3. 몫 구하기

function solution(num1, num2) {
    let answer = parseInt(num1 / num2);
    return answer;
}

// Number() : 전체 숫자 출력
// parseInt() : 소수점은 버리고 정수만 출력
// parseFloat() : 소수점 전부를 살린 실수 출력

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 4. 나이 출력

function solution(age) {
    let answer = 2022 - age + 1;
    return answer;
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 5. 숫자 비교하기

function solution(num1, num2) {
    let answer = num1 === num2 ? 1 : -1;
    return answer;
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 6. 두 수의 합

function solution(num1, num2) {
    let answer = num1 + num2;
    return answer;
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 7. 두 수의 나눗셈

function solution(num1, num2) {
    let answer = parseInt((num1 / num2) * 1000);
    return answer;
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 8. 각도기

function solution(angle) {
    let answer = 0;
    if (angle > 0 && angle < 90) {
        answer = 1;
    } else if (angle === 90) {
        answer = 2;
    } else if (angle > 90 && angle < 180) {
        answer = 3;
    } else if (angle === 180) {
        answer = 4;
    }
    return answer;
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// 9. 짝수의 합

function solution(n) {
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            answer += i;
        }
    }
    return answer;
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //
