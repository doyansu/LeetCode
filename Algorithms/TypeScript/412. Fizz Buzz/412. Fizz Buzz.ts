function fizzBuzz(n: number): string[] { // 68ms
    
    let result : string[] = Array.from({length: n}, (_, i) => i + 1).map((number) => {
        let FizzBuzz : string;
        if (number % 15 == 0)
            FizzBuzz = "FizzBuzz";
        else if (number % 3 == 0)
            FizzBuzz = "Fizz";
        else if (number % 5 == 0)
            FizzBuzz = "Buzz";
        else
            FizzBuzz = number.toString();
        return FizzBuzz;
    });
    return result;
};

function fizzBuzz1(n: number): string[] {
    let result : string[] = Array.from({length: n}, (_, i) => i + 1).map((number) => {
        let FizzBuzz : string = '';
        if (number % 3 == 0)
            FizzBuzz += "Fizz";
        if (number % 5 == 0)
            FizzBuzz += "Buzz";
        return FizzBuzz == '' ? number.toString() : FizzBuzz;
    });
    return result;
};

function fizzBuzz2(n: number): string[] { // 66ms
    let result: string[] = Array(n);
    for(let i = 1; i <= n; i++){
        let temp = "";
        if(i % 3 == 0) temp = "Fizz";
        if(i % 5 == 0) temp += "Buzz";
        result[i-1] = temp === "" ? i.toString() : temp;
    }
    return result;
};

export const testFuntions = [ 
    fizzBuzz, 
    fizzBuzz1,
    fizzBuzz2,
];