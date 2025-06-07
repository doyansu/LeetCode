import { TestCase, test_template } from '../interface/testCase';
import { get_random_integer, get_random_string } from '../interface/commonFuntions';
import { test_funtion_list, verify_function } from './1456. Maximum Number of Vowels in a Substring of Given Length';

test_funtion_list.forEach((test_funtion) => {
    // default test case
    const test_case_list: TestCase[] = [
        {
            name: 'Example 1',
            inputs: ["abciiidef", 3],
            expect_result: 3,
        },
        {
            name: 'Example 2',
            inputs: ["aeiou", 2],
            expect_result: 2,
        },
        {
            name: 'Example 3',
            inputs: ["leetcode", 3],
            expect_result: 2,
        },
    ];

    // init romdom test case
    if (verify_function !== undefined) {
        for (let i = 0; i < 10; ++i) {
            let length = get_random_integer(1, 100000);
            let inputs: any[] = [get_random_string(length), get_random_integer(1, length)];
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
