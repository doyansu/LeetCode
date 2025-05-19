function merge(nums1: number[], nums2: number[]): number[] {
    let new_array: number[] = [];
    let index1 = 0, index2 = 0;
    while (index1 < nums1.length && index2 < nums2.length) 
        new_array.push(nums1[index1] <= nums2[index2] ? nums1[index1++] : nums2[index2++]);
    while (index1 < nums1.length)
        new_array.push(nums1[index1++]);
    while (index2 < nums2.length)
        new_array.push(nums2[index2++]);
    return new_array;
}

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let length = nums1.length + nums2.length;
    let mid = Math.floor(length / 2);
    let merge_array = merge(nums1, nums2);
    return (length&1) ? merge_array[mid] : (merge_array[mid - 1] + merge_array[mid]) / 2;
};

function findMedianSortedArrays1(nums1: number[], nums2: number[]): number {
    let length = nums1.length + nums2.length;
    let mid = Math.floor(length / 2);
    let merge_array: number[] = [];
    let index1 = 0, index2 = 0;
    while (index1 < nums1.length && index2 < nums2.length) {
        if(merge_array.length >= mid + 1)
            break;
        merge_array.push(nums1[index1] <= nums2[index2] ? nums1[index1++] : nums2[index2++]);
    }
    while (index1 < nums1.length) {
        if(merge_array.length >= mid + 1)
            break;
        merge_array.push(nums1[index1++]);
    }
    while (index2 < nums2.length) {
        if(merge_array.length >= mid + 1)
            break;
        merge_array.push(nums2[index2++]);
    }
    return (length&1) ? merge_array[mid] : (merge_array[mid - 1] + merge_array[mid]) / 2;
};

export const test_funtions = [
    findMedianSortedArrays,
    findMedianSortedArrays1
];