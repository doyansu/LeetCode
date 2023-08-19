import { runningSum, runningSum2 } from './1480. Running Sum of 1d Array';

const testFnc = [ runningSum, runningSum2 ];

testFnc.forEach((fnc) => {
    test('Example 1 ' + fnc.name, () => {
        const expectResult = [1,3,6,10];
        const actualResult = fnc([1,2,3,4]);
        expect(actualResult).toEqual(expectResult);
    });
    
    test('Example 2 ' + fnc.name, () => {
        const expectResult = [1,2,3,4,5];
        const actualResult = fnc([1,1,1,1,1]);
        expect(actualResult).toEqual(expectResult);
    });

    test('Example 3 ' + fnc.name, () => {
        const expectResult = [3,4,6,16,17];
        const actualResult = fnc([3,1,2,10,1]);
        expect(actualResult).toEqual(expectResult);
    });
});
