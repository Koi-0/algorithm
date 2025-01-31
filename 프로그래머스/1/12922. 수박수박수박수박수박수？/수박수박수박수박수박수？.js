function solution(n) {
    let answer = "";

    for (let i = 1; i <= n; i++) {
        const postFix = i % 2 === 1 ? "수" : "박";
        answer += postFix;
    }

    return answer;
}