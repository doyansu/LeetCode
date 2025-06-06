import { TreeNode } from '../interface/LeetCodeDataStructure'

function maxDepth(root: TreeNode | null): number {
    return root === null ? 0 : 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

export const test_funtion_list = [
    maxDepth,
];

export const verify_function: any = undefined;
