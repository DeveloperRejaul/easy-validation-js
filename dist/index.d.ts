interface Option {
    isRequire: boolean;
    error: boolean;
    message: string;
}

declare const _default: {
    isString: (value: string, option?: Option) => string | true;
    isNumber: (number: number, option?: Option) => string | true;
    isBool: (bool: boolean, option?: Option) => string | true;
    isArray: (arr: [], option?: Option) => string | true;
    isObj: (obj: object, option?: Option) => string | {
        len: (num: number, option?: Option) => string | true;
        val: (objValue: string, option?: Option) => string | true;
        key: (keys: string, option?: Option) => string | true;
        keySome: (keys: string, option?: Option) => string | true;
        valType: (type: string, option?: Option) => string | true;
        schema: (schema: Record<string, string>, option?: Option) => string | true;
        schemaStrict: (schema: Record<string, string>, option?: Option) => string | true;
    };
};

export { _default as Easy };
