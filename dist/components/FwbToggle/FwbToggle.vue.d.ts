import type { InputSize } from '../../components/FwbInput/types';
declare const _default: import("vue").DefineComponent<{
    label: {
        type: import("vue").PropType<string>;
        default: string;
    };
    color: {
        type: import("vue").PropType<string>;
        default: string;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    size: {
        type: import("vue").PropType<InputSize>;
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: import("vue").PropType<string>;
        default: string;
    };
    color: {
        type: import("vue").PropType<string>;
        default: string;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    size: {
        type: import("vue").PropType<InputSize>;
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    label: string;
    color: string;
    disabled: boolean;
    size: InputSize;
    modelValue: boolean;
}, {}>;
export default _default;
