function largerNum(num1, num2, num3) {
    let max = 0; // only 1 set of numbers allowed. 
    if (num1 > num2) {
        if (num1 > num3) {
            max = num1;
        } else {
            max = num3;
        }
    } else {
        if (num2 > num3) {
            max = num2;
        } else {
            max = num3;
        }
    }
    return max;
}
console.log(largerNum(25, 62, 15));


/* I called my function largerNum beacause it simple
and to the point. */