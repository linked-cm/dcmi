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
exports.hasVersion = exports.hasPart = exports.hasFormat = exports.format = exports.extent = exports.educationLevel = exports.description = exports.dateSubmitted = exports.dateCopyrighted = exports.dateAccepted = exports.date = exports.creator = exports.created = exports.coverage = exports.contributor = exports.conformsTo = exports.bibliographicCitation = exports.available = exports.audience = exports.alternative = exports.accrualPolicy = exports.accrualPeriodicity = exports.accrualMethod = exports.accessRights = exports.abstract = exports.Standard = exports.SizeOrDuration = exports.RightsStatement = exports.ProvenanceStatement = exports.Policy = exports.PhysicalResource = exports.PhysicalMedium = exports.PeriodOfTime = exports.MethodOfInstruction = exports.MethodOfAccrual = exports.MediaTypeOrExtent = exports.MediaType = exports.LocationPeriodOrJurisdiction = exports.Location = exports.LinguisticSystem = exports.LicenseDocument = exports.Jurisdiction = exports.Frequency = exports.FileFormat = exports.BibliographicResource = exports.Agent = exports.AgentClass = exports._ontologyResource = exports.ns = exports.loadData = void 0;
exports.dcterms = exports.Image = exports.valid = exports.type = exports.title = exports.temporal = exports.tableOfContents = exports.subject = exports.spatial = exports.source = exports.rightsHolder = exports.rights = exports.requires = exports.replaces = exports.relation = exports.references = exports.publisher = exports.provenance = exports.modified = exports.medium = exports.mediator = exports.license = exports.language = exports.isVersionOf = exports.issued = exports.isRequiredBy = exports.isReplacedBy = exports.isReferencedBy = exports.isPartOf = exports.isFormatOf = exports.instructionalMethod = exports.identifier = void 0;
const Prefix_1 = require("@_linked/core/utils/Prefix");
const NameSpace_1 = require("@_linked/core/utils/NameSpace");
const package_js_1 = require("../package.js");
const _this = __importStar(require("./dcterms.js"));
const dataFile = '../data/dcterms.json';
const loadData = () => {
    if (typeof module !== 'undefined' && typeof exports !== 'undefined') {
        return Promise.resolve().then(() => __importStar(require('../data/dcterms.json')));
    }
    //@ts-ignore
    return Promise.resolve().then(() => __importStar(require('../data/dcterms.json'))).then((data) => data.default);
};
exports.loadData = loadData;
const base = 'http://purl.org/dc/terms/';
exports.ns = (0, NameSpace_1.createNameSpace)(base);
Prefix_1.Prefix.add('dcterms', base);
exports._ontologyResource = (0, exports.ns)('');
exports.AgentClass = (0, exports.ns)('AgentClass');
exports.Agent = (0, exports.ns)('Agent');
exports.BibliographicResource = (0, exports.ns)('BibliographicResource');
exports.FileFormat = (0, exports.ns)('FileFormat');
exports.Frequency = (0, exports.ns)('Frequency');
exports.Jurisdiction = (0, exports.ns)('Jurisdiction');
exports.LicenseDocument = (0, exports.ns)('LicenseDocument');
exports.LinguisticSystem = (0, exports.ns)('LinguisticSystem');
exports.Location = (0, exports.ns)('Location');
exports.LocationPeriodOrJurisdiction = (0, exports.ns)('LocationPeriodOrJurisdiction');
exports.MediaType = (0, exports.ns)('MediaType');
exports.MediaTypeOrExtent = (0, exports.ns)('MediaTypeOrExtent');
exports.MethodOfAccrual = (0, exports.ns)('MethodOfAccrual');
exports.MethodOfInstruction = (0, exports.ns)('MethodOfInstruction');
exports.PeriodOfTime = (0, exports.ns)('PeriodOfTime');
exports.PhysicalMedium = (0, exports.ns)('PhysicalMedium');
exports.PhysicalResource = (0, exports.ns)('PhysicalResource');
exports.Policy = (0, exports.ns)('Policy');
exports.ProvenanceStatement = (0, exports.ns)('ProvenanceStatement');
exports.RightsStatement = (0, exports.ns)('RightsStatement');
exports.SizeOrDuration = (0, exports.ns)('SizeOrDuration');
exports.Standard = (0, exports.ns)('Standard');
exports.abstract = (0, exports.ns)('abstract');
exports.accessRights = (0, exports.ns)('accessRights');
exports.accrualMethod = (0, exports.ns)('accrualMethod');
exports.accrualPeriodicity = (0, exports.ns)('accrualPeriodicity');
exports.accrualPolicy = (0, exports.ns)('accrualPolicy');
exports.alternative = (0, exports.ns)('alternative');
exports.audience = (0, exports.ns)('audience');
exports.available = (0, exports.ns)('available');
exports.bibliographicCitation = (0, exports.ns)('bibliographicCitation');
exports.conformsTo = (0, exports.ns)('conformsTo');
exports.contributor = (0, exports.ns)('contributor');
exports.coverage = (0, exports.ns)('coverage');
exports.created = (0, exports.ns)('created');
exports.creator = (0, exports.ns)('creator');
exports.date = (0, exports.ns)('date');
exports.dateAccepted = (0, exports.ns)('dateAccepted');
exports.dateCopyrighted = (0, exports.ns)('dateCopyrighted');
exports.dateSubmitted = (0, exports.ns)('dateSubmitted');
exports.description = (0, exports.ns)('description');
exports.educationLevel = (0, exports.ns)('educationLevel');
exports.extent = (0, exports.ns)('extent');
exports.format = (0, exports.ns)('format');
exports.hasFormat = (0, exports.ns)('hasFormat');
exports.hasPart = (0, exports.ns)('hasPart');
exports.hasVersion = (0, exports.ns)('hasVersion');
exports.identifier = (0, exports.ns)('identifier');
exports.instructionalMethod = (0, exports.ns)('instructionalMethod');
exports.isFormatOf = (0, exports.ns)('isFormatOf');
exports.isPartOf = (0, exports.ns)('isPartOf');
exports.isReferencedBy = (0, exports.ns)('isReferencedBy');
exports.isReplacedBy = (0, exports.ns)('isReplacedBy');
exports.isRequiredBy = (0, exports.ns)('isRequiredBy');
exports.issued = (0, exports.ns)('issued');
exports.isVersionOf = (0, exports.ns)('isVersionOf');
exports.language = (0, exports.ns)('language');
exports.license = (0, exports.ns)('license');
exports.mediator = (0, exports.ns)('mediator');
exports.medium = (0, exports.ns)('medium');
exports.modified = (0, exports.ns)('modified');
exports.provenance = (0, exports.ns)('provenance');
exports.publisher = (0, exports.ns)('publisher');
exports.references = (0, exports.ns)('references');
exports.relation = (0, exports.ns)('relation');
exports.replaces = (0, exports.ns)('replaces');
exports.requires = (0, exports.ns)('requires');
exports.rights = (0, exports.ns)('rights');
exports.rightsHolder = (0, exports.ns)('rightsHolder');
exports.source = (0, exports.ns)('source');
exports.spatial = (0, exports.ns)('spatial');
exports.subject = (0, exports.ns)('subject');
exports.tableOfContents = (0, exports.ns)('tableOfContents');
exports.temporal = (0, exports.ns)('temporal');
exports.title = (0, exports.ns)('title');
exports.type = (0, exports.ns)('type');
exports.valid = (0, exports.ns)('valid');
exports.Image = (0, exports.ns)('Image');
exports.dcterms = {
    _ontologyResource: exports._ontologyResource,
    abstract: exports.abstract,
    accessRights: exports.accessRights,
    accrualMethod: exports.accrualMethod,
    accrualPeriodicity: exports.accrualPeriodicity,
    accrualPolicy: exports.accrualPolicy,
    alternative: exports.alternative,
    audience: exports.audience,
    available: exports.available,
    bibliographicCitation: exports.bibliographicCitation,
    conformsTo: exports.conformsTo,
    contributor: exports.contributor,
    coverage: exports.coverage,
    created: exports.created,
    creator: exports.creator,
    date: exports.date,
    dateAccepted: exports.dateAccepted,
    dateCopyrighted: exports.dateCopyrighted,
    dateSubmitted: exports.dateSubmitted,
    description: exports.description,
    educationLevel: exports.educationLevel,
    extent: exports.extent,
    format: exports.format,
    hasFormat: exports.hasFormat,
    hasPart: exports.hasPart,
    hasVersion: exports.hasVersion,
    identifier: exports.identifier,
    instructionalMethod: exports.instructionalMethod,
    isFormatOf: exports.isFormatOf,
    isPartOf: exports.isPartOf,
    isReferencedBy: exports.isReferencedBy,
    isReplacedBy: exports.isReplacedBy,
    isRequiredBy: exports.isRequiredBy,
    issued: exports.issued,
    isVersionOf: exports.isVersionOf,
    language: exports.language,
    license: exports.license,
    mediator: exports.mediator,
    medium: exports.medium,
    modified: exports.modified,
    provenance: exports.provenance,
    publisher: exports.publisher,
    references: exports.references,
    relation: exports.relation,
    replaces: exports.replaces,
    requires: exports.requires,
    rights: exports.rights,
    rightsHolder: exports.rightsHolder,
    source: exports.source,
    spatial: exports.spatial,
    subject: exports.subject,
    tableOfContents: exports.tableOfContents,
    temporal: exports.temporal,
    title: exports.title,
    type: exports.type,
    valid: exports.valid,
    Agent: exports.Agent,
    AgentClass: exports.AgentClass,
    BibliographicResource: exports.BibliographicResource,
    FileFormat: exports.FileFormat,
    Frequency: exports.Frequency,
    Jurisdiction: exports.Jurisdiction,
    LicenseDocument: exports.LicenseDocument,
    LinguisticSystem: exports.LinguisticSystem,
    Location: exports.Location,
    LocationPeriodOrJurisdiction: exports.LocationPeriodOrJurisdiction,
    MediaType: exports.MediaType,
    MediaTypeOrExtent: exports.MediaTypeOrExtent,
    MethodOfAccrual: exports.MethodOfAccrual,
    MethodOfInstruction: exports.MethodOfInstruction,
    PeriodOfTime: exports.PeriodOfTime,
    PhysicalMedium: exports.PhysicalMedium,
    PhysicalResource: exports.PhysicalResource,
    Policy: exports.Policy,
    ProvenanceStatement: exports.ProvenanceStatement,
    RightsStatement: exports.RightsStatement,
    SizeOrDuration: exports.SizeOrDuration,
    Standard: exports.Standard,
    Image: exports.Image,
};
(0, package_js_1.linkedOntology)(_this, exports.ns, 'dcterms', exports.loadData, dataFile);
//# sourceMappingURL=dcterms.js.map