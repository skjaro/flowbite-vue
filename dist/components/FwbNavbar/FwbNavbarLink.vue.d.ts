declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    link: {
        type: import("vue").PropType<string>;
        default: string;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    linkAttr: {
        type: import("vue").PropType<string>;
        default: string;
    };
    component: {
        type: import("vue").PropType<string>;
        default: string;
    };
    isActive: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (event: Event) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    link: {
        type: import("vue").PropType<string>;
        default: string;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    linkAttr: {
        type: import("vue").PropType<string>;
        default: string;
    };
    component: {
        type: import("vue").PropType<string>;
        default: string;
    };
    isActive: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>> & {
    onClick?: ((event: Event) => any) | undefined;
}, {
    link: string;
    disabled: boolean;
    linkAttr: string;
    component: string;
    isActive: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
