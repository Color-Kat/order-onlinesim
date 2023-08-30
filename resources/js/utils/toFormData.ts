// export const toFormData = (data: any) => {
//     const formData = new FormData();
//
//     for(let key in data) {
//         formData.append(key, data[key]);
//     }
//
//     return formData;
// }

export function toFormData(data: any, formData?: FormData, parentKey?: string) {
    formData = formData || new FormData();

    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            let value = data[key];
            let formKey = parentKey ? `${parentKey}[${key}]` : key;

            if (typeof value === 'object' && !(value instanceof File)) {
                toFormData(value, formData, formKey);
            } else {
                formData.append(formKey, value);
            }
        }
    }

    return formData;
}