"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortData = void 0;
class SortData {
    constructor(data) {
        this.data = data;
    }
    sort() {
        const { length } = this.data;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.data.compare(j, j + 1)) {
                    this.data.swap(j, j + 1);
                }
            }
        }
    }
}
exports.SortData = SortData;
