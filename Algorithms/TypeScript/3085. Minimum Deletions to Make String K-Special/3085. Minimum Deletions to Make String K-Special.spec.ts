import { TestCase, test_template } from '../interface/testCase';
import { get_random_integer } from '../interface/commonFuntions';
import { test_funtion_list, verify_function } from './3085. Minimum Deletions to Make String K-Special';

test_funtion_list.forEach((test_funtion) => {
    // default test case
    const test_case_list: TestCase[] = [
        {
            name: 'Example 1',
            inputs: ["aabcaba", 0],
            expect_result: 3,
        },
        {
            name: 'Example 2',
            inputs: ["dabdcbdcdcd", 2],
            expect_result: 2,
        },
        {
            name: 'Example 3',
            inputs: ["aaabaaa", 2],
            expect_result: 1,
        },
        {
            name: 'Example 659',
            inputs: ["qbbbbvbbbvqb", 0],
            expect_result: 4,
        },
    ];

    // init romdom test case
    if (verify_function !== undefined) {
        for (let i = 0; i < 0; ++i) {
            let inputs: any[] = [get_random_integer(0, 1)];
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
