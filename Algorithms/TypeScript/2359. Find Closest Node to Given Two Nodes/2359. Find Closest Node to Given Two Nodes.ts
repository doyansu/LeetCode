// 127ms
function closestMeetingNode(edges: number[], node1: number, node2: number): number {
    // 找出 node 到其他 node 最短距離
    let BFS = (node: number): Map<number, number> => {
        let distance_map: Map<number, number> = new Map();
        let distance = 0;
        while(node != -1 && !distance_map.has(node)) {
            distance_map.set(node, distance);
            node = edges[node];
            ++distance;
        }
        return distance_map;
    }

    let distance_node1: Map<number, number> = BFS(node1);
    let distance_node2: Map<number, number> = BFS(node2);
    
    // 取交集並排序
    let intersection = [...distance_node1.keys()]
        .filter(key => distance_node2.has(key))
        .sort((a, b) => a - b);

    // 找出距離兩個 node 最小距離的 node (這個節點的「從 node1 和 node2 出發到該節點的最遠距離中，最大值是最小的」的那個節點)
    let min_node = -1; 
    let min_distance = 100001;
    intersection.forEach((node) => {
        let max_distance = Math.max(distance_node1.get(node)!, distance_node2.get(node)!);
        if (max_distance < min_distance) {
            min_distance = max_distance;
            min_node = node;
        }
    });

    return min_node;
};

// 27ms
function closestMeetingNode1(edges: number[], node1: number, node2: number): number {
    let n = edges.length;

    // 找出 node 到其他 node 最短距離
    const BFS = (node: number): number[] => {
        let distance_array: number[] = new Array(n).fill(-1);
        let distance = 0;
        while(node != -1 && distance_array[node] == -1) {
            distance_array[node] = distance++;
            node = edges[node];
        }
        return distance_array;
    }

    const distance_node1: number[] = BFS(node1);
    const distance_node2: number[] = BFS(node2);
    
    // 找出距離兩個 node 最小距離的 node (這個節點的「從 node1 和 node2 出發到該節點的最遠距離中，最大值是最小的」的那個節點)
    let result_node = -1; 
    let min_distance = 100001;

    for (let i = 0; i < n; ++i) {
        if (distance_node1[i] > -1 && distance_node2[i] > -1) {
            let max_distance = Math.max(distance_node1[i], distance_node2[i]);
            if (max_distance < min_distance) {
                min_distance = max_distance;
                result_node = i;
            }
        }
    }

    return result_node;
};

export const test_funtion_list = [
    closestMeetingNode1,
];

export const verify_function: any = closestMeetingNode;
