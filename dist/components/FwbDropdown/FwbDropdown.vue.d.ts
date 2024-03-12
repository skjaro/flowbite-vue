import type { DropdownPlacement } from './types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    text: {
        type: import("vue").PropType<string>;
        default: string;
    };
    placement: {
        type: import("vue").PropType<DropdownPlacement>;
        default: string;
    };
    transition: {
        type: import("vue").PropType<string>;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    text: {
        type: import("vue").PropType<string>;
        default: string;
    };
    placement: {
        type: import("vue").PropType<DropdownPlacement>;
        default: string;
    };
    transition: {
        type: import("vue").PropType<string>;
        default: string;
    };
}>>, {
    text: string;
    placement: DropdownPlacement;
    transition: string;
}, {}>, {
    trigger?(_: {}): any;
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
