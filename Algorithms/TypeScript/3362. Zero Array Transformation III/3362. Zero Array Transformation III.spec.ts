import { TestCase, test_template } from '../interface/testCase';
import { get_random_integer } from '../interface/commonFuntions';
import { test_funtions, verify_function } from './3362. Zero Array Transformation III';
// jest-ignore
test_funtions.forEach((fnc) => {
    const test_case_list: TestCase[] = [
        {
            name: 'Example 1',
            inputs: [[2, 0, 2], [[0, 2], [0, 2], [1, 1]]],
            expect_result: 1,
        },
        {
            name: 'Example 2',
            inputs: [[1, 1, 1, 1], [[1, 3], [0, 2], [1, 3], [1, 2]]],
            expect_result: 2,
        },
        {
            name: 'Example 3',
            inputs: [[1, 2, 3, 4], [[0, 3]]],
            expect_result: -1,
        },
        {
            name: 'Example 630 Wrong Answer',
            inputs: [[1,2], [[1,1],[0,0],[1,1],[1,1],[0,1],[0,0]]],
            expect_result: 4,
        },
        {
            name: 'Example 698 Wrong Answer',
            inputs: [[0,0,1,1,0], [[3,4],[0,2],[2,3]]],
            expect_result: 2,
        },
    
        // --- 已加入的其他測資 ---
        {
            name: 'All zeros to begin with',
            inputs: [[0, 0, 0], [[0, 1], [1, 2]]],
            expect_result: 2,
        },
        {
            name: 'Only one element, one perfect query',
            inputs: [[5], [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]],
            expect_result: 0,
        },
        {
            name: 'Redundant over-decrement',
            inputs: [[2, 2], [[0, 1], [0, 1], [0, 1], [0, 1]]],
            expect_result: 2,
        },
        {
            name: 'Insufficient coverage',
            inputs: [[1, 1, 1], [[0, 1], [1, 2]]],
            expect_result: 0,
        },
        {
            name: 'Large input minimal queries',
            inputs: [[10000, 10000, 10000], [[0, 2]]],
            expect_result: -1,
        },
        {
            name: 'Single query per index',
            inputs: [[1, 1, 1], [[0, 0], [1, 1], [2, 2]]],
            expect_result: 0,
        },
        {
            name: 'Overlapping and optional queries',
            inputs: [[2, 2, 2], [[0, 1], [1, 2], [0, 2]]],
            expect_result: 0,
        },
    
        // --- 邊界條件測試 ---
        {
            name: 'Max size with zero array (1e5 zeros)',
            inputs: [Array(1e5).fill(0), [[0, 99999]]],
            expect_result: 1, // any query is unnecessary
        },
        {
            name: 'Max size with all ones, one query per index',
            inputs: [
                Array(1e5).fill(1),
                Array.from({ length: 1e5 }, (_, i) => [i, i])
            ],
            expect_result: 0, // 每個 query 必要，無法刪除
        },
        {
            name: 'Max values with minimal range',
            inputs: [
                [100000, 100000],
                [[0, 0], [1, 1]]
            ],
            expect_result: -1,
        },
        {
            name: 'Max values with single overlapping query',
            inputs: [
                [100000, 100000],
                [[0, 1]]
            ],
            expect_result: -1, // 無法同時減兩格 10^5
        },
    ];
    
    // 自訂 romdom test case
    if (verify_function !== undefined) {
        for (let i = 0; i < 50; ++i) {
            const max_length = 1000;
            let n = get_random_integer(1, max_length);
            let m = get_random_integer(1, max_length);
            let inputs: any[] = [
                new Array(n).fill(0).map(() => get_random_integer(0, Math.min(m, n)>>4)), 
                new Array(m).fill([]).map(() => {
                    let left = get_random_integer(0, n - 1);
                    let right = get_random_integer(left, n - 1);
                    return [left, right];
                })
            ];

            let random_test_case: TestCase = {
                name: `Random Example ${i}`,
                inputs: inputs,
                expect_result: verify_function(...inputs),
            };
            test_case_list.push(random_test_case);
        }
    }

    const template = test_template(fnc);
    test_case_list.forEach((testCase) => template(testCase));
});
