import type { RatingSize } from './types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    scale: {
        type: import("vue").PropType<number>;
        default: number;
    };
    size: {
        type: import("vue").PropType<RatingSize>;
        default: string;
    };
    rating: {
        type: import("vue").PropType<number>;
        default: number;
    };
    reviewLink: {
        type: import("vue").PropType<string>;
        default: string;
    };
    reviewText: {
        type: import("vue").PropType<string>;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    scale: {
        type: import("vue").PropType<number>;
        default: number;
    };
    size: {
        type: import("vue").PropType<RatingSize>;
        default: string;
    };
    rating: {
        type: import("vue").PropType<number>;
        default: number;
    };
    reviewLink: {
        type: import("vue").PropType<string>;
        default: string;
    };
    reviewText: {
        type: import("vue").PropType<string>;
        default: string;
    };
}>>, {
    scale: number;
    size: RatingSize;
    rating: number;
    reviewLink: string;
    reviewText: string;
}, {}>, {
    besideText?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
