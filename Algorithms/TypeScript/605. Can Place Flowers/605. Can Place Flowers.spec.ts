import { TestCase, test_template, test_template_verify_function } from '../interface/testCase';
import { test_funtion_list, verify_function } from './605. Can Place Flowers';

test_funtion_list.forEach((fnc) => {
    const test_case_list: TestCase[] = [
        {
            name: 'Example 1',
            inputs: [[1,0,0,0,1], 1],
            expect_result: true,
        },
        {
            name: 'Example 2',
            inputs: [[1,0,0,0,1], 2],
            expect_result: false,
        },
        {
            name: 'Example 3',
            inputs: [[1,0,0,0,0], 2],
            expect_result: true,
        },
        {
            name: 'Example 4',
            inputs: [[0,0,0,0,0], 4],
            expect_result: false,
        },
        {
            name: 'Example 5',
            inputs: [[1,0,1,0,1,0,1], 0],
            expect_result: true,
        },
        {
            name: 'Example 6',
            inputs: [[0,0,0,0,0,1,0,0], 0],
            expect_result: true,
        },
    ];

    const template = test_template(fnc);
    const template_verify = test_template_verify_function(fnc, verify_function);
    
    test_case_list.forEach((testCase) => template(testCase));

    if (verify_function !== undefined) {
        test_case_list.forEach((testCase) => template_verify(testCase));
    }
});
