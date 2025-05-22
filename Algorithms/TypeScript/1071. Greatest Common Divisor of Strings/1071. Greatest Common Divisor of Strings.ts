function gcd(n1: number, n2: number): number  {
    return (n1 % n2) ? gcd(n2, n1 % n2) : n2;
}

function gcdOfStrings(str1: string, str2: string): string {
    if (str1.length < str2.length)
        [str1, str2] = [str2, str1];
    let gcd_length = gcd(str1.length, str2.length);
    for (let factor = gcd_length; factor > 0; --factor) {
        if (gcd_length % factor == 0) {
            let i;
            for(i = factor; i < str2.length; i += factor){
                if(str2.substring(0, factor) != str2.substring(i, i + factor))
                    break;
            }
            if(i != str2.length)
                continue;
            for(i = 0; i < str1.length; i += factor){
                if(str2.substring(0, factor) != str1.substring(i, i + factor))
                    break;
            }
            if(i == str1.length){
                return str2.substring(0, factor);
            }
        }
    }
    return '';
};

function gcdOfStrings1(str1: string, str2: string): string {
    if (str1 + str2 != str2 + str1)
        return '';
    return str1.substring(0, gcd(str1.length, str2.length));
};

export const test_funtions = [
    gcdOfStrings,
    gcdOfStrings1,
];
