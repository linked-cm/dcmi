"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dcelems = exports.type = exports.title = exports.subject = exports.source = exports.rights = exports.relation = exports.publisher = exports.language = exports.identifier = exports.format = exports.description = exports.date = exports.creator = exports.coverage = exports.contributor = exports._ontologyResource = exports.ns = exports.loadData = void 0;
const Prefix_1 = require("@_linked/core/utils/Prefix");
const NameSpace_1 = require("@_linked/core/utils/NameSpace");
const package_js_1 = require("../package.js");
const _this = __importStar(require("./dc.js"));
const dataFile = '../data/dcelems.json';
const loadData = () => {
    if (typeof module !== 'undefined' && typeof exports !== 'undefined') {
        return Promise.resolve().then(() => __importStar(require('../data/dcelems.json')));
    }
    //@ts-ignore
    return Promise.resolve().then(() => __importStar(require('../data/dcelems.json'))).then((data) => data.default);
};
exports.loadData = loadData;
const base = 'http://purl.org/dc/elements/1.1/';
exports.ns = (0, NameSpace_1.createNameSpace)(base);
Prefix_1.Prefix.add('dc', base);
exports._ontologyResource = (0, exports.ns)('');
exports.contributor = (0, exports.ns)('contributor');
exports.coverage = (0, exports.ns)('coverage');
exports.creator = (0, exports.ns)('creator');
exports.date = (0, exports.ns)('date');
exports.description = (0, exports.ns)('description');
exports.format = (0, exports.ns)('format');
exports.identifier = (0, exports.ns)('identifier');
exports.language = (0, exports.ns)('language');
exports.publisher = (0, exports.ns)('publisher');
exports.relation = (0, exports.ns)('relation');
exports.rights = (0, exports.ns)('rights');
exports.source = (0, exports.ns)('source');
exports.subject = (0, exports.ns)('subject');
exports.title = (0, exports.ns)('title');
exports.type = (0, exports.ns)('type');
exports.dcelems = {
    _ontologyResource: exports._ontologyResource,
    contributor: exports.contributor,
    coverage: exports.coverage,
    creator: exports.creator,
    date: exports.date,
    description: exports.description,
    format: exports.format,
    identifier: exports.identifier,
    language: exports.language,
    publisher: exports.publisher,
    relation: exports.relation,
    rights: exports.rights,
    source: exports.source,
    subject: exports.subject,
    title: exports.title,
    type: exports.type,
};
(0, package_js_1.linkedOntology)(_this, exports.ns, 'dc', exports.loadData, dataFile);
//# sourceMappingURL=dc.js.map