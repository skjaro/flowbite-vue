import type { TabsVariant } from './types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    variant: {
        type: import("vue").PropType<TabsVariant>;
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<string>;
        default: string;
    };
    directive: {
        type: import("vue").PropType<"if" | "show">;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "click:pane")[], "update:modelValue" | "click:pane", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    variant: {
        type: import("vue").PropType<TabsVariant>;
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<string>;
        default: string;
    };
    directive: {
        type: import("vue").PropType<"if" | "show">;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onClick:pane"?: ((...args: any[]) => any) | undefined;
}, {
    variant: TabsVariant;
    modelValue: string;
    directive: "if" | "show";
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
