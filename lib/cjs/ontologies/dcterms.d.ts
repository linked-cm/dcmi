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
        "rdfs:subClassOf"?: undefined;
        "rdfs:seeAlso"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "rdfs:range"?: undefined;
        "rdfs:domain"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "skos:note"?: undefined;
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
        "@type": string[];
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
        "dcterms:modified"?: undefined;
        "dcterms:publisher"?: undefined;
        "dcterms:title"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "rdfs:seeAlso"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "rdfs:range"?: undefined;
        "rdfs:domain"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "skos:note"?: undefined;
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
        "rdfs:subClassOf": {
            "@id": string;
        };
        "dcterms:publisher"?: undefined;
        "dcterms:title"?: undefined;
        "rdfs:seeAlso"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "rdfs:range"?: undefined;
        "rdfs:domain"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "skos:note"?: undefined;
    } | {
        "@id": string;
        "dcterms:hasVersion": {
            "@id": string;
        };
        "dcterms:issued": {
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
        "dcterms:modified"?: undefined;
        "dcterms:publisher"?: undefined;
        "dcterms:title"?: undefined;
        "dcterms:description"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "rdfs:seeAlso"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "rdfs:range"?: undefined;
        "rdfs:domain"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "skos:note"?: undefined;
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
        "rdfs:seeAlso": {
            "@id": string;
        };
        "dcterms:publisher"?: undefined;
        "dcterms:title"?: undefined;
        "dcterms:description"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "rdfs:range"?: undefined;
        "rdfs:domain"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "skos:note"?: undefined;
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
        "rdfs:subClassOf": {
            "@id": string;
        };
        "dcterms:modified"?: undefined;
        "dcterms:publisher"?: undefined;
        "dcterms:title"?: undefined;
        "rdfs:seeAlso"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "rdfs:range"?: undefined;
        "rdfs:domain"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "skos:note"?: undefined;
    } | {
        "@id": string;
        "dcterms:hasVersion": {
            "@id": string;
        };
        "dcterms:issued": {
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
        "dcterms:modified"?: undefined;
        "dcterms:publisher"?: undefined;
        "dcterms:title"?: undefined;
        "dcterms:description"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "rdfs:range"?: undefined;
        "rdfs:domain"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "skos:note"?: undefined;
    } | {
        "@id": string;
        "dcterms:hasVersion": {
            "@id": string;
        };
        "dcterms:issued": {
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
        "rdfs:subClassOf": {
            "@id": string;
        };
        "dcterms:modified"?: undefined;
        "dcterms:publisher"?: undefined;
        "dcterms:title"?: undefined;
        "dcterms:description"?: undefined;
        "rdfs:seeAlso"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "rdfs:range"?: undefined;
        "rdfs:domain"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "skos:note"?: undefined;
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
        "dcterms:publisher"?: undefined;
        "dcterms:title"?: undefined;
        "dcterms:description"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "rdfs:seeAlso"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "rdfs:range"?: undefined;
        "rdfs:domain"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "skos:note"?: undefined;
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
        "dcterms:modified"?: undefined;
        "dcterms:publisher"?: undefined;
        "dcterms:title"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "rdfs:seeAlso"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "rdfs:range"?: undefined;
        "rdfs:domain"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "skos:note"?: undefined;
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
        "dcterms:publisher"?: undefined;
        "dcterms:title"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "rdfs:range"?: undefined;
        "rdfs:domain"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "skos:note"?: undefined;
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
        "dcterms:modified"?: undefined;
        "dcterms:publisher"?: undefined;
        "dcterms:title"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "rdfs:range"?: undefined;
        "rdfs:domain"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "skos:note"?: undefined;
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
        "rdfs:subPropertyOf": {
            "@id": string;
        }[];
        "dcterms:publisher"?: undefined;
        "dcterms:title"?: undefined;
        "dcterms:description"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "rdfs:seeAlso"?: undefined;
        "rdfs:range"?: undefined;
        "rdfs:domain"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "skos:note"?: undefined;
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
        "rdfs:range": {
            "@id": string;
        };
        "rdfs:subPropertyOf": {
            "@id": string;
        }[];
        "dcterms:publisher"?: undefined;
        "dcterms:title"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "rdfs:seeAlso"?: undefined;
        "rdfs:domain"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "skos:note"?: undefined;
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
        "rdfs:domain": {
            "@id": string;
        };
        "rdfs:isDefinedBy": {
            "@id": string;
        };
        "rdfs:label": {
            "@value": string;
            "@language": string;
        };
        "rdfs:range": {
            "@id": string;
        };
        "dcterms:publisher"?: undefined;
        "dcterms:title"?: undefined;
        "dcterms:description"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "rdfs:seeAlso"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "skos:note"?: undefined;
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
        "rdfs:range": {
            "@id": string;
        };
        "dcterms:publisher"?: undefined;
        "dcterms:title"?: undefined;
        "dcterms:description"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "rdfs:seeAlso"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "rdfs:domain"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "skos:note"?: undefined;
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
        "rdfs:range": {
            "@id": string;
        };
        "rdfs:subPropertyOf": {
            "@id": string;
        }[];
        "dcterms:publisher"?: undefined;
        "dcterms:title"?: undefined;
        "dcterms:description"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "rdfs:seeAlso"?: undefined;
        "rdfs:domain"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "skos:note"?: undefined;
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
        "rdfs:domain": {
            "@id": string;
        };
        "rdfs:isDefinedBy": {
            "@id": string;
        };
        "rdfs:label": {
            "@value": string;
            "@language": string;
        };
        "rdfs:range": {
            "@id": string;
        };
        "rdfs:subPropertyOf": {
            "@id": string;
        }[];
        "dcterms:publisher"?: undefined;
        "dcterms:title"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "rdfs:seeAlso"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "skos:note"?: undefined;
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
        "rdfs:range": {
            "@id": string;
        };
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "dcterms:publisher"?: undefined;
        "dcterms:title"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "rdfs:seeAlso"?: undefined;
        "rdfs:domain"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "skos:note"?: undefined;
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
        "rdfs:range": {
            "@id": string;
        };
        "rdfs:subPropertyOf": {
            "@id": string;
        }[];
        "owl:equivalentProperty": {
            "@id": string;
        };
        "dcterms:publisher"?: undefined;
        "dcterms:title"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "rdfs:seeAlso"?: undefined;
        "rdfs:domain"?: undefined;
        "skos:note"?: undefined;
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
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "dcterms:publisher"?: undefined;
        "dcterms:title"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "rdfs:seeAlso"?: undefined;
        "rdfs:range"?: undefined;
        "rdfs:domain"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "skos:note"?: undefined;
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
        "rdfs:range": {
            "@id": string;
        };
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "dcterms:publisher"?: undefined;
        "dcterms:title"?: undefined;
        "dcterms:description"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "rdfs:seeAlso"?: undefined;
        "rdfs:domain"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "skos:note"?: undefined;
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
        "rdfs:subPropertyOf": {
            "@id": string;
        }[];
        "skos:note": {
            "@value": string;
            "@language": string;
        };
        "dcterms:publisher"?: undefined;
        "dcterms:title"?: undefined;
        "dcterms:description"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "rdfs:seeAlso"?: undefined;
        "rdfs:range"?: undefined;
        "rdfs:domain"?: undefined;
        "owl:equivalentProperty"?: undefined;
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
        "rdfs:range": {
            "@id": string;
        };
        "dcterms:publisher"?: undefined;
        "dcterms:title"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "rdfs:seeAlso"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "rdfs:domain"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "skos:note"?: undefined;
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
        "rdfs:subPropertyOf": {
            "@id": string;
        }[];
        "skos:note": {
            "@value": string;
            "@language": string;
        };
        "dcterms:publisher"?: undefined;
        "dcterms:title"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "rdfs:seeAlso"?: undefined;
        "rdfs:range"?: undefined;
        "rdfs:domain"?: undefined;
        "owl:equivalentProperty"?: undefined;
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
        "rdfs:domain": {
            "@id": string;
        };
        "rdfs:isDefinedBy": {
            "@id": string;
        };
        "rdfs:label": {
            "@value": string;
            "@language": string;
        };
        "rdfs:range": {
            "@id": string;
        };
        "rdfs:subPropertyOf": {
            "@id": string;
        }[];
        "dcterms:publisher"?: undefined;
        "dcterms:title"?: undefined;
        "dcterms:description"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "rdfs:seeAlso"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "skos:note"?: undefined;
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
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "skos:note": {
            "@value": string;
            "@language": string;
        };
        "dcterms:publisher"?: undefined;
        "dcterms:title"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "rdfs:seeAlso"?: undefined;
        "rdfs:range"?: undefined;
        "rdfs:domain"?: undefined;
        "owl:equivalentProperty"?: undefined;
    })[];
}>;
export declare const ns: (term: string) => import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const _ontologyResource: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const AgentClass: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const Agent: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const BibliographicResource: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const FileFormat: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const Frequency: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const Jurisdiction: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const LicenseDocument: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const LinguisticSystem: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const Location: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const LocationPeriodOrJurisdiction: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const MediaType: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const MediaTypeOrExtent: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const MethodOfAccrual: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const MethodOfInstruction: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const PeriodOfTime: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const PhysicalMedium: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const PhysicalResource: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const Policy: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const ProvenanceStatement: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const RightsStatement: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const SizeOrDuration: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const Standard: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const abstract: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const accessRights: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const accrualMethod: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const accrualPeriodicity: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const accrualPolicy: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const alternative: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const audience: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const available: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const bibliographicCitation: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const conformsTo: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const contributor: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const coverage: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const created: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const creator: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const date: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const dateAccepted: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const dateCopyrighted: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const dateSubmitted: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const description: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const educationLevel: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const extent: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const format: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const hasFormat: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const hasPart: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const hasVersion: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const identifier: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const instructionalMethod: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const isFormatOf: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const isPartOf: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const isReferencedBy: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const isReplacedBy: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const isRequiredBy: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const issued: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const isVersionOf: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const language: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const license: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const mediator: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const medium: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const modified: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const provenance: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const publisher: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const references: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const relation: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const replaces: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const requires: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const rights: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const rightsHolder: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const source: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const spatial: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const subject: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const tableOfContents: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const temporal: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const title: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const type: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const valid: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const Image: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const dcterms: {
    _ontologyResource: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    abstract: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    accessRights: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    accrualMethod: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    accrualPeriodicity: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    accrualPolicy: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    alternative: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    audience: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    available: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    bibliographicCitation: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    conformsTo: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    contributor: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    coverage: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    created: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    creator: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    date: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    dateAccepted: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    dateCopyrighted: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    dateSubmitted: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    description: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    educationLevel: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    extent: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    format: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    hasFormat: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    hasPart: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    hasVersion: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    identifier: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    instructionalMethod: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    isFormatOf: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    isPartOf: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    isReferencedBy: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    isReplacedBy: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    isRequiredBy: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    issued: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    isVersionOf: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    language: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    license: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    mediator: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    medium: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    modified: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    provenance: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    publisher: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    references: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    relation: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    replaces: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    requires: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    rights: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    rightsHolder: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    source: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    spatial: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    subject: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    tableOfContents: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    temporal: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    title: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    type: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    valid: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    Agent: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    AgentClass: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    BibliographicResource: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    FileFormat: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    Frequency: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    Jurisdiction: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    LicenseDocument: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    LinguisticSystem: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    Location: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    LocationPeriodOrJurisdiction: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    MediaType: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    MediaTypeOrExtent: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    MethodOfAccrual: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    MethodOfInstruction: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    PeriodOfTime: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    PhysicalMedium: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    PhysicalResource: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    Policy: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    ProvenanceStatement: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    RightsStatement: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    SizeOrDuration: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    Standard: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    Image: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
};
