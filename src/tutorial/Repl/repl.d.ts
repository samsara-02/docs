import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import * as defaultCompiler from 'vue/compiler-sfc';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import { SFCAsyncStyleCompileOptions } from 'vue/compiler-sfc';
import { SFCScriptCompileOptions } from 'vue/compiler-sfc';
import { SFCTemplateCompileOptions } from 'vue/compiler-sfc';
import { VNodeProps } from 'vue';

declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;

declare type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};

export declare function compileFile(store: Store, { filename, code, compiled }: File_2): Promise<void>;

declare class File_2 {
    filename: string;
    code: string;
    hidden: boolean;
    compiled: {
        js: string;
        css: string;
        ssr: string;
    };
    constructor(filename: string, code?: string, hidden?: boolean);
}
export { File_2 as File }

export declare type OutputModes = 'preview' | 'js' | 'css' | 'ssr';

export declare const Repl: DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ReplProps>, {
store: () => ReplStore;
autoResize: boolean;
showCompileOutput: boolean;
showImportMap: boolean;
clearConsole: boolean;
ssr: boolean;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, Record<string, any>, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ReplProps>, {
store: () => ReplStore;
autoResize: boolean;
showCompileOutput: boolean;
showImportMap: boolean;
clearConsole: boolean;
ssr: boolean;
}>>>, {
ssr: boolean;
store: Store;
showCompileOutput: boolean;
autoResize: boolean;
showImportMap: boolean;
clearConsole: boolean;
}>;

export declare interface ReplProps {
    store?: Store;
    autoResize?: boolean;
    showCompileOutput?: boolean;
    showImportMap?: boolean;
    clearConsole?: boolean;
    sfcOptions?: SFCOptions;
    layout?: string;
    ssr?: boolean;
}

export declare class ReplStore implements Store {
    state: StoreState;
    compiler: typeof defaultCompiler;
    vueVersion?: string;
    options?: SFCOptions;
    initialShowOutput: boolean;
    initialOutputMode: OutputModes;
    private defaultVueRuntimeURL;
    private defaultVueServerRendererURL;
    private pendingCompiler;
    constructor({ serializedState, defaultVueRuntimeURL, defaultVueServerRendererURL, showOutput, outputMode }?: StoreOptions);
    init(): void;
    setActive(filename: string): void;
    addFile(fileOrFilename: string | File_2): void;
    deleteFile(filename: string): void;
    serialize(): string;
    getFiles(): Record<string, string>;
    setFiles(newFiles: Record<string, string>, mainFile?: string): Promise<void>;
    private initImportMap;
    getImportMap(): any;
    setImportMap(map: {
        imports: Record<string, string>;
        scopes?: Record<string, Record<string, string>>;
    }): void;
    setVueVersion(version: string): Promise<void>;
    resetVueVersion(): void;
}

export declare interface SFCOptions {
    script?: Omit<SFCScriptCompileOptions, 'id'>;
    style?: SFCAsyncStyleCompileOptions;
    template?: SFCTemplateCompileOptions;
}

export declare interface Store {
    state: StoreState;
    options?: SFCOptions;
    compiler: typeof defaultCompiler;
    vueVersion?: string;
    init: () => void;
    setActive: (filename: string) => void;
    addFile: (filename: string | File_2) => void;
    deleteFile: (filename: string) => void;
    getImportMap: () => any;
    initialShowOutput: boolean;
    initialOutputMode: OutputModes;
}

export declare interface StoreOptions {
    serializedState?: string;
    showOutput?: boolean;
    outputMode?: OutputModes | string;
    defaultVueRuntimeURL?: string;
    defaultVueServerRendererURL?: string;
}

export declare interface StoreState {
    mainFile: string;
    files: Record<string, File_2>;
    activeFile: File_2;
    errors: (string | Error)[];
    vueRuntimeURL: string;
    vueServerRendererURL: string;
}

export { }
