import { TestCase, test_template } from '../interface/testCase';
import { test_funtions } from './3024. Type of Triangle';

const testCases: TestCase[] = [
    {
        name: 'Example 1',
        inputs: [[3,3,3]],
        expect_result: ('equilateral'),
    },
    {
        name: 'Example 2',
        inputs: [[3,4,5]],
        expect_result: ('scalene'),
    },
    {
        name: 'Example 3',
        inputs: [[5, 5, 8]],
        expect_result: ('isosceles'),
    },
    {
        name: 'Example 4',
        inputs: [[2, 2, 4]],
        expect_result: ('none'),
    },
    {
        name: 'Example 5',
        inputs: [[10, 10, 10]],
        expect_result: ('equilateral'),
    },
    {
        name: 'Example 6',
        inputs: [[1, 2, 3]],
        expect_result: ('none'),
    },
    {
        name: 'Example 7',
        inputs: [[5, 5, 8]],
        expect_result: ('isosceles'),
    },
    {
        name: 'Example 8',
        inputs: [[8, 5, 5]],
        expect_result: ('isosceles'),
    },
    {
        name: 'Example 9',
        inputs: [[9,4,9]],
        expect_result: ('isosceles'),
    },
    {
        name: 'Example 10',
        inputs: [[10,4,6]],
        expect_result: ('none'),
    },
];

test_funtions.forEach((fnc) => {
    const template = test_template(fnc);
    testCases.forEach((testCase) => template(testCase));
});
