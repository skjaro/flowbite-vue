declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    href: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
    aClass: {
        type: import("vue").PropType<string>;
        default: string;
    };
    component: {
        type: import("vue").PropType<string>;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    href: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
    aClass: {
        type: import("vue").PropType<string>;
        default: string;
    };
    component: {
        type: import("vue").PropType<string>;
        default: string;
    };
}>>, {
    href: string;
    aClass: string;
    component: string;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
