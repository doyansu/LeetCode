import { TestCase, test_template } from '../interface/testCase';
import { getRandomInt } from '../interface/commonFuntions';
import { test_funtion_list, verify_function } from './2390. Removing Stars From a String';

test_funtion_list.forEach((fnc) => {
    // default test case
    const test_case_list: TestCase[] = [
        {
            name: 'Example 1',
            inputs: ["leet**cod*e"],
            expect_result: "lecoe",
        },
        {
            name: 'Example 2',
            inputs: ["erase*****"],
            expect_result: "",  
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
