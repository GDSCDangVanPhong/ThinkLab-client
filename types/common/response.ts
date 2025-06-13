export type GraphQLResponse<T> = {
    data?: T;
    errors?: {
        message: string;
        locations?: { line: number; column: number }[];
        path?: string[];
        extensions?: any;
    }[];
};