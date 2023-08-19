#include<iostream>
#include<vector>
#include<string>

using namespace std;

class Solution {
public:
    vector<int> runningSum(vector<int>& nums) {
        vector<int> result;
        int sum = 0;
        for (int num: nums) 
            result.push_back(sum += num);
        return result;
    }

    vector<int> runningSum2(vector<int>& nums) {
        for(int i = 1; i < nums.size(); i++)
            nums[i] += nums[i-1];
        return nums;
    }
};

int main(){
    Solution Solution;
    vector<int> case1{1, 2, 3, 4};
    for (int number: Solution.runningSum(case1))
        cout << number << endl;
    return 0;
}
