var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { xsd } from '@_linked/core/ontologies/xsd';
import { Shape } from '@_linked/core/shapes/Shape';
import { literalProperty, objectProperty } from '@_linked/core/shapes/SHACL';
import { dcmitype } from '../ontologies/dcmitype.js';
import { dcterms } from '../ontologies/dcterms.js';
import { linkedShape } from '../package.js';
let Image = class Image extends Shape {
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
Image.targetClass = dcmitype.Image;
__decorate([
    literalProperty({
        path: dcterms.title,
        maxCount: 1,
        datatype: xsd.string,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Image.prototype, "title", null);
__decorate([
    literalProperty({
        path: dcterms.description,
        maxCount: 1,
        datatype: xsd.string,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Image.prototype, "description", null);
__decorate([
    literalProperty({
        path: dcterms.date,
        pattern: /^\d{4}(-\d\d(-\d\d(T\d\d:\d\d(:\d\d)?(\.\d+)?(([+-]\d\d:\d\d)|Z)?)?)?)?$/i,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Image.prototype, "date", null);
__decorate([
    literalProperty({
        path: dcterms.format,
        maxCount: 1,
        datatype: xsd.string,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Image.prototype, "format", null);
__decorate([
    objectProperty({
        path: dcterms.creator,
        maxCount: 1,
    }),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Image.prototype, "creator", null);
__decorate([
    objectProperty({
        path: dcterms.publisher,
        maxCount: 1,
    }),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Image.prototype, "publisher", null);
__decorate([
    objectProperty({
        path: dcterms.subject,
    }),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [])
], Image.prototype, "subjects", null);
Image = __decorate([
    linkedShape
], Image);
export { Image };
//# sourceMappingURL=Image.js.map