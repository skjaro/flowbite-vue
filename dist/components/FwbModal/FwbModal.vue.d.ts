import type { ModalSize } from './types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    size: {
        type: import("vue").PropType<ModalSize>;
        default: string;
    };
    notEscapable: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    persistent: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "click:outside")[], "close" | "click:outside", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: import("vue").PropType<ModalSize>;
        default: string;
    };
    notEscapable: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    persistent: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
    "onClick:outside"?: ((...args: any[]) => any) | undefined;
}, {
    size: ModalSize;
    notEscapable: boolean;
    persistent: boolean;
}, {}>, {
    header?(_: {}): any;
    "close-icon"?(_: {}): any;
    body?(_: {}): any;
    footer?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
