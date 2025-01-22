function solution(numbers) {
    const totalSum = 45;
    const numbersSum = numbers.reduce((acc, cur) => acc + cur, 0);
    return totalSum - numbersSum;
}