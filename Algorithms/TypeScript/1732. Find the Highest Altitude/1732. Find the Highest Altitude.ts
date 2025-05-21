function largestAltitude(gain: number[]): number {
    let largest = 0, current_altitude = 0;
    for (let i = 0; i < gain.length; ++i) {
        current_altitude += gain[i];
        largest = Math.max(largest, current_altitude);
    }
    return largest;
};

export const test_funtions = [
    largestAltitude,
];
