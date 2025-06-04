import { TestCase, test_template } from '../interface/testCase';
import { getRandomInt } from '../interface/commonFuntions';
import { test_funtion_list, verify_function, TreeNode } from './104. Maximum Depth of Binary Tree';

function arrayToBinaryTree(arr: (number | null)[]): TreeNode | null {
    if (arr.length === 0) 
        return null;
    
    let binary_heap = arr.map((value) => value != null ? new TreeNode(value, null, null) : null);

    for (let i = 0; (i << 1) < binary_heap.length; ++i) {
        if (binary_heap[i] !== null) {
            binary_heap[i]!.left = binary_heap[(i << 1) + 1];
            binary_heap[i]!.right = binary_heap[(i << 1) + 2];
        }
    }
    
    return binary_heap[0];
}

test_funtion_list.forEach((fnc) => {
    // default test case
    const test_case_list: TestCase[] = [
        {
            name: 'Example 1',
            inputs: [arrayToBinaryTree([3,9,20,null,null,15,7])],
            expect_result: 3,
        },
        {
            name: 'Example 2',
            inputs: [arrayToBinaryTree([1,null,2])],
            expect_result: 2,
        },
        {
            name: 'Example 3',
            inputs: [arrayToBinaryTree([3,9,20,null,null,15,7,null,null,null,null,null,2,null,2])],
            expect_result: 4,
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
