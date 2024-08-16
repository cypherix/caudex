

import { extensionsMap,fileNameMap } from "./mapping";
const BASE_URL = "https://cdn.jsdelivr.net/gh/cypherix/icons@main/";
const DEFAULT = "/assets/logo.svg"
export const getFileMapping = (filename:string):string => {
    if(fileNameMap[filename]){
        return BASE_URL+fileNameMap[filename]+".svg";
    }
    const segments = filename.split('.');
    for (let i = 1; i < segments.length; i++) {
        const extension = segments.slice(-i).join('.');
        if (extensionsMap[extension]) {
            return BASE_URL+extensionsMap[extension]+".svg";
        }
    }
    return DEFAULT;
}
// import { extensionsMap, fileNameMap } from "./mapping";

// const BASE_URL = "https://cdn.jsdelivr.net/gh/cypherix/icons@main/";
// const DEFAULT = "/assets/logo.svg";

// export const getFileMapping = (name:string,extension:string): string => {
    
//     if (fileNameMap[name]) {
//         return BASE_URL + fileNameMap[name] + ".svg";
//     }
//     if (extensionsMap[extension]) {
//         return BASE_URL + extensionsMap[extension] + ".svg";
//     }

//     return DEFAULT;
// }
