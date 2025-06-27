import { TestCase, test_template } from '../interface/testCase';
import { get_random_integer } from '../interface/commonFuntions';
import { test_funtion_list, verify_function } from './1657. Determine if Two Strings Are Close';

test_funtion_list.forEach((test_funtion) => {
    // default test case
    const test_case_list: TestCase[] = [
        {
            name: 'Example 1',
            inputs: ["abc", "bca"],
            expect_result: true,
        },
        {
            name: 'Example 2',
            inputs: ["a", "aa"],
            expect_result: false,
        },
        {
            name: 'Example 3',
            inputs: ["cabbba", "abbccc"],
            expect_result: true,
        },
        {
            name: 'Example 147',
            inputs: ["uau", "ssx"],
            expect_result: false,
        },
        {
            name: 'Example 168',
            inputs: ["uiuiiuuiuuuuuuwiwuuwiiiiuuuuwwiwuuu", "rppprrpurrrrrurrrurprprprprpuprruur"],
            expect_result: false,
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
