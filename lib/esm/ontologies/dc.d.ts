export declare const loadData: () => Promise<{
    "@context": {
        rdf: string;
        owl: string;
        skos: string;
        dcam: string;
        dcterms: string;
        rdfs: string;
    };
    "@graph": ({
        "@id": string;
        "dcterms:modified": {
            "@value": string;
            "@type": string;
        };
        "dcterms:publisher": {
            "@id": string;
        };
        "dcterms:title": {
            "@value": string;
            "@language": string;
        };
        "dcterms:description"?: undefined;
        "dcterms:hasVersion"?: undefined;
        "dcterms:issued"?: undefined;
        "@type"?: undefined;
        "rdfs:comment"?: undefined;
        "rdfs:isDefinedBy"?: undefined;
        "rdfs:label"?: undefined;
        "skos:note"?: undefined;
        "rdfs:seeAlso"?: undefined;
    } | {
        "@id": string;
        "dcterms:description": {
            "@value": string;
            "@language": string;
        };
        "dcterms:hasVersion": {
            "@id": string;
        };
        "dcterms:issued": {
            "@value": string;
            "@type": string;
        };
        "dcterms:modified": {
            "@value": string;
            "@type": string;
        };
        "@type": string;
        "rdfs:comment": {
            "@value": string;
            "@language": string;
        };
        "rdfs:isDefinedBy": {
            "@id": string;
        };
        "rdfs:label": {
            "@value": string;
            "@language": string;
        };
        "skos:note": {
            "@value": string;
            "@language": string;
        };
        "dcterms:publisher"?: undefined;
        "dcterms:title"?: undefined;
        "rdfs:seeAlso"?: undefined;
    } | {
        "@id": string;
        "dcterms:description": {
            "@value": string;
            "@language": string;
        };
        "dcterms:hasVersion": {
            "@id": string;
        };
        "dcterms:issued": {
            "@value": string;
            "@type": string;
        };
        "dcterms:modified": {
            "@value": string;
            "@type": string;
        };
        "@type": string;
        "rdfs:comment": {
            "@value": string;
            "@language": string;
        };
        "rdfs:isDefinedBy": {
            "@id": string;
        };
        "rdfs:label": {
            "@value": string;
            "@language": string;
        };
        "rdfs:seeAlso": {
            "@id": string;
        };
        "skos:note": {
            "@value": string;
            "@language": string;
        };
        "dcterms:publisher"?: undefined;
        "dcterms:title"?: undefined;
    } | {
        "@id": string;
        "dcterms:hasVersion": {
            "@id": string;
        };
        "dcterms:issued": {
            "@value": string;
            "@type": string;
        };
        "dcterms:modified": {
            "@value": string;
            "@type": string;
        };
        "@type": string;
        "rdfs:comment": {
            "@value": string;
            "@language": string;
        };
        "rdfs:isDefinedBy": {
            "@id": string;
        };
        "rdfs:label": {
            "@value": string;
            "@language": string;
        };
        "skos:note": {
            "@value": string;
            "@language": string;
        };
        "dcterms:publisher"?: undefined;
        "dcterms:title"?: undefined;
        "dcterms:description"?: undefined;
        "rdfs:seeAlso"?: undefined;
    })[];
}>;
export declare const ns: (term: string) => import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const _ontologyResource: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const contributor: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const coverage: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const creator: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const date: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const description: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const format: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const identifier: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const language: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const publisher: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const relation: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const rights: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const source: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const subject: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const title: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const type: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const dcelems: {
    _ontologyResource: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    contributor: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    coverage: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    creator: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    date: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    description: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    format: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    identifier: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    language: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    publisher: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    relation: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    rights: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    source: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    subject: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    title: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    type: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
};
