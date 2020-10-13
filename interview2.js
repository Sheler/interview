//import compareVersions from "compare-versions";
//compareVersions("10.1.8", "10.0.4"); // 1
//compareVersions("10.0.1", "10.0.1"); // 0
//compareVersions("10.1.1", "10.2.2"); // -1

//如果 version1 > version2 返回 1
//如果 version1 < version2 返回 - 1
//如果两个版本号相同，返回 0。

export function compareVersions(v1, v2) {
    let numberV1 = Number(v1.split('.').join(''))
    let numberV2 = Number(v2.split('.').join(''))
    return numberV1 === numberV2 ? 0 : numberV1 > numberV2 ? 1 : -1
}