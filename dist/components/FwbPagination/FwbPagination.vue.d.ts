import type { PaginationLayout } from './types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    modelValue: {
        type: import("vue").PropType<number>;
        default: number;
    };
    totalPages: {
        type: import("vue").PropType<number>;
        default: undefined;
    };
    perPage: {
        type: import("vue").PropType<number>;
        default: number;
    };
    totalItems: {
        type: import("vue").PropType<number>;
        default: number;
    };
    layout: {
        type: import("vue").PropType<PaginationLayout>;
        default: string;
    };
    showIcons: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    sliceLength: {
        type: import("vue").PropType<number>;
        default: number;
    };
    previousLabel: {
        type: import("vue").PropType<string>;
        default: string;
    };
    nextLabel: {
        type: import("vue").PropType<string>;
        default: string;
    };
    enableFirstAndLastButtons: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    showLabels: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    large: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:model-value': (page: number) => void;
    'page-changed': (page: number) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<number>;
        default: number;
    };
    totalPages: {
        type: import("vue").PropType<number>;
        default: undefined;
    };
    perPage: {
        type: import("vue").PropType<number>;
        default: number;
    };
    totalItems: {
        type: import("vue").PropType<number>;
        default: number;
    };
    layout: {
        type: import("vue").PropType<PaginationLayout>;
        default: string;
    };
    showIcons: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    sliceLength: {
        type: import("vue").PropType<number>;
        default: number;
    };
    previousLabel: {
        type: import("vue").PropType<string>;
        default: string;
    };
    nextLabel: {
        type: import("vue").PropType<string>;
        default: string;
    };
    enableFirstAndLastButtons: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    showLabels: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    large: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>> & {
    "onUpdate:model-value"?: ((page: number) => any) | undefined;
    "onPage-changed"?: ((page: number) => any) | undefined;
}, {
    modelValue: number;
    totalPages: number;
    perPage: number;
    totalItems: number;
    layout: PaginationLayout;
    showIcons: boolean;
    sliceLength: number;
    previousLabel: string;
    nextLabel: string;
    enableFirstAndLastButtons: boolean;
    showLabels: boolean;
    large: boolean;
}, {}>, {
    start: any;
    'first-button': any;
    'prev-button': any;
    'prev-icon': any;
    'page-button': any;
    'next-button': any;
    'next-icon': any;
    'last-button': any;
    end: any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
