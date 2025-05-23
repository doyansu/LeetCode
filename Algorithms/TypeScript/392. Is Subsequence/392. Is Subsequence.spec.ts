import { TestCase, test_template } from '../interface/testCase';
import { test_funtions } from './392. Is Subsequence';

test_funtions.forEach((fnc) => {
    const testCases: TestCase[] = [
        {
            name: 'Example 1',
            inputs: ["abc", "ahbgdc"],
            expect_result: true,
        },
        {
            name: 'Example 2',
            inputs: ["axc", "ahbgdc"],
            expect_result: false,
        },
        {
            name: 'Example 3',
            inputs: ["", ""],
            expect_result: true,
        },
        {
            name: 'Example 4',
            inputs: ["aaaaaa", "bbaaaa"],
            expect_result: false,
        },
    ];

    const template = test_template(fnc);
    testCases.forEach((testCase) => template(testCase));
});
