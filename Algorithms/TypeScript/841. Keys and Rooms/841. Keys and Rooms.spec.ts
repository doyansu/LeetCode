import { TestCase, test_template } from '../interface/testCase';
import { getRandomInt } from '../interface/commonFuntions';
import { test_funtion_list, verify_function } from './841. Keys and Rooms';

test_funtion_list.forEach((fnc) => {
    // default test case
    const test_case_list: TestCase[] = [
        {
            name: 'Example 1',
            inputs: [[[1],[2],[3],[]]],
            expect_result: true,
        },
        {
            name: 'Example 2',
            inputs: [[[1,3],[3,0,1],[2],[0]]],
            expect_result: false,
        },
    ];

    // init romdom test case
    if (verify_function !== undefined) {
        for (let i = 0; i < 10; ++i) {
            let n = getRandomInt(2, 1000);
            let inputs: any[] = [new Array(n).fill([]).map(() => {
                return new Array(getRandomInt(0, n)).fill(0).map(() => getRandomInt(0, n - 1))
            })];
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
