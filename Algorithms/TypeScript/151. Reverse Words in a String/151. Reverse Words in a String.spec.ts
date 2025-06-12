import { TestCase, test_template } from '../interface/testCase';
import { get_random_integer, get_random_string, RandomStringType } from '../interface/commonFuntions';
import { test_funtion_list, verify_function } from './151. Reverse Words in a String';

test_funtion_list.forEach((test_funtion) => {
    // default test case
    const test_case_list: TestCase[] = [
        {
            name: 'Example 1',
            inputs: ["the sky is blue"],
            expect_result: "blue is sky the",
        },
        {
            name: 'Example 2',
            inputs: ["  hello world  "],
            expect_result: "world hello",
        },
        {
            name: 'Example 3',
            inputs: ["a good   example"],
            expect_result: "example good a",
        },
    ];

    // init romdom test case
    if (verify_function !== undefined) {
        for (let i = 0; i < 10; ++i) {
            let inputs: any[] = [get_random_string(get_random_integer(1, 10000), RandomStringType.AlphaNumeric + ' ')];
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
