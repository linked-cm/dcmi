import { Shape } from '@_linked/core/shapes/Shape';
import type { NodeReferenceValue } from '@_linked/core/utils/NodeReference';
export declare class Image extends Shape {
    static targetClass: NodeReferenceValue;
    get title(): string;
    get description(): string;
    /**
     * Sets the date that the image was taken.
     * Needs to confirm ISO 8601 date/time,
     * @see pattern from: https://stackoverflow.com/a/37563868
     * @see https://www.w3.org/TR/NOTE-datetime
     */
    get date(): string;
    get format(): string;
    get creator(): NodeReferenceValue;
    get publisher(): NodeReferenceValue;
    get subjects(): NodeReferenceValue[];
}
