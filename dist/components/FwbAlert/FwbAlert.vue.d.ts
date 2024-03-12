import type { AlertType } from './types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    type: {
        type: import("vue").PropType<AlertType>;
        default: string;
    };
    closable: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    icon: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    border: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: () => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<AlertType>;
        default: string;
    };
    closable: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    icon: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    border: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>> & {
    onClose?: (() => any) | undefined;
}, {
    type: AlertType;
    closable: boolean;
    icon: boolean;
    border: boolean;
}, {}>, {
    default: any;
    'close-icon': any;
    icon: any;
    title: any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
