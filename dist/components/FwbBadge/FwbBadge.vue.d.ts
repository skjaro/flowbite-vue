import type { BadgeSize, BadgeType } from './types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    type: {
        type: import("vue").PropType<BadgeType>;
        default: string;
    };
    href: {
        type: import("vue").PropType<string | null>;
        default: null;
    };
    size: {
        type: import("vue").PropType<BadgeSize>;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<BadgeType>;
        default: string;
    };
    href: {
        type: import("vue").PropType<string | null>;
        default: null;
    };
    size: {
        type: import("vue").PropType<BadgeSize>;
        default: string;
    };
}>>, {
    type: BadgeType;
    href: string | null;
    size: BadgeSize;
}, {}>, {
    icon?(_: {}): any;
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
