declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    link: {
        type: import("vue").PropType<string>;
        default: string;
    };
    tag: {
        type: import("vue").PropType<string>;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    link: {
        type: import("vue").PropType<string>;
        default: string;
    };
    tag: {
        type: import("vue").PropType<string>;
        default: string;
    };
}>>, {
    link: string;
    tag: string;
}, {}>, {
    icon?(_: {}): any;
    default?(_: {}): any;
    suffix?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
