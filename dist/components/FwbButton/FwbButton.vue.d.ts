import type { ButtonGradient, ButtonMonochromeGradient, ButtonSize, ButtonVariant } from './types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    class: {
        type: import("vue").PropType<string>;
        default: string;
    };
    color: {
        type: import("vue").PropType<ButtonVariant>;
        default: string;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    href: {
        type: import("vue").PropType<string>;
        default: string;
    };
    size: {
        type: import("vue").PropType<ButtonSize>;
        default: string;
    };
    loading: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    gradient: {
        type: import("vue").PropType<ButtonGradient | null>;
        default: null;
    };
    shadow: {
        type: import("vue").PropType<ButtonMonochromeGradient | null>;
        default: null;
    };
    pill: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    square: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    outline: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    loadingPosition: {
        type: import("vue").PropType<"prefix" | "suffix">;
        default: string;
    };
    tag: {
        type: import("vue").PropType<string>;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    class: {
        type: import("vue").PropType<string>;
        default: string;
    };
    color: {
        type: import("vue").PropType<ButtonVariant>;
        default: string;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    href: {
        type: import("vue").PropType<string>;
        default: string;
    };
    size: {
        type: import("vue").PropType<ButtonSize>;
        default: string;
    };
    loading: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    gradient: {
        type: import("vue").PropType<ButtonGradient | null>;
        default: null;
    };
    shadow: {
        type: import("vue").PropType<ButtonMonochromeGradient | null>;
        default: null;
    };
    pill: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    square: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    outline: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    loadingPosition: {
        type: import("vue").PropType<"prefix" | "suffix">;
        default: string;
    };
    tag: {
        type: import("vue").PropType<string>;
        default: string;
    };
}>>, {
    class: string;
    color: ButtonVariant;
    disabled: boolean;
    href: string;
    size: ButtonSize;
    loading: boolean;
    gradient: ButtonGradient | null;
    shadow: ButtonMonochromeGradient | null;
    pill: boolean;
    square: boolean;
    outline: boolean;
    loadingPosition: "prefix" | "suffix";
    tag: string;
}, {}>, {
    prefix?(_: {}): any;
    default?(_: {}): any;
    suffix?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
