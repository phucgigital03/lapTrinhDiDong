"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
// bai17 placeholder
// ...existing code...
// Singleton Logger
class Logger {
    constructor() { }
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    log(message) {
        const ts = new Date().toISOString();
        console.log(`[${ts}] ${message}`);
    }
}
exports.Logger = Logger;
Logger.instance = null;
