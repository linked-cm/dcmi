export declare const loadData: () => Promise<{
    "@context": {
        dcam: string;
        xsd: string;
        dcterms: string;
        rdfs: string;
        dcmitype: string;
    };
    "@graph": ({
        "@id": string;
        "dcterms:title": {
            "@value": string;
            "@language": string;
        }[];
        "dcterms:publisher": {
            "@id": string;
        }[];
        "dcterms:modified": {
            "@value": string;
            "@type": string;
        }[];
        "rdfs:label"?: undefined;
        "rdfs:comment"?: undefined;
        "dcterms:description"?: undefined;
        "@type"?: undefined;
        "dcam:memberOf"?: undefined;
        "dcterms:issued"?: undefined;
        "rdfs:isDefinedBy"?: undefined;
        "rdfs:subClassOf"?: undefined;
    } | {
        "@id": string;
        "rdfs:label": {
            "@value": string;
            "@language": string;
        }[];
        "rdfs:comment": {
            "@value": string;
            "@language": string;
        }[];
        "dcterms:description": {
            "@value": string;
            "@language": string;
        }[];
        "@type": string[];
        "dcam:memberOf": {
            "@id": string;
        }[];
        "dcterms:issued": {
            "@value": string;
            "@type": string;
        }[];
        "rdfs:isDefinedBy": {
            "@id": string;
        }[];
        "dcterms:title"?: undefined;
        "dcterms:publisher"?: undefined;
        "dcterms:modified"?: undefined;
        "rdfs:subClassOf"?: undefined;
    } | {
        "@id": string;
        "rdfs:label": {
            "@value": string;
            "@language": string;
        }[];
        "rdfs:comment": {
            "@value": string;
            "@language": string;
        }[];
        "dcterms:description": {
            "@value": string;
            "@language": string;
        }[];
        "@type": string[];
        "dcam:memberOf": {
            "@id": string;
        }[];
        "rdfs:subClassOf": {
            "@id": string;
        }[];
        "dcterms:issued": {
            "@value": string;
            "@type": string;
        }[];
        "rdfs:isDefinedBy": {
            "@id": string;
        }[];
        "dcterms:title"?: undefined;
        "dcterms:publisher"?: undefined;
        "dcterms:modified"?: undefined;
    } | {
        "@id": string;
        "dcterms:title"?: undefined;
        "dcterms:publisher"?: undefined;
        "dcterms:modified"?: undefined;
        "rdfs:label"?: undefined;
        "rdfs:comment"?: undefined;
        "dcterms:description"?: undefined;
        "@type"?: undefined;
        "dcam:memberOf"?: undefined;
        "dcterms:issued"?: undefined;
        "rdfs:isDefinedBy"?: undefined;
        "rdfs:subClassOf"?: undefined;
    })[];
}>;
export declare const ns: (term: string) => import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const _ontologyResource: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const Collection: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const Dataset: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const Event: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const Image: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const InteractiveResource: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const MovingImage: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const PhysicalObject: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const Service: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const Software: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const Sound: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const StillImage: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const Text: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const dcmitype: {
    _ontologyResource: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    Collection: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    Dataset: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    Event: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    Image: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    InteractiveResource: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    MovingImage: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    PhysicalObject: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    Service: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    Software: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    Sound: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    StillImage: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    Text: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
};
