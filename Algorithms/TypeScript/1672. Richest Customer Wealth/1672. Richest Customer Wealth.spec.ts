import { TestCase, test_template } from '../interface/testCase';
import { testFuntions } from './1672. Richest Customer Wealth';

const testCases: TestCase[] = [
    {
        name: 'Example 1',
        inputs: [[[1,2,3],[3,2,1]]],
        expect_result: 6,
    },
    {
        name: 'Example 2',
        inputs: [[[1,5],[7,3],[3,5]]],
        expect_result: 10,
    },
    {
        name: 'Example 3',
        inputs: [[[2,8,7],[7,1,3],[1,9,5]]],
        expect_result: 17,
    },
];

testFuntions.forEach((fnc) => {
    const template = test_template(fnc);
    testCases.forEach((testCase) => template(testCase));
});
