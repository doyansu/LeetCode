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
function fnc(): number {
    return 0;
}

export const test_funtion_list = [
    fnc,
];

export const verify_function = undefined;
"@
$nameTsContent | Out-File -Encoding UTF8 -FilePath $nameTsPath -Force

# name.spec.ts 初始內容
$specTsPath = Join-Path -Path $folderPath -ChildPath "$name.spec.ts"
$specTsContent = @"
import { TestCase, test_template, test_template_verify_function } from '../interface/testCase';
import { test_funtion_list, verify_function } from './$name';

test_funtion_list.forEach((fnc) => {
    const testCases: TestCase[] = [
        {
            name: 'Example 1',
            inputs: [],
            expect_result: null,
        },
    ];

    const template = test_template(fnc);
    const template_verify = test_template_verify_function(fnc, verify_function);
    testCases.forEach((testCase) => {
        template(testCase);
        if (verify_function !== undefined)
            template_verify(testCase);
    });
});
"@
$specTsContent | Out-File -Encoding UTF8 -FilePath $specTsPath -Force

Write-Host "✅ Module '$name' created successfully at: $folderPath"
