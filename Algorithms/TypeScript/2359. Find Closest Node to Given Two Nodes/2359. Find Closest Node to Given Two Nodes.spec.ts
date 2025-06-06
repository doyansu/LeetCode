import { TestCase, test_template } from '../interface/testCase';
import { get_random_integer } from '../interface/commonFuntions';
import { test_funtion_list, verify_function } from './2359. Find Closest Node to Given Two Nodes';

test_funtion_list.forEach((fnc) => {
    // 預設 test case
    const test_case_list: TestCase[] = [
        {
            name: 'Example 1',
            inputs: [[2,2,3,-1], 0, 1],
            expect_result: 2,
        },
        {
            name: 'Example 2',
            inputs: [[1,2,-1], 0, 2],
            expect_result: 2,
        },
        {
            name: 'Example 74 相同回傳小的 node',
            inputs: [[2,0,0], 2, 0],
            expect_result: 0,
        },
    ];

    // 自訂 romdom test case
    if (verify_function !== undefined) {
        for (let i = 0; i < 10; ++i) {
            let size = get_random_integer(2, 100000);
            let inputs: any[] = [new Array(size).fill(0).map(() => get_random_integer(-1, size - 1)), get_random_integer(0, size - 1), get_random_integer(0, size -1)];
            let random_test_case: TestCase = {
                name: `Random Example ${i}`,
                inputs: inputs,
                expect_result: verify_function(...inputs),
            };
            test_case_list.push(random_test_case);
        }
    }

    // 開始測試
    const template = test_template(fnc);
    test_case_list.forEach((testCase) => template(testCase));
});
