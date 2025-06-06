# .\createModule.ps1 -name myFolderName

param (
    [Parameter(Mandatory=$true)]
    [string]$name
)

# 建立資料夾
$folderPath = Join-Path -Path "." -ChildPath $name
if (!(Test-Path $folderPath)) {
    New-Item -Path $folderPath -ItemType Directory | Out-Null
}

# name.ts 初始內容
$nameTsPath = Join-Path -Path $folderPath -ChildPath "$name.ts"
$nameTsContent = @"
function fnc(n: number): number {
    return n;
}

export const test_funtion_list = [
    fnc,
];

export const verify_function: any = undefined;
"@
$nameTsContent | Out-File -Encoding UTF8 -FilePath $nameTsPath -Force

# name.spec.ts 初始內容
$specTsPath = Join-Path -Path $folderPath -ChildPath "$name.spec.ts"
$specTsContent = @"
import { TestCase, test_template } from '../interface/testCase';
import { get_random_integer } from '../interface/commonFuntions';
import { test_funtion_list, verify_function } from './$name';

test_funtion_list.forEach((test_funtion) => {
    // default test case
    const test_case_list: TestCase[] = [
        {
            name: 'Example 1',
            inputs: [0],
            expect_result: null,
        },
    ];

    // init romdom test case
    if (verify_function !== undefined) {
        for (let i = 0; i < 0; ++i) {
            let inputs: any[] = [get_random_integer(0, 1)];
            let random_test_case: TestCase = {
                name: ``Random Example `${i}``,
                inputs: inputs,
                expect_result: verify_function(...inputs),
            };
            test_case_list.push(random_test_case);
        }
    }

    // start test
    const template = test_template(test_funtion);
    test_case_list.forEach((test_case) => template(test_case));
});
"@
$specTsContent | Out-File -Encoding UTF8 -FilePath $specTsPath -Force

Write-Host "✅ Module '$name' created successfully at: $folderPath"
