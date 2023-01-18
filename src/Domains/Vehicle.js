"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    constructor(carParameters) {
        this.id = carParameters.id;
        this.model = carParameters.model;
        this.year = carParameters.year;
        this.color = carParameters.color;
        this.status = carParameters.status;
        this.buyValue = carParameters.buyValue;
    }
}
exports.default = Vehicle;
