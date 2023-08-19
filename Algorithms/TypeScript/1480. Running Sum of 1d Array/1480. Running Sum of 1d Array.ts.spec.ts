import { runningSum } from './1480. Running Sum of 1d Array';

test('Example 1', () => {
    const expectResult = [1,3,6,10];
    const actualResult = runningSum([1,2,3,4]);
    expect(actualResult).toEqual(expectResult);
});
  
test('Example 2', () => {
    const expectResult = [1,2,3,4,5];
    const actualResult = runningSum([1,1,1,1,1]);
    expect(actualResult).toEqual(expectResult);
});

test('Example 3', () => {
    const expectResult = [3,4,6,16,17];
    const actualResult = runningSum([3,1,2,10,1]);
    expect(actualResult).toEqual(expectResult);
});
