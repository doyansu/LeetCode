
function canVisitAllRooms(rooms: number[][]): boolean {
    // 是否尋訪過房間
    let has_visited_room: boolean[] = new Array(rooms.length).fill(false);

    // 進入房間拿到 keys 繼續尋訪下一間房間
    let dfs = (room_index: number) => {
        has_visited_room[room_index] = true;

        let room_keys = rooms[room_index];
        for (let i = 0; i < room_keys.length; ++i) {
            if (has_visited_room[room_keys[i]] == false)
                dfs(room_keys[i]);
        }

    }

    // 從 room 0 開使嘗試解鎖所有房間
    dfs(0);

    // 確認是否尋訪過所有房間
    for (let i = 0; i < has_visited_room.length; ++i) {
        if (has_visited_room[i] == false)
            return false;
    }

    return true;
};

function canVisitAllRooms_quick_return(rooms: number[][]): boolean {
    // 是否尋訪過房間
    let has_visited_room: boolean[] = new Array(rooms.length).fill(false);
    let visited_count = 0;

    // 進入房間拿到 keys 繼續尋訪下一間房間
    let dfs = (room_index: number): boolean => {
        has_visited_room[room_index] = true;

        if (++visited_count >= rooms.length)
            return true; 

        let room_keys = rooms[room_index];

        for (let i = 0; i < room_keys.length; ++i) {
            if (has_visited_room[room_keys[i]] == false && dfs(room_keys[i]))
                return true;
        }

        return false;
    }

    // 從 room 0 開使嘗試解鎖所有房間
    return dfs(0);
};

export const test_funtion_list = [
    canVisitAllRooms_quick_return,
];

export const verify_function: any = canVisitAllRooms;
