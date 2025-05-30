function maxArea(height: number[]): number {
    let max_area = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        max_area = Math.max(max_area, Math.min(height[left], height[right]) * (right - left));
        if (height[left] < height[right])
            ++left;
        else 
            --right;
    }
   
    return max_area;
};

function maxArea_force1(height: number[]): number {
    let max_area = 0;
    let height_map = new Map();
    for (let i = 0; i < height.length; ++i) {
        if (!height_map.has(height[i]))
            height_map.set(height[i], i);

        height_map.forEach((index: any, h: any) => {
            let area = Math.min(height[i], h) * (i - index);
            max_area = Math.max(max_area, area);
        });
        
    }
    return max_area;
};

// TLE
function maxArea_force(height: number[]): number {
    let max_area = 0;
    for (let i = 0; i < height.length; ++i) {
        for (let j = 0; j < i; ++j) {
            let area = Math.min(height[i], height[j]) * (i - j);
            max_area = Math.max(max_area, area);
        }
    }
    return max_area;
};

export const test_funtion_list = [
    maxArea,
];

export const verify_function = maxArea_force1;
