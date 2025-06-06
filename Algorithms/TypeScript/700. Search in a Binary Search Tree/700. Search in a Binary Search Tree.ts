import { TreeNode } from '../interface/LeetCodeDataStructure'

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    let current = root;

    while (current !== null) {
        if (current?.val == val)
            return current;

        current = (current?.val < val) ? current.right : current.left;
    }

    return null;
};

export const test_funtion_list = [
    searchBST,
];

export const verify_function: any = undefined;
