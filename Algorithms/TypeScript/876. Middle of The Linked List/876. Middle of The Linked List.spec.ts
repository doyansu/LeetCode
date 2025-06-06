import { TestCase, test_template } from '../interface/testCase';
import { ListNode } from '../interface/LeetCodeDataStructure'
import { testFuntions } from './876. Middle of The Linked List';

let example1_input_node : ListNode | null = null;
let example1_output_node : ListNode | null = null;
let last_node : ListNode | null = null;
for(let value = 5; value > 0; value--) {
    let node : ListNode | null = new ListNode(value, last_node);
    if (value == 3)
        example1_output_node = node;
    else if (value == 1) {
        example1_input_node = node;
    }
    last_node = node;
}

let example2_input_node : ListNode | null = null;
let example2_output_node : ListNode | null = null;
last_node = null;
for(let value = 6; value > 0; value--) {
    let node : ListNode | null = new ListNode(value, last_node);
    if (value == 4)
        example2_output_node = node;
    else if (value == 1) {
        example2_input_node = node;
    }
    last_node = node;
}

const testCases: TestCase[] = [
    {
        name: 'Example 1',
        inputs: [example1_input_node],
        expect_result: example1_output_node,
    },
    {
        name: 'Example 2',
        inputs: [example2_input_node],
        expect_result: example2_output_node,
    },
];

testFuntions.forEach((fnc) => {
    const template = test_template(fnc);
    testCases.forEach((testCase) => template(testCase));
});
