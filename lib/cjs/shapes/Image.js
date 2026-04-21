"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const xsd_1 = require("@_linked/core/ontologies/xsd");
const Shape_1 = require("@_linked/core/shapes/Shape");
const SHACL_1 = require("@_linked/core/shapes/SHACL");
const dcmitype_js_1 = require("../ontologies/dcmitype.js");
const dcterms_js_1 = require("../ontologies/dcterms.js");
const package_js_1 = require("../package.js");
let Image = class Image extends Shape_1.Shape {
    get title() {
        return '';
    }
    get description() {
        return '';
    }
    /**
     * Sets the date that the image was taken.
     * Needs to confirm ISO 8601 date/time,
     * @see pattern from: https://stackoverflow.com/a/37563868
     * @see https://www.w3.org/TR/NOTE-datetime
     */
    get date() {
        return '';
    }
    get format() {
        return '';
    }
    get creator() {
        return null;
    }
    get publisher() {
        return null;
    }
    get subjects() {
        return [];
    }
};
exports.Image = Image;
Image.targetClass = dcmitype_js_1.dcmitype.Image;
__decorate([
    (0, SHACL_1.literalProperty)({
        path: dcterms_js_1.dcterms.title,
        maxCount: 1,
        datatype: xsd_1.xsd.string,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Image.prototype, "title", null);
__decorate([
    (0, SHACL_1.literalProperty)({
        path: dcterms_js_1.dcterms.description,
        maxCount: 1,
        datatype: xsd_1.xsd.string,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Image.prototype, "description", null);
__decorate([
    (0, SHACL_1.literalProperty)({
        path: dcterms_js_1.dcterms.date,
        pattern: /^\d{4}(-\d\d(-\d\d(T\d\d:\d\d(:\d\d)?(\.\d+)?(([+-]\d\d:\d\d)|Z)?)?)?)?$/i,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Image.prototype, "date", null);
__decorate([
    (0, SHACL_1.literalProperty)({
        path: dcterms_js_1.dcterms.format,
        maxCount: 1,
        datatype: xsd_1.xsd.string,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Image.prototype, "format", null);
__decorate([
    (0, SHACL_1.objectProperty)({
        path: dcterms_js_1.dcterms.creator,
        maxCount: 1,
    }),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Image.prototype, "creator", null);
__decorate([
    (0, SHACL_1.objectProperty)({
        path: dcterms_js_1.dcterms.publisher,
        maxCount: 1,
    }),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Image.prototype, "publisher", null);
__decorate([
    (0, SHACL_1.objectProperty)({
        path: dcterms_js_1.dcterms.subject,
    }),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [])
], Image.prototype, "subjects", null);
exports.Image = Image = __decorate([
    package_js_1.linkedShape
], Image);
//# sourceMappingURL=Image.js.map