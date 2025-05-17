import { TestCase, test_template } from '../interface/testCase';
import { test_funtions } from './383. Ransom Note';

const testCases: TestCase[] = [
    {
        name: 'Example 1',
        inputs: ['a', 'b'],
        expect_result: false,
    },
    {
        name: 'Example 2',
        inputs: ['aa', 'ab'],
        expect_result: false,
    },
    {
        name: 'Example 3',
        inputs: ['aa', 'aab'],
        expect_result: true,
    },
];

test_funtions.forEach((fnc) => {
    const template = test_template(fnc);
    testCases.forEach((testCase) => template(testCase));
});
