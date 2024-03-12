import { type InputSize, type InputType, type ValidationStatus } from './types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    type: {
        type: import("vue").PropType<InputType>;
        default: string;
    };
    label: {
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
        required: true;
        default: string;
    };
    required: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    validationStatus: {
        type: import("vue").PropType<ValidationStatus>;
        default: undefined;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<InputType>;
        default: string;
    };
    label: {
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
        required: true;
        default: string;
    };
    required: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    validationStatus: {
        type: import("vue").PropType<ValidationStatus>;
        default: undefined;
    };
}>>, {
    type: InputType;
    label: string;
    disabled: boolean;
    size: InputSize;
    modelValue: string;
    required: boolean;
    validationStatus: ValidationStatus;
}, {}>, {
    prefix?(_: {}): any;
    suffix?(_: {}): any;
    validationMessage?(_: {}): any;
    helper?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
