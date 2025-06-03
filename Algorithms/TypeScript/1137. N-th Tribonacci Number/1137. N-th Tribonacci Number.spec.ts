import { TestCase, test_template } from '../interface/testCase';
import { getRandomInt } from '../interface/commonFuntions';
import { test_funtion_list, verify_function } from './1137. N-th Tribonacci Number';

test_funtion_list.forEach((fnc) => {
    // default test case
    const test_case_list: TestCase[] = [
        {
            name: 'Example 1',
            inputs: [4],
            expect_result: 4,
        },
        {
            name: 'Example 2',
            inputs: [25],
            expect_result: 1389537,
        },
        {
            name: 'Example 3',
            inputs: [3],
            expect_result: 2,
        },
        {
            name: 'Example 4',
            inputs: [0],
            expect_result: 0,
        },
        {
            name: 'Example 5',
            inputs: [1],
            expect_result: 1,
        },
        {
            name: 'Example 6',
            inputs: [2],
            expect_result: 1,
        },
    ];

    // init romdom test case
    if (verify_function !== undefined) {
        for (let i = 0; i < 0; ++i) {
            let inputs: any[] = [getRandomInt(0, 1)];
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
