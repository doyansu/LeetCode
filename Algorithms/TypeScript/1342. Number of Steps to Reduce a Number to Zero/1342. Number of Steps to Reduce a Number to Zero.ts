function numberOfSteps(num: number): number {
    let result = 0;
    while(num > 0){
        if(num&1){
            result++;
            if(num == 1)
            break;
        }
        num >>>= 1;
        result++;
    }
    return result;
};

function lowbit(x: number): number {
    return x & -x;
}

function numberOfSteps1(num: number): number {
    let result = 0;
    let lowbitT = 0;
    while(num > 0){
        lowbitT = lowbit(num);
        num &= ~lowbitT;
        result++;
    }
    while((lowbitT >>>= 1) > 0)
        result++;
    return result;
}


export const testFuntions = [ 
    numberOfSteps, 
    numberOfSteps1,
];