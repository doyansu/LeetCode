import { TestCase, test_template } from '../interface/testCase';
import { test_funtions } from './3. Longest Substring Without Repeating Characters';

const testCases: TestCase[] = [
    {
        name: 'Example 1',
        inputs: ['abcabcbb'],
        expect_result: (3),
    },
    {
        name: 'Example 2',
        inputs: ['bbbbb'],
        expect_result: (1),
    },
    {
        name: 'Example 3',
        inputs: ['pwwkew'],
        expect_result: (3),
    },
    {
        name: 'Example 4',
        inputs: ['dvavfgh'],
        expect_result: (5),
    },
    {
        name: 'Example 5 max length',
        inputs: ['aza (){}[]bcdefghijklmnopqrstuvwxyzazz'],
        expect_result: (33),
    },
    {
        name: 'Example 6 empty string',
        inputs: [''],
        expect_result: (0),
    },
    {
        name: 'Example 7 space',
        inputs: [' '],
        expect_result: (1),
    },
    {
        name: 'Example 8 special char',
        inputs: [' (){}[]adfa '],
        expect_result: (10),
    },
    {
        name: 'Example 9',
        inputs: ['dvdf'],
        expect_result: (3),
    },
    {
        name: 'Example 10',
        inputs: ['dvagzbafh'],
        expect_result: (6),
    },
    {
        name: 'Example 11',
        inputs: ['dvagzbafhcv'],
        expect_result: (8),
    },
    {
        name: 'Example 12',
        inputs: ['tmmzuxt'],
        expect_result: (5),
    },
    {
        name: 'Example 13',
        inputs: ['aabaab!bb'],
        expect_result: (3),
    },
];

test_funtions.forEach((fnc) => {
    const template = test_template(fnc);
    testCases.forEach((testCase) => template(testCase));
});
