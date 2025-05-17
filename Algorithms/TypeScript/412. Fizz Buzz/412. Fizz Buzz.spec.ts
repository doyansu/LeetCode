import { TestCase, test_template } from '../interface/testCase';
import { testFuntions } from './412. Fizz Buzz';

const testCases: TestCase[] = [
    {
        name: 'Example 1',
        inputs: [3],
        expect_result: ["1","2","Fizz"],
    },
    {
        name: 'Example 2',
        inputs: [5],
        expect_result: ["1","2","Fizz","4","Buzz"],
    },
    {
        name: 'Example 3',
        inputs: [15],
        expect_result: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"],
    },
];

testFuntions.forEach((fnc) => {
    const template = test_template(fnc);
    testCases.forEach((testCase) => template(testCase));
});
