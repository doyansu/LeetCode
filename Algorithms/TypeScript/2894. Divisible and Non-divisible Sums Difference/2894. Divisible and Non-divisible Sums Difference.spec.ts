import { TestCase, test_template, test_template_verify_function } from '../interface/testCase';
import { test_funtions, verify_function } from './2894. Divisible and Non-divisible Sums Difference';

function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

test_funtions.forEach((fnc) => {
    const testCases: TestCase[] = [
        {
            name: 'Example 1',
            inputs: [10, 3],
            expect_result: 19,
        },
        {
            name: 'Example 2',
            inputs: [5, 6],
            expect_result: 15,
        },
        {
            name: 'Example 3',
            inputs: [5, 1],
            expect_result: -15,
        },
        {
            name: 'Example 4',
            inputs: [1, 1],
            expect_result: -1,
        },
        {
            name: 'Example 5',
            inputs: [1, 2],
            expect_result: 1,
        },
        {
            name: 'Example 6',
            inputs: [6, 2],
            expect_result: -3,
        },
        {
            name: 'Example 7',
            inputs: [100, 10],
            expect_result: 3950,
        },
        {
            name: 'Example 8',
            inputs: [15, 5],
            expect_result: 60,
        },
        {
            name: 'Example 9',
            inputs: [1000, 1],
            expect_result: -500500,
        },
        {
            name: 'Example 10',
            inputs: [1000, 999],
            expect_result: 498502,
        },
    ];

    const template = test_template(fnc);
    testCases.forEach((testCase) => template(testCase));

    for (let i = 0; i < 100; i++) {
        testCases.push({
            name: `Random Example ${i}`,
            inputs: [getRandomInt(1, 1000), getRandomInt(1, 1000)],
            expect_result: null,
        });
    }

    if (verify_function !== undefined) {
        const template_verify = test_template_verify_function(fnc, verify_function);
        testCases.forEach((testCase) => {
            template_verify(testCase);
        });
    }
});
