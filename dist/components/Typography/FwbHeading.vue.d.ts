declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    color: {
        type: import("vue").PropType<string>;
        default: string;
    };
    tag: {
        type: import("vue").PropType<"h1" | "h2" | "h3" | "h4" | "h5" | "h6">;
        default: string;
    };
    customSize: {
        type: import("vue").PropType<string>;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: import("vue").PropType<string>;
        default: string;
    };
    tag: {
        type: import("vue").PropType<"h1" | "h2" | "h3" | "h4" | "h5" | "h6">;
        default: string;
    };
    customSize: {
        type: import("vue").PropType<string>;
        default: string;
    };
}>>, {
    color: string;
    tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    customSize: string;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
