declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    flush: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    alwaysOpen: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    openFirstItem: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    flush: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    alwaysOpen: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    openFirstItem: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>>, {
    flush: boolean;
    alwaysOpen: boolean;
    openFirstItem: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
