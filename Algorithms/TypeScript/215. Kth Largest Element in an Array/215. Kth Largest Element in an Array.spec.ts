import { TestCase, test_template } from '../interface/testCase';
import { get_random_integer } from '../interface/commonFuntions';
import { test_funtion_list, verify_function } from './215. Kth Largest Element in an Array';

test_funtion_list.forEach((fnc) => {
    // default test case
    const test_case_list: TestCase[] = [
        {
            name: 'Example 1',
            inputs: [[3,2,1,5,6,4], 2],
            expect_result: 5,
        },
        {
            name: 'Example 2',
            inputs: [[3,2,3,1,2,4,5,5,6], 4],
            expect_result: 4,
        },
    ];

    // init romdom test case
    if (verify_function !== undefined) {
        for (let i = 0; i < 10; ++i) {
            let n = get_random_integer(1, 100000);
            let inputs: any[] = [new Array(n).fill(0).map(() => get_random_integer(-10000, 10000)), get_random_integer(1, n)];
            let random_test_case: TestCase = {
                name: `Random Example ${i}`,
                inputs: inputs,
                expect_result: verify_function(...inputs),
            };
            test_case_list.push(random_test_case);
        }
    }

    // start test
    const template = test_template(fnc);
    test_case_list.forEach((testCase) => template(testCase));
});
