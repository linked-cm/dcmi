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
exports.dcmitype = exports.Text = exports.StillImage = exports.Sound = exports.Software = exports.Service = exports.PhysicalObject = exports.MovingImage = exports.InteractiveResource = exports.Image = exports.Event = exports.Dataset = exports.Collection = exports._ontologyResource = exports.ns = exports.loadData = void 0;
const Prefix_1 = require("@_linked/core/utils/Prefix");
const NameSpace_1 = require("@_linked/core/utils/NameSpace");
const package_js_1 = require("../package.js");
const _this = __importStar(require("./dcmitype.js"));
const dataFile = '../data/dcmitype.json';
const loadData = () => {
    if (typeof module !== 'undefined' && typeof exports !== 'undefined') {
        return Promise.resolve().then(() => __importStar(require('../data/dcmitype.json')));
    }
    //@ts-ignore
    return Promise.resolve().then(() => __importStar(require('../data/dcmitype.json'))).then((data) => data.default);
};
exports.loadData = loadData;
const base = 'http://purl.org/dc/dcmitype/';
exports.ns = (0, NameSpace_1.createNameSpace)(base);
Prefix_1.Prefix.add('dcmitype', base);
exports._ontologyResource = (0, exports.ns)('');
exports.Collection = (0, exports.ns)('Collection');
exports.Dataset = (0, exports.ns)('Dataset');
exports.Event = (0, exports.ns)('Event');
exports.Image = (0, exports.ns)('Image');
exports.InteractiveResource = (0, exports.ns)('InteractiveResource');
exports.MovingImage = (0, exports.ns)('MovingImage');
exports.PhysicalObject = (0, exports.ns)('PhysicalObject');
exports.Service = (0, exports.ns)('Service');
exports.Software = (0, exports.ns)('Software');
exports.Sound = (0, exports.ns)('Sound');
exports.StillImage = (0, exports.ns)('StillImage');
exports.Text = (0, exports.ns)('Text');
exports.dcmitype = {
    _ontologyResource: exports._ontologyResource,
    Collection: exports.Collection,
    Dataset: exports.Dataset,
    Event: exports.Event,
    Image: exports.Image,
    InteractiveResource: exports.InteractiveResource,
    MovingImage: exports.MovingImage,
    PhysicalObject: exports.PhysicalObject,
    Service: exports.Service,
    Software: exports.Software,
    Sound: exports.Sound,
    StillImage: exports.StillImage,
    Text: exports.Text,
};
(0, package_js_1.linkedOntology)(_this, exports.ns, 'dcmitype', exports.loadData, dataFile);
//# sourceMappingURL=dcmitype.js.map