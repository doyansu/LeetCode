//  * Forward declaration of guess API.
//  * @param {number} num   your guess
//  * @return 	     -1 if num is higher than the picked number
//  *			      1 if num is lower than the picked number
//  *               otherwise return 0
//  * var guess = function(num) {}

let guess = (guess_number: number): number => 1 - guess_number;

function guessGame(n: number, pick: number) {
    guess = (guess_number: number): number => pick - guess_number;
    return guessNumber(n);
}

function guessNumber(n: number): number {
    let left = 1;
    let right = n;
    while (left < right) {
        let guess_number = (left + right) >>> 1;
        let guess_result = guess(guess_number);
        if (guess_result == 0)
            return guess_number;
        else if (guess_result > 0)
            left = guess_number + 1;
        else
            right = guess_number - 1;
    }

    return left;
};

export const test_funtion_list = [
    guessGame,
];

export const verify_function: any = undefined;
