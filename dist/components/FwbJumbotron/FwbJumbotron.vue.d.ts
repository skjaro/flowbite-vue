import type { HeaderLevel } from './types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    headerClasses: {
        type: import("vue").PropType<string>;
        default: string;
    };
    headerLevel: {
        type: import("vue").PropType<HeaderLevel>;
        default: number;
    };
    subText: {
        type: import("vue").PropType<string>;
        default: string;
    };
    subTextClasses: {
        type: import("vue").PropType<string>;
        default: string;
    };
    headerText: {
        type: import("vue").PropType<string>;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    headerClasses: {
        type: import("vue").PropType<string>;
        default: string;
    };
    headerLevel: {
        type: import("vue").PropType<HeaderLevel>;
        default: number;
    };
    subText: {
        type: import("vue").PropType<string>;
        default: string;
    };
    subTextClasses: {
        type: import("vue").PropType<string>;
        default: string;
    };
    headerText: {
        type: import("vue").PropType<string>;
        default: string;
    };
}>>, {
    headerClasses: string;
    headerLevel: HeaderLevel;
    subText: string;
    subTextClasses: string;
    headerText: string;
}, {}>, {
    default: any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
