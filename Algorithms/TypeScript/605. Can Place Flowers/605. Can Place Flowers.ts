function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    const can_place_flower = (index: number): boolean => {
        return (index == 0 || flowerbed[index - 1] == 0) && flowerbed[index] == 0 && (index == flowerbed.length - 1 || flowerbed[index + 1] == 0);
    };

    for (let i = 0; i < flowerbed.length; ++i) {
        if (can_place_flower(i)) {
            flowerbed[i] = 1;
            --n;
        }
        if (n <= 0)
            return true;
    }

    return false;
};

export const test_funtion_list = [
    canPlaceFlowers,
];

export const verify_function = undefined;
