import { TestCase } from '../interface/testCase';
import { testFuntions } from './1342. Number of Steps to Reduce a Number to Zero';

const testCases: TestCase[] = [
    {
        name: 'Example 1',
        input: 14,
        expectResult: 6,
    },
    {
        name: 'Example 2',
        input: 8,
        expectResult: 4,
    },
    {
        name: 'Example 3',
        input: 123,
        expectResult: 12,
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
