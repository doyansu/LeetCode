import { TestCase, test_template } from '../interface/testCase';
import { get_random_integer, transform_binaryheap_to_binaryTree } from '../interface/commonFuntions';
import { test_funtion_list, verify_function } from './104. Maximum Depth of Binary Tree';

test_funtion_list.forEach((fnc) => {
    // default test case
    const test_case_list: TestCase[] = [
        {
            name: 'Example 1',
            inputs: [transform_binaryheap_to_binaryTree([3,9,20,null,null,15,7])],
            expect_result: 3,
        },
        {
            name: 'Example 2',
            inputs: [transform_binaryheap_to_binaryTree([1,null,2])],
            expect_result: 2,
        },
        {
            name: 'Example 3',
            inputs: [transform_binaryheap_to_binaryTree([3,9,20,null,null,15,7,null,null,null,null,null,2,null,2])],
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
    const template = test_template(fnc);
    test_case_list.forEach((testCase) => template(testCase));
});
