import { TestCase, test_template } from '../interface/testCase';
import { test_funtions } from './9. Palindrome Number';

const testCases: TestCase[] = [
    {
        name: 'Example 1',
        inputs: [121],
        expect_result: (true),
    },
    {
        name: 'Example 2',
        inputs: [-121],
        expect_result: (false),
    },
    {
        name: 'Example 3',
        inputs: [10],
        expect_result: (false),
    },
];

test_funtions.forEach((fnc) => {
    const template = test_template(fnc);
    testCases.forEach((testCase) => template(testCase));
});
