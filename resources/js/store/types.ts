export interface IResponse<T = any> {
    status: 'success' | 'error';
    code: number;
    data: T;
    message: string;
    errors: { [key: string]: string };
}