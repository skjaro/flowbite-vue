import type { TooltipPlacement, TooltipStyle, TooltipTrigger } from './types';
import 'floating-vue/dist/style.css';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    trigger: {
        type: import("vue").PropType<TooltipTrigger>;
        default: string;
    };
    placement: {
        type: import("vue").PropType<TooltipPlacement>;
        default: string;
    };
    theme: {
        type: import("vue").PropType<TooltipStyle>;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    trigger: {
        type: import("vue").PropType<TooltipTrigger>;
        default: string;
    };
    placement: {
        type: import("vue").PropType<TooltipPlacement>;
        default: string;
    };
    theme: {
        type: import("vue").PropType<TooltipStyle>;
        default: string;
    };
}>>, {
    trigger: TooltipTrigger;
    placement: TooltipPlacement;
    theme: TooltipStyle;
}, {}>, {
    trigger?(_: {}): any;
    content?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
