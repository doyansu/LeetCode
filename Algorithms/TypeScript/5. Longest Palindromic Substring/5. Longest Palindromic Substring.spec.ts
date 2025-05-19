import { TestCase, test_template } from '../interface/testCase';
import { test_funtions } from './5. Longest Palindromic Substring';

const testCases: TestCase[] = [
    {
        name: 'Example 1',
        inputs: ['babad'],
        expect_result: ('bab'),
    },
    {
        name: 'Example 2',
        inputs: ['cbbd'],
        expect_result: ('bb'),
    },
    {
        name: 'Example 3 only one char',
        inputs: ['c'],
        expect_result: ('c'),
    },
    {
        name: 'Example 4',
        inputs: ['abba'],
        expect_result: ('abba'),
    },
    {
        name: 'Example 5',
        inputs: ['ssssssssssssssssssssssssssssssssssssssss'],
        expect_result: ('ssssssssssssssssssssssssssssssssssssssss'),
    },
    {
        name: 'Example 6',
        inputs: ['babadabbasssssssssssssssssssssssssssssssssssssssscbbdbabadbabadbabadvbabadcccc'],
        expect_result: ('ssssssssssssssssssssssssssssssssssssssss'),
    },
    {
        name: 'Example 7',
        inputs: ['abb'],
        expect_result: ('bb'),
    },
    {
        name: 'Example 8',
        inputs: ['ccc'],
        expect_result: ('ccc'),
    },
    {
        name: 'Example 9',
        inputs: ['abacdfgdcaba'],
        expect_result: ('aba'),
    },
    {
        name: 'Example 10',
        inputs: ['abcba'],
        expect_result: ('abcba'),
    },
];

test_funtions.forEach((fnc) => {
    const template = test_template(fnc);
    testCases.forEach((testCase) => template(testCase));
});
