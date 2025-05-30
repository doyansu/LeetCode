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
import { getRandomInt } from '../interface/commonFuntions';
import { test_funtion_list, verify_function } from './$name';

test_funtion_list.forEach((fnc) => {
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
            let inputs: any[] = [getRandomInt(0, 1)];
            let random_test_case: TestCase = {
                name: ``Random Example `${i}``,
                inputs: inputs,
                expect_result: verify_function(...inputs),
            };
            test_case_list.push(random_test_case);
        }
    }

    // start test
    const template = test_template(fnc);
    test_case_list.forEach((testCase) => template(testCase));
});
"@
$specTsContent | Out-File -Encoding UTF8 -FilePath $specTsPath -Force

Write-Host "✅ Module '$name' created successfully at: $folderPath"
