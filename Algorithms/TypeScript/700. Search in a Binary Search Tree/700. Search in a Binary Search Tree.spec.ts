import { TestCase, test_template } from '../interface/testCase';
import { get_random_integer, transform_binaryheap_to_binaryTree } from '../interface/commonFuntions';
import { test_funtion_list, verify_function } from './700. Search in a Binary Search Tree';

test_funtion_list.forEach((test_funtion) => {
    // default test case
    const test_case_list: TestCase[] = [
        {
            name: 'Example 1',
            inputs: [transform_binaryheap_to_binaryTree([4,2,7,1,3,null,null]), 2],
            expect_result: transform_binaryheap_to_binaryTree([2,1,3]),
        },
        {
            name: 'Example 2',
            inputs: [transform_binaryheap_to_binaryTree([4,2,7,1,3,null,null]), 5],
            expect_result: null,
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
