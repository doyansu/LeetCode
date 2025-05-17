import { TestCase, test_template } from '../interface/testCase';
import { testFuntions } from './1342. Number of Steps to Reduce a Number to Zero';

const testCases: TestCase[] = [
    {
        name: 'Example 1',
        inputs: [14],
        expect_result: 6,
    },
    {
        name: 'Example 2',
        inputs: [8],
        expect_result: 4,
    },
    {
        name: 'Example 3',
        inputs: [123],
        expect_result: 12,
    },
];

testFuntions.forEach((fnc) => {
    const template = test_template(fnc);
    testCases.forEach((testCase) => template(testCase));
});
