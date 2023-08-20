import { TestCase } from '../interface/testCase';
import { testFuntions } from './1672. Richest Customer Wealth';

const testCases: TestCase[] = [
    {
        name: 'Example 1',
        input: [[1,2,3],[3,2,1]],
        expectResult: 6,
    },
    {
        name: 'Example 2',
        input: [[1,5],[7,3],[3,5]],
        expectResult: 10,
    },
    {
        name: 'Example 3',
        input: [[2,8,7],[7,1,3],[1,9,5]],
        expectResult: 17,
    },
];

const testTemplate = (fnc: any) => (testCase: TestCase) => {
    const caseName = `${testCase.name} use ${fnc.name}`;
    test(caseName, () => {
        const actualResult = fnc(testCase.input);
        expect(actualResult).toEqual(testCase.expectResult);
    });
};

testFuntions.forEach((fnc) => {
    const template = testTemplate(fnc);
    testCases.forEach((testCase) => template(testCase));
});
