import { TestCase, test_template } from '../interface/testCase';
import { get_random_integer, transform_array_to_listNode } from '../interface/commonFuntions';
import { test_funtion_list, verify_function } from './2095. Delete the Middle Node of a Linked List';

test_funtion_list.forEach((test_funtion) => {
    // default test case
    const test_case_list: TestCase[] = [
        {
            name: 'Example 1',
            inputs: [transform_array_to_listNode([1,3,4,7,1,2,6])],
            expect_result: transform_array_to_listNode([1,3,4,1,2,6]),
        },
        {
            name: 'Example 2',
            inputs: [transform_array_to_listNode([1,2,3,4])],
            expect_result: transform_array_to_listNode([1,2,4]),
        },
        {
            name: 'Example 3',
            inputs: [transform_array_to_listNode([2,1])],
            expect_result: transform_array_to_listNode([2]),
        },
        {
            name: 'Example 4',
            inputs: [transform_array_to_listNode([1])],
            expect_result: transform_array_to_listNode([]),
        },
    ];

    // init romdom test case
    if (verify_function !== undefined) {
        for (let i = 0; i < 10; ++i) {
            let inputs: any[] = [transform_array_to_listNode(new Array(get_random_integer(1, 100000)).fill(0).map(() => get_random_integer(1, 100000)))];
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
