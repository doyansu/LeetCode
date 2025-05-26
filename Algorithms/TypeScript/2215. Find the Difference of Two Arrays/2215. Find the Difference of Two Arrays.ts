function findDifference(nums1: number[], nums2: number[]): number[][] {
    let set1 = new Set(nums1), set2 = new Set(nums2);

    let f = (s1: Set<number>, s2: Set<number>) => {
        s1.forEach((value) => {
            if (s2.has(value))
            {
                s1.delete(value);
                s2.delete(value);
            }
        });
    };

    if (set1.size < set2.size)
        f(set1, set2);
    else
        f(set2, set1);

    return [[...set1], [...set2]];
};

export const test_funtions = [
    findDifference,
];
