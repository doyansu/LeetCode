function maximumWealth(accounts: number[][]): number {
    let max: number = 0;
    accounts.forEach((account) => {
        let sum = account.reduce((sum, cur) => sum + cur);
        max = Math.max(max, sum);
    });
    return max;
};

function maximumWealth1(accounts: number[][]): number {
    let max: number = 0;
    accounts.forEach((account) => {
        max = Math.max(max, account.reduce((sum, cur) => sum + cur));
    });
    return max;
};

function maximumWealth2(accounts: number[][]): number {
    return accounts.reduce((max, currentAccount) => {
        return Math.max(max, currentAccount.reduce((sum, cur) => sum + cur));
    }, 0);
};

export const testFuntions = [ 
    maximumWealth, 
    maximumWealth1, 
    maximumWealth2,
];