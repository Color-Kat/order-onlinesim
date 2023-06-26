export interface IValidatorErrors {
    message: string;
    errors: {
        [key: string]: string[];
    }
}