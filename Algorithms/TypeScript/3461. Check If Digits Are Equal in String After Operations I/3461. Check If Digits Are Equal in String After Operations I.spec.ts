import { TestCase, test_template } from '../interface/testCase';
import { RandomStringType, get_random_integer, get_random_string } from '../interface/commonFuntions';
import { test_funtion_list, verify_function } from './3461. Check If Digits Are Equal in String After Operations I';

test_funtion_list.forEach((test_funtion) => {
    // default test case
    const test_case_list: TestCase[] = [
        {
            name: 'Example 1',
            inputs: ["3902"],
            expect_result: true,
        },
        {
            name: 'Example 2',
            inputs: ["34789"],
            expect_result: false,
        },
        {
            name: 'Example 647',
            inputs: ["33500356015227647588539240966447065370240238277204304"],
            expect_result: true,
        },
        {
            name: 'Example 662',
            inputs: ["026759472128540393733371334565346661864105672983783698917"],
            expect_result: true,
        },
    ];

    // init romdom test case
    if (verify_function !== undefined) {
        for (let i = 0; i < 20; ++i) {
            let length = get_random_integer(3, 101);
            let inputs: any[] = [get_random_string(length, RandomStringType.Numeric)];
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
