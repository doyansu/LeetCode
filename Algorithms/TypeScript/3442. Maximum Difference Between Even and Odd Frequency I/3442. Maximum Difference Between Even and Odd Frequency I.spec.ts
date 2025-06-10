import { TestCase, test_template } from '../interface/testCase';
import { get_random_integer, get_random_string } from '../interface/commonFuntions';
import { test_funtion_list, verify_function } from './3442. Maximum Difference Between Even and Odd Frequency I';

test_funtion_list.forEach((test_funtion) => {
    // default test case
    const test_case_list: TestCase[] = [
        {
            name: 'Example 1',
            inputs: ['aaaaabbc'],
            expect_result: 3,
        },
        {
            name: 'Example 2',
            inputs: ['abcabcab'],
            expect_result: 1,
        },
        {
            name: 'Example 3',
            inputs: ['abcabcabc'],
            expect_result: 3,
        },
        {
            name: 'Example 4',
            inputs: ['a'],
            expect_result: 1,
        },
        {
            name: 'Example 5',
            inputs: ['aa'],
            expect_result: -2,
        },
        {
            name: 'Example 6',
            inputs: ['aaaaaaaaaaaaaaa'],
            expect_result: 15,
        },
        {
            name: 'Example 7',
            inputs: ['fljsjhaklghhwoiegngansgljjsjjjjjjjajj;kd;jajf;afffffffaajvbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'],
            expect_result: 7,
        },
        {
            name: 'Example 8',
            inputs: ['tzt'],
            expect_result: -1,
        },
    ];

    // init romdom test case
    if (verify_function !== undefined) {
        for (let i = 0; i < 0; ++i) {
            let n = get_random_integer(3, 100)
            let inputs: any[] = [get_random_string(n)];
            let random_test_case: TestCase = {
                name: `Random Example ${i}`,
                inputs: inputs,
                expect_result: verify_function(...inputs),
            };
            test_case_list.push(random_test_case);
        }
    }

    // start test
    const template = test_template(test_funtion);
    test_case_list.forEach((test_case) => template(test_case));
});
