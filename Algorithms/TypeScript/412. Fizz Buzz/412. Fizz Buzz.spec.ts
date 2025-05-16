import { TestCase } from '../interface/testCase';
import { testFuntions } from './412. Fizz Buzz';

const testCases: TestCase[] = [
    {
        name: 'Example 1',
        input: 3,
        expectResult: ["1","2","Fizz"],
    },
    {
        name: 'Example 2',
        input: 5,
        expectResult: ["1","2","Fizz","4","Buzz"],
    },
    {
        name: 'Example 3',
        input: 15,
        expectResult: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"],
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
