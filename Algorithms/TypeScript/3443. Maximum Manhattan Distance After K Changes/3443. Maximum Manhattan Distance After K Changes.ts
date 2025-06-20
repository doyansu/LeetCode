// 65ms
function maxDistance_case(s: string, k: number): number {
    let max_distance = 0;
    let N = 0, S = 0, E = 0, W = 0;

    for (let i = 0; i < s.length; ++i) {
        switch (s[i]) {
            case "N":
                ++N;
                break;
            case "S":
                ++S;
                break;
            case "E":
                ++E;
                break;
            case "W":
                ++W;
                break;
            default:
                break;
        }
        
        // 當前距離
        let distance = Math.abs(N - S) + Math.abs(E - W);

        // 加可替換的方向數量 * 2
        max_distance = Math.max(max_distance, distance + 2 * Math.min(k, Math.min(N, S) + Math.min(E, W)));
    }

    return max_distance;
};

// 153ms
function maxDistance_record(s: string, k: number): number {
    let max_distance = 0;
    let vector : Record<string, number> = {
        N: 0,
        S: 0,
        E: 0,
        W: 0,
    };

    for (let i = 0; i < s.length; ++i) {
        ++vector[s[i]];
        
        let distance = Math.abs(vector.N - vector.S) + Math.abs(vector.E - vector.W);

        max_distance = Math.max(max_distance, distance + 2 * Math.min(k, Math.min(vector.N, vector.S) + Math.min(vector.E, vector.W)));
    }

    return max_distance;
};

// 372ms
function maxDistance(s: string, k: number): number {
    let counting_map = new Map<string, number>([
        ['N', 0],
        ['S', 0],
        ['E', 0],
        ['W', 0],]);

    let max_distance = 0;

    for (let i = 0; i < s.length; ++i) {
        counting_map.set(s[i], (counting_map.get(s[i]) || 0) + 1);

        let [N, S, E, W] = counting_map.values();

        let distance = Math.abs(N - S) + Math.abs(E - W);

        max_distance = Math.max(max_distance, distance + 2 * Math.min(k, Math.min(N, S) + Math.min(E, W)));
    }

    return max_distance;
};

export const test_funtion_list = [
    maxDistance,
    maxDistance_record,
    maxDistance_case,
];

export const verify_function: any = undefined;
