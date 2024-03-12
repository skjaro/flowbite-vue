import type { InputSize } from './../FwbInput/types';
import { type OptionsType, type ValidationStatus } from './types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    label: {
        type: import("vue").PropType<string>;
        default: string;
    };
    placeholder: {
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
        type: import("vue").PropType<string>;
        default: string;
    };
    validationStatus: {
        type: import("vue").PropType<ValidationStatus>;
        default: undefined;
    };
    options: {
        type: import("vue").PropType<OptionsType[]>;
        default: () => never[];
    };
    underline: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: import("vue").PropType<string>;
        default: string;
    };
    placeholder: {
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
        type: import("vue").PropType<string>;
        default: string;
    };
    validationStatus: {
        type: import("vue").PropType<ValidationStatus>;
        default: undefined;
    };
    options: {
        type: import("vue").PropType<OptionsType[]>;
        default: () => never[];
    };
    underline: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    label: string;
    placeholder: string;
    disabled: boolean;
    size: InputSize;
    modelValue: string;
    validationStatus: ValidationStatus;
    options: OptionsType[];
    underline: boolean;
}, {}>, {
    validationMessage?(_: {}): any;
    helper?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
