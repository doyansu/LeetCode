import { TestCase, test_template } from '../interface/testCase';
import { test_funtions } from './1768. Merge Strings Alternately';

const testCases: TestCase[] = [
    {
        name: 'Example 1',
        inputs: ["abc", "pqr"],
        expect_result: ("apbqcr"),
    },
    {
        name: 'Example 2',
        inputs: ["ab", "pqrs"],
        expect_result: ("apbqrs"),
    },
    {
        name: 'Example 3',
        inputs: ["abcd", "pq"],
        expect_result: ("apbqcd"),
    },
];

test_funtions.forEach((fnc) => {
    const template = test_template(fnc);
    testCases.forEach((testCase) => template(testCase));
});
