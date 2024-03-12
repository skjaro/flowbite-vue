type FooterType = 'sitemap' | 'default' | 'logo' | 'socialmedia';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    sticky: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    footerType: {
        type: import("vue").PropType<FooterType>;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    sticky: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    footerType: {
        type: import("vue").PropType<FooterType>;
        default: string;
    };
}>>, {
    sticky: boolean;
    footerType: FooterType;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
