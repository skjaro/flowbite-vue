import type { ProgressLabelPosition, ProgressSize, ProgressVariant } from './types';
declare const _default: import("vue").DefineComponent<{
    label: {
        type: import("vue").PropType<string>;
        default: string;
    };
    progress: {
        type: import("vue").PropType<number>;
        default: number;
    };
    color: {
        type: import("vue").PropType<ProgressVariant>;
        default: string;
    };
    size: {
        type: import("vue").PropType<ProgressSize>;
        default: string;
    };
    labelPosition: {
        type: import("vue").PropType<ProgressLabelPosition>;
        default: string;
    };
    labelProgress: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: import("vue").PropType<string>;
        default: string;
    };
    progress: {
        type: import("vue").PropType<number>;
        default: number;
    };
    color: {
        type: import("vue").PropType<ProgressVariant>;
        default: string;
    };
    size: {
        type: import("vue").PropType<ProgressSize>;
        default: string;
    };
    labelPosition: {
        type: import("vue").PropType<ProgressLabelPosition>;
        default: string;
    };
    labelProgress: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>>, {
    label: string;
    progress: number;
    color: ProgressVariant;
    size: ProgressSize;
    labelPosition: ProgressLabelPosition;
    labelProgress: boolean;
}, {}>;
export default _default;
