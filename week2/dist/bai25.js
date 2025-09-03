"use strict";
// bai25 placeholder
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadFile = downloadFile;
// Simulate a 3s file download and log when done
function downloadFile(filename) {
    console.log(`Starting download: ${filename}`);
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Download complete: ${filename}`);
            resolve();
        }, 3000); // 3 seconds
    });
}
