import type { InputSize } from '@/components/FwbInput/types';
declare const _default: import("vue").DefineComponent<{
    label: {
        type: import("vue").PropType<string>;
        default: string;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    max: {
        type: import("vue").PropType<number>;
        default: number;
    };
    min: {
        type: import("vue").PropType<number>;
        default: number;
    };
    size: {
        type: import("vue").PropType<InputSize>;
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<number>;
        default: number;
    };
    steps: {
        type: import("vue").PropType<number>;
        default: number;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: import("vue").PropType<string>;
        default: string;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    max: {
        type: import("vue").PropType<number>;
        default: number;
    };
    min: {
        type: import("vue").PropType<number>;
        default: number;
    };
    size: {
        type: import("vue").PropType<InputSize>;
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<number>;
        default: number;
    };
    steps: {
        type: import("vue").PropType<number>;
        default: number;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    label: string;
    disabled: boolean;
    max: number;
    min: number;
    size: InputSize;
    modelValue: number;
    steps: number;
}, {}>;
export default _default;
