export * from './params';
export * from './option-formatters';
export declare const toPrefixedHex: (hexStr: string) => string;
export declare const sanitizeHex: (hexStr: string) => string;
export declare const isHex: (hex: string) => boolean;
export declare const newNonce: () => number;
export declare const toInteger: (input: any) => number | null;
export declare const isArray: (o: any) => boolean;
export declare const isObject: (o: any) => boolean;
export declare const isNull: (o: any) => boolean;
export declare const isUndefined: (o: any) => boolean;
export declare const isFunction: (o: any) => boolean;
export declare const validNumberOrDefault: (value: any, defaultValue: number) => number;
export declare const validAddressOrError: (input: any, msg?: string) => string;
export declare const validBytes32OrError: (input: any, msg?: string) => string;
export declare const leftPadToBytes32: (input: string) => string;